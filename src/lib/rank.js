/**
  Utilities for card ranks.
**/
// import _ from "lodash";
import { Enum } from "enumify";

export class RANKS extends Enum {}
RANKS.initEnum({
  E: {
    name: "E",
    baseRepsLeft: 0,
    color: "#FF0000",
    score: 0.0,
    get nextRank() {
      return RANKS.D;
    }
  },
  D: {
    name: "D",
    baseRepsLeft: 2,
    color: "#FF7F00",
    score: 0.25,
    get nextRank() {
      return RANKS.C;
    }
  },
  C: {
    name: "C",
    baseRepsLeft: 6,
    color: "#FFC800",
    score: 0.5,
    get nextRank() {
      return RANKS.B;
    }
  },
  B: {
    name: "B",
    baseRepsLeft: 12,
    color: "#0094FF",
    score: 0.8,
    get nextRank() {
      return RANKS.A;
    }
  },
  A: {
    name: "A",
    baseRepsLeft: 16,
    color: "#00E500",
    score: 1.0,
    get nextRank() {
      return RANKS.A;
    }
  }
});

// the rank for new cards or cards that you got wrong
export const BASE_RANK = RANKS.E;
