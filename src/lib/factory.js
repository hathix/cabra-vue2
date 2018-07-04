// Factory for creating cards + decks

import * as Rank from "@/lib/rank";
import randomize from "randomatic";

let factory = {};

factory.createDeck = function({ name }) {
  return {
    name: name,
    id: randomize('Aa0', 16), // random id string for card
    cards: [] // no cards yet
  };
};

factory.createCard = function({ question, answer }) {

  return {
    question: question,
    answer: answer,
    id: randomize('Aa0', 16), // random id string for card
    rankName: Rank.BASE_RANK.name, // base rank
    repsLeft: Rank.BASE_RANK.baseRepsLeft
  };
};

export default factory;
