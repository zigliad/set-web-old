import { k_combinations } from './Utils'

export default class Deck {

    constructor(cards, brain) {
        this.cards = cards
        this.size = cards.length
        this.brain = brain
    }

    countSets() {
        return this.getSets().length
    }

    getSets() {
        return k_combinations(this.cards, this.brain.options)
            .filter(maybeSet => this.brain.isSet(maybeSet))
    }
}
