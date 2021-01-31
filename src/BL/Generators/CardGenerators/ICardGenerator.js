import Card from '../../Card'

// Defines how to generate some cards.
export default class ICardGenerator {

    constructor(attributes, options) {
        this.attributes = attributes
        this.options = options
    }

    // Simple random card.
    random() {
        let card = []
        for (let i = 0; i < this.attributes; i++) {
            card.push(Math.floor(Math.random() * this.options))
        }

        return new Card(card)
    }

    // Random card which is not in the "cards" array.
    randomExclude(cards) {
        let result;
        let found;
        do {
            found = true
            result = this.random()
            for (const card of cards) {
                found = found && !card.equals(result)
            }
        } while(!found)

        return result
    }

    // Generates "amount" number of cards.
    // Accept "cards" parameter to do some calculations
    // about other cards if needed (e.g. exclude).
    generate(amount, cards) {
        throw Error("Abstract")
    }
}
