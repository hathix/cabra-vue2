// Factory for creating cards + decks

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
    id: "c" + Date.now() // some unique string
  };
};

export default factory;
