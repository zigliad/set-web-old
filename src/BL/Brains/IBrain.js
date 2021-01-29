import { getKs, shuffle } from '../Utils'
import Card from '../Card'

export default class IBrain {

    constructor(attributes, options) {
        this.attributes = attributes
        this.options = options
    }

    isSet(cards) {
        throw Error("Abstract")
    }

    allCardsShuffled() {
        let cards = getKs([...Array(this.options).keys()], this.attributes).map(card => new Card(card))
        return shuffle(cards)
    }
}