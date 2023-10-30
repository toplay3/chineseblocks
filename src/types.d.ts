import { Game } from "./game"

export type GameConfiguration = {
  levelNumber: number,
  gameDimensions: Point,
  maxBlocks: number,
  projections: {
    top: Projection | null,
    front: Projection | null,
    side: Projection | null,
  },
  events: {
    onBlockModified?: (blocksUsed: number) => void
    onWin?: () => void
  }
}

export type Projection = boolean[][]

export type Point = {
    x: number
    y: number
    z: number
}

declare global {
  interface Window {
    threeDFont: Font
    currentGame: Game
  }
}