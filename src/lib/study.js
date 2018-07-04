/**
  Utilities for managing studying.
*/

import _ from "lodash";
import { Enum } from "enumify";

import * as Rank from "@/lib/rank";

/**
  A study session. It will show you each card to be studied in turn.
  A new object should be created with each session.
*/
export class StudySession {
  constructor({ deck, store, order }) {
    // TODO accept other parameters

    this.deck = deck;
    this.store = store;

    // order in which to show cards: question or answer first
    this.order = order;

    // decide which cards to study
    this.cards = this.determineCardsToStudy();
    console.log("We will study these cards", this.cards);
    // the cards in this.cards may be mutable, but the array itself is not
    // i.e. you cannot add/remove cards from this
    // therefore we can count which card we are currently showing with this
    this.currentCardIndex = 0;

    // this will be a 1-to-1 mapping of card => study result (see enum in this file)
    this.studyResults = [];

    // whether or not this is done
    this.finished = false;
  }

  determineCardsToStudy() {
    // decides which cards out of the deck to study

    // by default, we study all cards where there are 0 reps left.
    // but if nothing has 0 reps left, then let the minimum be M.
    // we must subtract M from the repsLeft of each card
    // TODO finish

    // for now, we will just show all the cards where there are 0 reps left
    return _.filter(this.deck.cards, card => card.repsLeft === 0);

    // TODO commit a change
  }


  // returns the current card to be studied
  getCurrentCard() {
    return this.cards[this.currentCardIndex];
  }

  cardStudied(result) {
    // `result` must be from CARD_STUDY_RESULTS
    // update the current card accordingly
    let currentCard = this.getCurrentCard();
    // cards only store their rank name, not the actual rank (b/c you can only
    // store pure objects in Vue). TODO think of a way to fix this.
    // so we must dynamically calculate some stuff
    console.log(currentCard.rankName);
    let currentCardRank = Rank.RANKS.enumValueOf(currentCard.rankName);

    let newRank = null;

    switch (result) {
      case CARD_STUDY_RESULTS.SKIPPED:
        // card was not studied at all. no big deal.
        break;
      case CARD_STUDY_RESULTS.KNEW:
        // you knew this card! promote it to the next rank.
        newRank = currentCardRank.nextRank;
        // TODO make this a store action so that the in-memory object +
        // stored object are the same. that is, forbid anyone from
        // manually changing a card prop. the ONLY way to do so should be to
        // update the store.
        currentCard.rankName = newRank.name;
        currentCard.repsLeft = newRank.baseRepsLeft;
        break;
      case CARD_STUDY_RESULTS.SORT_OF:
        // dont change the rank at all
        break;
      case CARD_STUDY_RESULTS.DIDNT_KNOW:
        // set the card back to the base rank b/c you didn't know it :(
        newRank = Rank.BASE_RANK;
        currentCard.rankName = newRank.name;
        currentCard.repsLeft = newRank.baseRepsLeft;
        break;
    }

    // update the results array for statistics keeping
    this.studyResults[this.currentCardIndex] = result;

    // update the card in the deck as soon as it is studied
    // the only change is the rank
    console.log("updating card....")
    this.store.dispatch("updateCard", {
      deck: this.deck,
      card: currentCard
    });

    // if this is not the last card, advance to the next card
    if (this.currentCardIndex < this.cards.length - 1) {
      this.currentCardIndex++;
    }
    // otherwise stay here but mark as finished
    else {
      // this.finish();
      this.finished = true;
    }

    return this.finished;
  }
}

// utils

// study results. uses enumify.
export class CARD_STUDY_RESULTS extends Enum {}
CARD_STUDY_RESULTS.initEnum(["SKIPPED", "KNEW", "SORT_OF", "DIDNT_KNOW"]);
