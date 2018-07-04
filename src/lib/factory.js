// Factory for creating cards + decks

import * as Rank from "@/lib/rank";

let factory = {};

factory.createDeck = function({ name }) {
  return {
    name: name,
    id: "d" + Date.now(), // some unique string
    cards: [] // no cards yet
  };
};

factory.createCard = function({ question, answer }) {
  return {
    question: question,
    answer: answer,
    id: "c" + Date.now(), // some unique string
    rankName: Rank.BASE_RANK.name, // base rank
    repsLeft: Rank.BASE_RANK.baseRepsLeft
  };
};

export default factory;
