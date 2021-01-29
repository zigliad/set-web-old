import { getKs } from './Utils'

export default class Deck {

    constructor(cards, brain) {
        this.cards = cards
        this.size = cards.length
        this.brain = brain
    }

    countSets() {
        return getKs(this.cards, this.brain.options)
            .filter(maybeSet => !maybeSet.every(card => card.equals(maybeSet[0])))
            .filter(maybeSet => this.brain.isSet(maybeSet))
            .length
    }
}
