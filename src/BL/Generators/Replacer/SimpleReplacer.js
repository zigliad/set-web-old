import IReplacer from "./IReplacer"

/*
Replace the cards again and again until
there are at least "n" sets in the deck.
*/
export default class SimpleReplacer extends IReplacer {

    constructor(cardsGenerator, minSets) {
        super()
        this.cardsGenerator = cardsGenerator
        this.minSets = minSets
    }

    replace(indexes, deck) {
        let newCards = this.cardsGenerator.generate(deck.brain.options, deck.cards)
        for (const [i, index] of indexes.entries()) {
            deck.cards.splice(index, 1, newCards[i])
        }

        if (deck.countSets() < this.minSets) {
            this.replace(indexes, deck)
        }
    }
}
