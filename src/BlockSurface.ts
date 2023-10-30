import * as THREE from 'three';
import { transformPoint } from './helper';
import { Point } from './types';

export class BlockSurface {
    diag1: Point;
    diag2: Point;
    offsetOrigin: Point;
    gameScale: number;
    baseColor: number;
    scene: THREE.Scene;
    planarMesh: THREE.Mesh;
    boundaryLine: THREE.Line;
    onLeftClickCallback: () => void;
    onRightClickCallback: () => void;
  
    constructor(
      diag1: Point,
      diag2: Point,
      offsetOrigin: Point,
      gameScale: number,
      baseColor: number,
      scene: THREE.Scene,
      onLeftClickCallback: () => void,
      onRightClickCallback: () => void
    ) {
      this.diag1 = diag1;
      this.diag2 = diag2;
      this.offsetOrigin = offsetOrigin;
      this.gameScale = gameScale;
      this.baseColor = baseColor;
      this.scene = scene;
      this.planarMesh = this.createPlanarMesh();
      this.boundaryLine = this.createBoundaryLine();
      this.appendToScene();
      this.onLeftClickCallback = onLeftClickCallback;
      this.onRightClickCallback = onRightClickCallback;
    }
  
    createPlanarMesh() {
      // Create a plane geometry
      const planeGeometry = new THREE.PlaneGeometry(this.gameScale * 0.97, this.gameScale * 0.97); // width and height of the plane
      const planeMaterial = new THREE.MeshBasicMaterial({ color: this.baseColor });
      planeMaterial.side = THREE.DoubleSide;
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      const planePosition = transformPoint({
        x: (this.diag1.x + this.diag2.x) / 2,
        y: (this.diag1.y + this.diag2.y) / 2,
        z: (this.diag1.z + this.diag2.z) / 2,
      }, this.gameScale, this.offsetOrigin);
      plane.position.x = planePosition.x;
      plane.position.y = planePosition.y;
      plane.position.z = planePosition.z;
  
      // TODO: figure out how to use quaterions
      // Currently rotation will only work for 90 degree surfaces
      if (this.diag1.y === this.diag2.y) {
        plane.rotation.x = Math.PI/2;
      } else if (this.diag1.x === this.diag2.x) {
        plane.rotation.y = Math.PI/2;
      } else if (this.diag1.z === this.diag2.z) {
        // Already oriented correctly
      }
      plane.name = "Block-Surface";
      plane.addEventListener("onhover", () => {
        plane.userData = {
            hover: true
        };
        planeMaterial.color.set(0x005500);
      })
      plane.addEventListener("offhover", () => {
        plane.userData = {
            hover: false
        };
        planeMaterial.color.set(this.baseColor);
      })
      plane.addEventListener("left-click", () => {
        this.onLeftClickCallback();
      })
      plane.addEventListener("right-click", () => {
        this.onRightClickCallback();
      })
      return plane;
    }
  
    createBoundaryLine() {
      const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
      const points = [];
      const transformedDiag1 = transformPoint(this.diag1, this.gameScale, this.offsetOrigin);
      const transformedDiag2 = transformPoint(this.diag2, this.gameScale, this.offsetOrigin);
      let point3: Point;
      let point4: Point;
      if (transformedDiag1.y === transformedDiag2.y) {
        point3 = {
          x: transformedDiag1.x,
          y: transformedDiag1.y,
          z: transformedDiag2.z,
        }
        point4 = {
          x: transformedDiag2.x,
          y: transformedDiag1.y,
          z: transformedDiag1.z,
        }
      } else if (transformedDiag1.x === transformedDiag2.x) {
        point3 = {
          x: transformedDiag1.x,
          y: transformedDiag1.y,
          z: transformedDiag2.z,
        }
        point4 = {
          x: transformedDiag1.x,
          y: transformedDiag2.y,
          z: transformedDiag1.z,
        }
      } else if (transformedDiag1.z === transformedDiag2.z) {
        point3 = {
          x: transformedDiag1.x,
          y: transformedDiag2.y,
          z: transformedDiag1.z,
        }
        point4 = {
          x: transformedDiag2.x,
          y: transformedDiag1.y,
          z: transformedDiag1.z,
        }
      } else {
        throw new Error("invalid");
      }
      points.push( new THREE.Vector3( transformedDiag1.x, transformedDiag1.y, transformedDiag1.z ) );
      points.push( new THREE.Vector3( point3.x, point3.y, point3.z ) );
      points.push( new THREE.Vector3( transformedDiag2.x, transformedDiag2.y, transformedDiag2.z ) );
      points.push( new THREE.Vector3( point4.x, point4.y, point4.z ) );
  
      points.push( new THREE.Vector3( transformedDiag1.x, transformedDiag1.y, transformedDiag1.z ) );
      const geometry = new THREE.BufferGeometry().setFromPoints( points );
      const line = new THREE.Line( geometry, material );
      return line;
    }
    
    appendToScene() {
      this.scene.add(this.planarMesh);
      this.scene.add(this.boundaryLine);
    }
  
    destructor() {
      this.scene.remove(this.planarMesh);
      this.scene.remove(this.boundaryLine);
    }
}