/**
  Utilities for card ranks.
**/
import _ from "lodash";

export const RANKS = {
  E: { name: "E", baseRepsLeft: 0, color: "#FF0000", score: 0.0 },
  D: { name: "D", baseRepsLeft: 2, color: "#FF7F00", score: 0.25 },
  C: { name: "C", baseRepsLeft: 6, color: "#FFC800", score: 0.5 },
  B: { name: "B", baseRepsLeft: 12, color: "#0094FF", score: 0.8 },
  A: { name: "A", baseRepsLeft: 16, color: "#00E500", score: 1.0 }
};

// the rank for new cards or cards that you got wrong
export const BASE_RANK = RANKS.E;

// gets a rank object based on its name (letter)
export let getRankByName = name => {
  return _.find(RANKS, { name: name });
};

// gets the next rank object after the current one.
// for 'leveling up' a card.
export let nextRank = rank => {
  switch (rank) {
    case RANKS.E:
      return RANKS.D;
    case RANKS.D:
      return RANKS.C;
    case RANKS.C:
      return RANKS.B;
    case RANKS.B:
      return RANKS.A;
    case RANKS.A:
      return RANKS.A;
  }
};
