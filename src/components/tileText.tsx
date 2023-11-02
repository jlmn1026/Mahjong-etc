import type { IntRange } from "type-fest";

const ManzTiles = ["🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏"];
const PinzTiles = ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"];
const SouzTiles = ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"];
const JiTiles = ["🀀", "🀁", "🀂", "🀃", "🀆", "🀅", "🀄"];

export type NumberTileNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type LetterTileNum = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TileKind = "manz" | "pinz" | "souz" | "ji";

type MahjongTile<T extends TileKind> = T extends "manz" | "pinz" | "souz"
  ? IntRange<1, 10>
  : IntRange<1, 8>;

const tileText = <T extends TileKind>(kind: T, num: MahjongTile<T>) => {
  if (kind === "manz") {
    return ManzTiles[num - 1];
  }

  if (kind === "pinz") {
    return PinzTiles[num - 1];
  }

  if (kind === "souz") {
    return SouzTiles[num - 1];
  }

  if (kind === "ji") {
    return JiTiles[num - 1];
  }

  throw new Error("Invalid tile kind");
};

export default tileText;
