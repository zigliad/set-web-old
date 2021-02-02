export default class IMode {

    constructor(deckGenerator) {
        this.deckGenerator = deckGenerator
        this.gameEnded = true
        this.observers = []
    }

    observe(callback) {
        if (!this.observers.includes(callback)) {
            this.observers.push(callback)
        }
    }

    stateHasChanged() {
        for (const callback of this.observers) {
            callback()
        }
    }

    newGame() {
        this.gameEnded = false
        this.deck = this.deckGenerator.generate()
        this.stateHasChanged()
    }

    gameHasEnded() {
        this.gameEnded = true
        this.stateHasChanged()
    }

    setFound(indexes, cards) {
        throw Error("Abstract")
    }

    checkSet(indexes) {
        let cards = indexes.map(i => this.deck.cards[i])
        if (this.deck.brain.isSet(cards)) {
            this.setFound(indexes, cards)
            return true
        }

        return false
    }

    get rules() {
        throw Error("Abstract")
    }

    get name() {
        throw Error("Abstract")
    }

    get brain() {
        return this.deck.brain
    }

    bindedHeaderComponent() {
        return this._headerComponent().bind(this)
    }

    // Returns the header component.
    _headerComponent() {
        throw Error("Abstract")
    }

    bindedEndgameComponent() {
        return this._endgameComponent().bind(this)
    }

    // Returns the endgame component.
    _endgameComponent() {
        throw Error("Abstract")
    }
}