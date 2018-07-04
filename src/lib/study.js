/**
  Utilities for managing studying.
*/

/**
  A study session. It will show you each card to be studied in turn.
  A new object should be created with each session.
*/
export class StudySession {
  constructor({ deck }) {
    // TODO accept other parameters

    this.deck = deck;

    // decide which cards to study
    this.cards = this.determineCardsToStudy();
    console.log("We will study these cards", this.cards);
    // the cards in this.cards may be mutable, but the array itself is not
    // i.e. you cannot add/remove cards from this
    // therefore we can count which card we are currently showing with this
    this.currentCardIndex = 0;

    // this will be a 1-to-1 mapping of card => study result (see enum in this file)
    this.studyResults = [];
  }

  determineCardsToStudy() {
    // decides which cards out of the deck to study

    // for now, we will just show all the cards where there are 0 reps left
    return _.filter(this.deck.cards, card => card.repsLeft === 0);
  }

  // returns true if the session is done.
  sessionOver() {
    return this.currentCardIndex >= this.cards.length;
  }

  // returns the current card to be studied, or null if the session is done
  getCurrentCard() {
    if (this.sessionOver()) {
      return null;
    } else {
      return this.cards[this.currentCardIndex];
    }
  }

  cardStudied(result) {
    // `result` must be from CARD_STUDY_RESULTS
    // update the current card accordingly
    let currentCard = this.getCurrentCard();
    // cards only store their rank name, not the actual rank (b/c you can only
    // store pure objects in Vue). TODO think of a way to fix this.
    // so we must dynamically calculate some stuff
    let currentCardRank = Rank.getRankByName(currentCard.rankName);

    switch (result) {
      case CARD_STUDY_RESULTS.SKIPPED:
        // card was not studied at all. no big deal.
        break;
      case CARD_STUDY_RESULTS.KNEW:
        // you knew this card! promote it to the next rank.
        let newRank = Rank.nextRank(currentCardRank);
        card.rankName = newRank.name;
        card.repsLeft = newRank.baseRepsLeft;
        break;
      case CARD_STUDY_RESULTS.SORT_OF:
        // dont change the rank at all
        break;
      case CARD_STUDY_RESULTS.DIDNT_KNOW:
        // set the card back to the base rank b/c you didn't know it :(
        let newRank = Rank.BASE_RANK;
        card.rankName = newRank.name;
        card.repsLeft = newRank.baseRepsLeft;
        break;
    }

    // update the results array for statistics keeping
    this.studyResults[this.currentCardIndex] = result;

    // advance to the next card and return it
    this.currentCardIndex++;
    return this.getCurrentCard();
  }
}

// utils
export const CARD_STUDY_RESULTS = {
  SKIPPED,
  KNEW,
  SORT_OF,
  DIDNT_KNOW
};
