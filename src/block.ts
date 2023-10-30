import * as THREE from 'three';
import { Point } from './types';
import { BlockSurface } from './BlockSurface';

export class Block {
    position: Point;
    offsetOrigin: Point;
    gameScale: number;
    baseColor: number;
    scene: THREE.Scene;
    surfaces: { 
      top: BlockSurface,
      bottom: BlockSurface,
      left: BlockSurface,
      right: BlockSurface,
      front: BlockSurface,
      back: BlockSurface, 
    };
    onNewBlock: (newBlockPosition: Point) => void;
    onNeedDestory: () => void;
  
    constructor(position: Point, offsetOrigin: Point, gameScale: number, baseColor: number, scene: THREE.Scene, onNewBlock: (newBlockPosition: Point) => void, onNeedDestory: () => void) {
      this.position = position;
      this.offsetOrigin = offsetOrigin;
      this.gameScale = gameScale;
      this.baseColor = baseColor;
      this.scene = scene;
      this.surfaces = this.createSurfaces();
  
      this.onNewBlock = onNewBlock;
      this.onNeedDestory = onNeedDestory;
    }
  
    createSurfaces() {
      return {
        top: new BlockSurface(
          {x: this.position.x, y: this.position.y + 1, z: this.position.z},
          {x: this.position.x + 1, y: this.position.y + 1, z: this.position.z + 1},
          this.offsetOrigin,
          this.gameScale,
          this.baseColor,
          this.scene,
          () => {
            this.onNewBlock({
              x: this.position.x,
              y: this.position.y + 1,
              z: this.position.z,
            });
          },
          () => {
            this.onNeedDestory();
          }
        ),
        bottom: new BlockSurface(
          {x: this.position.x, y: this.position.y, z: this.position.z},
          {x: this.position.x + 1, y: this.position.y, z: this.position.z + 1},
          this.offsetOrigin,
          this.gameScale,
          this.baseColor,
          this.scene,
          () => {
            this.onNewBlock({
              x: this.position.x,
              y: this.position.y - 1,
              z: this.position.z,
            });
          },
          () => {
            this.onNeedDestory();
          }
        ),
        left: new BlockSurface(
          {x: this.position.x, y: this.position.y, z: this.position.z},
          {x: this.position.x, y: this.position.y + 1, z: this.position.z + 1},
          this.offsetOrigin,
          this.gameScale,
          this.baseColor,
          this.scene,
          () => {
            this.onNewBlock({
              x: this.position.x - 1,
              y: this.position.y,
              z: this.position.z,
            });
          },
          () => {
            this.onNeedDestory();
          }
        ),
        right: new BlockSurface(
          {x: this.position.x + 1, y: this.position.y, z: this.position.z},
          {x: this.position.x + 1, y: this.position.y + 1, z: this.position.z + 1},
          this.offsetOrigin,
          this.gameScale,
          this.baseColor,
          this.scene,
          () => {
            this.onNewBlock({
              x: this.position.x + 1,
              y: this.position.y,
              z: this.position.z,
            });
          },
          () => {
            this.onNeedDestory();
          }
        ),
        front: new BlockSurface(
          {x: this.position.x, y: this.position.y, z: this.position.z + 1},
          {x: this.position.x + 1, y: this.position.y + 1, z: this.position.z + 1},
          this.offsetOrigin,
          this.gameScale,
          this.baseColor,
          this.scene,
          () => {
            this.onNewBlock({
              x: this.position.x,
              y: this.position.y,
              z: this.position.z + 1,
            });
          },
          () => {
            this.onNeedDestory();
          }
        ),
        back: new BlockSurface(
          {x: this.position.x, y: this.position.y, z: this.position.z},
          {x: this.position.x + 1, y: this.position.y + 1, z: this.position.z},
          this.offsetOrigin,
          this.gameScale,
          this.baseColor,
          this.scene,
          () => {
            this.onNewBlock({
              x: this.position.x,
              y: this.position.y,
              z: this.position.z - 1,
            });
          },
          () => {
            this.onNeedDestory();
          }
        ),
      };
    }
  
    destructor() {
      this.surfaces.top.destructor();
      this.surfaces.bottom.destructor();
      this.surfaces.left.destructor();
      this.surfaces.right.destructor();
      this.surfaces.front.destructor();
      this.surfaces.back.destructor();
    }
}