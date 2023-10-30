import { Point } from './types'

export const normalizeAngle = (ang: number) => {
    return (Math.PI * 2 + ang) % (Math.PI * 2)
}
  
export const transformPoint = (p: Point, scale: number, offset: Point): Point => {
    return {
        x: p.x * scale + offset.x,
        y: p.y * scale + offset.y,
        z: p.z * scale + offset.z,
    };
}