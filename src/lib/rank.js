/**
  Utilities for card ranks.
**/
import _ from "lodash";

export const RANKS = {
    E: { name: "E", baseRepsLeft: 0,  color: "#FF0000", score: 0.00 },
    D: { name: "D", baseRepsLeft: 2,  color: "#FF7F00", score: 0.25 },
    C: { name: "C", baseRepsLeft: 6,  color: "#FFC800", score: 0.50 },
    B: { name: "B", baseRepsLeft: 12, color: "#0094FF", score: 0.80 },
    A: { name: "A", baseRepsLeft: 16, color: "#00E500", score: 1.00 },
};

// the rank for new cards or cards that you got wrong
export const BASE_RANK = RANKS.E;

// gets a rank object based on its name (letter)
export let getRankByName = (name) => {
  return _.find(RANKS, { "name": name });
}

// gets the next rank object after the current one.
// for 'leveling up' a card.
export let nextRank = (rank) => {
    switch(rank){
        case Rank.E: return Rank.D;
        case Rank.D: return Rank.C;
        case Rank.C: return Rank.B;
        case Rank.B: return Rank.A;
        case Rank.A: return Rank.A;
    }
}
