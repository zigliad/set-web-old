import IMode from '../IMode'

export default class TimeMode extends IMode {

    constructor(deckGenerator, replacer, seconds) {
        super(deckGenerator)
        this.replacer = replacer
        this.seconds = seconds
        this.interval = null
    }

    newGame() {
        this.score = 0
        this.timeLeft = this.seconds
        this.deck = this.deckGenerator.generate()

        if (this.interval !== null) {
            clearInterval(this.interval)
        }

        this.interval = setInterval(() => {
            this.timeLeft -= 1
            if (this.timeLeft === 0) {
                clearInterval(this.interval)
                this.gameHasEnded()
            } else {
                this.stateHasChanged()
            }
        }, 1_000);

        super.newGame()
    }

    setFound(indexes, cards) {
        this.score += 1
        this.stateHasChanged()

        this.replacer.replace(indexes, this.deck)
    }

    get rules() {
        return `Find as many sets as you can in ${this.seconds} seconds!`
    }

    get name() {
        return "Time Mode"
    }

    _headerComponent() {
        return () => {
            return (
                <div style={{padding: 8}}>
                    <h2>
                        Time Mode
                    </h2>
                    <p>Score: {this.score}</p>
                    <p>Time: {this.timeLeft}</p>
                </div>
            );
        }
    }

    _endgameComponent() {
        return () => {
            return (
                <div style={{padding: 8}}>
                    <h1>
                        Time's Up!
                    </h1>
                    <p>Your Score: {this.score}</p>
                </div>
            );
        }
    }
}
