import IMode from '../IMode'

export default class TimeMode extends IMode {

    constructor(cardsGenerator, deckGenerator, seconds) {
        super(cardsGenerator, deckGenerator)
        this.seconds = seconds
    }

    newGame() {
        this.score = 0
        this.timeLeft = this.seconds
        this.deck = this.deckGenerator.generate()
    }

    setFound(indexes, cards) {
        this.score += 1
    }

    rules() {
        return `Find as many sets as you can in ${this.seconds} seconds!`
    }
}
