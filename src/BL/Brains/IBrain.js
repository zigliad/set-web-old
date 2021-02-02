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

    setsEquals(set1, set2) {
        for (const card1 of set1) {
            if (!set2.some(card => card.equals(card1))) {
                return false
            }
        }
        return true
    }

    setInSets(set, sets) {
        for (const set2 of sets) {
            if (this.setsEquals(set, set2)) {
                return true
            }
        }
        return false
    }

    allCardsShuffled() {
        let cards = getKs([...Array(this.options).keys()], this.attributes).map(card => new Card(card))
        return shuffle(cards)
    }
}