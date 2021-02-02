import IMode from '../IMode'

export default class StaticMode extends IMode {

    constructor(deckGenerator, goal) {
        super(deckGenerator)
        this.goal = goal
        this.score = 0
        this.setsFound = []
    }

    newGame() {
        this.score = 0
        this.setsFound = []
        super.newGame()
    }

    

    setFound(indexes, cards) {
        if (!this.brain.setInSets(cards, this.setsFound)) {
            this.score += 1
            this.setsFound.push(cards)
            if (this.score === this.goal) {
                this.gameHasEnded()
            }
    
            this.stateHasChanged()
        }
    }

    get rules() {
        return `There are many sets here. Find ${this.goal} of them!`
    }

    get name() {
        return "Static Mode"
    }

    _headerComponent() {
        return () => {
            return (
                <div style={{padding: 8}}>
                    <h2>
                        Static Mode
                    </h2>
                    <p>{this.score} sets of {this.goal}</p>
                </div>
            );
        }
    }

    _endgameComponent() {
        return () => {
            return (
                <div style={{padding: 8}}>
                    <h1>
                        You Won!
                    </h1>
                </div>
            );
        }
    }
}
