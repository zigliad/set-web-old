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

        setInterval(() => {
            this.timeLeft -= 1
            console.log(this.timeLeft)
            this.notifyAll(this)
        }, 1_000);
    }

    setFound(indexes, cards) {
        this.score += 1
    }

    get rules() {
        return `Find as many sets as you can in ${this.seconds} seconds!`
    }

    get name() {
        return "Time Mode!"
    }

    header() {
        function Comp({ mode, flag }) {
            return (
                <div>
                    <h2>
                        TIME MODE!
                        </h2>
                    <p>Score: {mode.score}</p>
                    <p>Time: {mode.timeLeft}</p>
                </div>
            );
        }

        return Comp
    }
}
