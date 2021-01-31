import IDeckGenerator from './IDeckGenerator' 
import Deck from '../../Deck'

// Creates a deck with some minimum amount of sets in it.
// It is kind of stupid, so it better use it for
// small amount of minimum sets or it might get slow.
export default class SimpleDeckGenerator extends IDeckGenerator {

    constructor(size, minSets, brain) {
        super(size)
        this.minSets = minSets
        this.brain = brain
    }

    generate() {
        let sets;
        let deck; 
        do {
            deck = new Deck(this.brain.allCardsShuffled().slice(0, this.size), this.brain)
            sets = deck.countSets()
        } while (sets < this.minSets)
        
        return deck
    }
}