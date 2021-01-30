export default class IMode {

    constructor(cardsGenerator, deckGenerator) {
        this.cardsGenerator = cardsGenerator
        this.deckGenerator = deckGenerator
        this.deck = []
        this.observers = []
    }

    addObserver(callback) {
        this.observers.push(callback)
    }

    notifyAll(newValue) {
        for (const observer of this.observers) {
            observer(newValue)
        }
    }

    newGame() {
        throw Error("Abstract")
    }

    setFound(indexes, cards) {
        indexes.sort((a, b) => b - a)
        indexes.forEach(i => this.deck.splice(i, 1))

        let newCards = this.cardsGenerator.randomsNotIn(this.deck)
        for (const [i, index] of indexes) {
            this.deck.splice(index, 0, newCards[i])
        }
    }

    checkSet(indexes) {
        let cards = indexes.map(i => this.deck.cards[i])
        if (this.deck.brain.isSet(cards)) {
            this.setFound(indexes, cards)
        }
    }

    get rules() {
        throw Error("Abstract")
    }

    get name() {
        throw Error("Abstract")
    }

    header() {
        throw Error("Abstract")
    }
}