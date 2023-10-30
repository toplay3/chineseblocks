import * as THREE from 'three';
import { GameConfiguration, Point, Projection } from './types';
import { BlockSurface } from './BlockSurface';
import { Block } from './block';
import { normalizeAngle } from './helper';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export class Game {
  gameConfiguration: GameConfiguration;
  gameElement: HTMLElement;
  gameScale: number;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer();
  offsetOrigin: Point;
  mousePressed: boolean = false;
  mouseDragging: boolean = false;
  boardGrids: BlockSurface[] = [];
  boardBlocks: (Block | null)[][][] = []; // x, y, z
  raycaster = new THREE.Raycaster();
  cursorPointer = new THREE.Vector2();
  currentHoverObj: THREE.Object3D | null = null;

  constructor(gameElement: HTMLElement, gameScale: number, gameConfiguration: GameConfiguration) {
    this.gameConfiguration = gameConfiguration;
    this.gameElement = gameElement;
    this.gameScale = gameScale;
    this.offsetOrigin = {
      x: -1 * this.gameConfiguration.gameDimensions.x * this.gameScale / 2,
      y: -1 * this.gameConfiguration.gameDimensions.y * this.gameScale / 2,
      z: -1 * this.gameConfiguration.gameDimensions.z * this.gameScale / 2,
    }
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    gameElement.appendChild( this.renderer.domElement );
    this.renderBoard();
    this.setCamera({x: 5, y: 20, z: 30});
    this.registerActions(); 
  }

  destructor() {
    this.gameElement.removeChild( this.renderer.domElement );
  }

  setCamera(position?: Point) {
    if (position) {
      this.camera.position.set( position.x, position.y, position.z );
      this.camera.lookAt( 0, 0, 0 );
    }
    this.renderer.render( this.scene, this.camera );
  }

  registerActions() {
    this.renderer.domElement.addEventListener('mousedown', _event => {
      this.mousePressed = true;
      this.mouseDragging = false;
    })

    this.renderer.domElement.addEventListener('mouseup', event => {
      this.mousePressed = false;
      if (!this.mouseDragging) {
        this.handleClick(event);
      }
      this.mouseDragging = false;
    })

    this.renderer.domElement.addEventListener('mousemove', event => {
      if(!this.mousePressed){
        this.handleHover(event);
      } else {
        this.mouseDragging = true;
        this.handleDrag(event);
      }
    })

    this.renderer.domElement.addEventListener("wheel", event => this.handleWheel(event))
  }

  renderBoard() {
    // const axesHelper = new THREE.AxesHelper( 5 );
    // this.scene.add( axesHelper );
    const textMaterial = new THREE.MeshBasicMaterial();
    const textGeometry = new TextGeometry( 'front', {
      font: window.threeDFont,
      size: 0.5,
      height: 0.05,
      curveSegments: 30,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.01,
      bevelSegments: 1
    } );
    const text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.y = -0.5 * this.gameScale;
    text.position.z = 3 * this.gameScale;
    text.position.x = -0.2 * this.gameScale;
    this.scene.add(text);

    for (let x = 0; x < this.gameConfiguration.gameDimensions.x; x++) {
      for (let z = 0; z < this.gameConfiguration.gameDimensions.z; z++) {
        const diag1 = {x: x, y: 0, z: z};
        const diag2 = {x: x + 1, y: 0, z: z + 1};
        const surface = new BlockSurface(diag1, diag2, this.offsetOrigin, this.gameScale, 0x000000, this.scene, () => {
          this.createBlock(
            {
              x: x,
              y: 0,
              z: z,
            }
          );
        }, () => {});
        this.boardGrids.push(surface);
      }
    }

    for (let x = 0; x < this.gameConfiguration.gameDimensions.x; x++) {
      const xLayer: (Block | null)[][] = [];
      for (let y = 0; y < this.gameConfiguration.gameDimensions.y; y++) {
        const yLayer: (Block | null)[] = [];
        for (let z = 0; z < this.gameConfiguration.gameDimensions.z; z++) {
          yLayer.push(null);
        }
        xLayer.push(yLayer);
      }
      this.boardBlocks.push(xLayer);
    }
  }

  getRayCasterFirstIntersect(event: MouseEvent) {
    this.cursorPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	  this.cursorPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    this.raycaster.setFromCamera( this.cursorPointer, this.camera );
    const intersects = this.raycaster.intersectObjects( this.scene.children );
    for (const intersect of intersects) {
      if (intersect.object.name === 'Block-Surface') {
        return intersect;
      }
    }
  }

  handleHover(event: MouseEvent) {
    const intersect = this.getRayCasterFirstIntersect(event);
    if (intersect) {
      if (!intersect.object.userData?.hover) {
        if (!!this.currentHoverObj) {
          this.currentHoverObj.dispatchEvent({type: 'offhover' as any});
        }
        intersect.object.dispatchEvent({type: 'onhover' as any});
        this.currentHoverObj = intersect.object;
        this.setCamera();
      }
    } else if (!!this.currentHoverObj) {
      this.currentHoverObj.dispatchEvent({type: 'offhover' as any});
      this.currentHoverObj = null;
      this.setCamera();
    }
  }

  handleClick(event: MouseEvent) {
    const intersect = this.getRayCasterFirstIntersect(event);
    if (intersect) {
      intersect.object.dispatchEvent({type: (event.button === 0 ? 'left-click' : 'right-click') as any});
      this.setCamera();
    }
  }

  handleDrag(event: MouseEvent) {
    const rotateFactor = 0.1;
    const dmx = event.movementX;
    const dmy = event.movementY;
    const x0 = this.camera.position.x;
    const y0 = this.camera.position.y;
    const z0 = this.camera.position.z;
    const r = Math.sqrt(z0 * z0 + x0 * x0 + y0 * y0);

    const angleX0 = Math.atan2(z0, x0);
    const angleY0 = Math.asin(y0/r);

    const dAngleX = dmx / r * rotateFactor;
    const angleX1 = normalizeAngle(angleX0 + dAngleX);

    const dAngleY = dmy / r * rotateFactor;
    const angleY1 = normalizeAngle(angleY0 + dAngleY);

    const y1 = r * Math.sin(angleY1);
    const xsign = (angleX1 > (Math.PI / 2)) && (angleX1 < (Math.PI * 1.5)) ? -1 : 1;
    const x1 = Math.sqrt((r * r - y1 * y1) / (1 + Math.pow(Math.tan(angleX1), 2))) * xsign;
    const zsign = (angleX1 > Math.PI) ? -1 : 1;
    const z1 = Math.sqrt(r * r - x1 * x1 - y1 * y1) * zsign;
    this.setCamera({x: x1, y: y1, z: z1});
  }

  handleWheel(event: WheelEvent) {
    event.preventDefault();
    const rFactor = 0.01;
    const dr = event.deltaY * rFactor;
    const x0 = this.camera.position.x;
    const y0 = this.camera.position.y;
    const z0 = this.camera.position.z;
    const r0 = Math.sqrt(z0 * z0 + x0 * x0 + y0 * y0);
    const r1 = r0 + dr;
    const angleX0 = Math.acos(x0/r0);
    const angleY0 = Math.asin(y0/r0);
    const x1 = Math.cos(angleX0) * r1;
    const y1 = Math.sin(angleY0) * r1;
    const zSign = z0 > 0 ? 1 : -1;
    const z1 = Math.sqrt(r1 * r1 - (x1 * x1 + y1 * y1)) * zSign;
    this.setCamera({x: x1, y: y1, z: z1});
  }

  createBlock(position: Point) {
    if (!!this.boardBlocks[position.x][position.y][position.z]) return;
    if (!(this.getBlockCount() < this.gameConfiguration.maxBlocks)) return;
    this.boardBlocks[position.x][position.y][position.z] = new Block(
      position,
      this.offsetOrigin,
      this.gameScale,
      0x556B2F,
      this.scene,
      (newBlockPosition: Point) => {
        if (
          (newBlockPosition.x < this.gameConfiguration.gameDimensions.x) && (this.gameConfiguration.gameDimensions.x > -1) &&
          (newBlockPosition.y < this.gameConfiguration.gameDimensions.y) && (this.gameConfiguration.gameDimensions.y > -1) &&
          (newBlockPosition.z < this.gameConfiguration.gameDimensions.z) && (this.gameConfiguration.gameDimensions.z > -1)
        ) {
          this.createBlock(newBlockPosition);
        }
      }, () => {
        this.removeBlock(position);
      }
    );
    this.setCamera();
    this.checkWinCondition();
    this.gameConfiguration.events.onBlockModified?.call(this , this.getBlockCount());
  }

  checkWinCondition() {
    if (this.checkProjectionsEqual()) {
      setTimeout(() => {
        ($('#nextLevelDialog') as any).modal();
        this.gameConfiguration.events.onWin?.call(this);
      }, 200);
    }
  }

  checkProjectionsEqual() {
    return JSON.stringify(this.gameConfiguration.projections) === JSON.stringify(this.getProjections());
  }

  getProjections() {
    const top: Projection = [];
    for (let x = 0; x < this.gameConfiguration.gameDimensions.x; x++) {
      const xSlice: boolean[] = [];
      for (let z = 0; z < this.gameConfiguration.gameDimensions.z; z++) {
        let filled = false;
        for (let y = 0; y < this.gameConfiguration.gameDimensions.y; y++) {
          if (!!this.boardBlocks[x][y][z]) {
            filled = true;
            break;
          }
        }
        xSlice.push(filled);
      }
      top.push(xSlice); 
    }
    const front: Projection = [];
    for (let x = 0; x < this.gameConfiguration.gameDimensions.x; x++) {
      const xSlice: boolean[] = [];
      for (let y = 0; y < this.gameConfiguration.gameDimensions.y; y++) {
        let filled = false;
        for (let z = 0; z < this.gameConfiguration.gameDimensions.z; z++) {
          if (!!this.boardBlocks[x][y][z]) {
            filled = true;
            break;
          }
        }
        xSlice.push(filled);
      }
      front.push(xSlice); 
    }
    const side: Projection = [];
    for (let z = 0; z < this.gameConfiguration.gameDimensions.z; z++) {
      const zSlice: boolean[] = [];
      for (let y = 0; y < this.gameConfiguration.gameDimensions.y; y++) {
        let filled = false;
        for (let x = 0; x < this.gameConfiguration.gameDimensions.x; x++) {
          if (!!this.boardBlocks[x][y][z]) {
            filled = true;
            break;
          }
        }
        zSlice.push(filled);
      }
      side.push(zSlice); 
    }
    return {
      top,
      front,
      side
    }
  }

  getBlockCount() {
    let blockCount = 0;
    for (const x of this.boardBlocks) {
      for (const y of x) {
        for (const z of y) {
          if (!!z) {
            blockCount++;
          }
        }
      }
    }
    return blockCount;
  }

  removeBlock(position: Point) {
    const block = this.boardBlocks[position.x][position.y][position.z];
    if (!!block) {
      this.boardBlocks[position.x][position.y][position.z] = null;
      block.destructor();
      this.setCamera();
      this.checkWinCondition();
      this.gameConfiguration.events.onBlockModified?.call(this, this.getBlockCount());
    }
  }
}