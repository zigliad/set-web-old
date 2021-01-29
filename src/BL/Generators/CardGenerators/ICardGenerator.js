import Card from '../../Card'

export default class ICardGenerator {

    constructor(attributes, options) {
        this.attributes = attributes
        this.options = options
    }

    random() {
        let card = []
        for (const _ of this.attributes) {
            card.append(Math.floor(Math.random() * this.options))
        }

        return new Card(card)
    }

    randomNotIn(...cards) {
        let result;
        let found = true
        do {
            result = this.random()
            cards.forEach(card => {
                found = found && !card.equals(result)
            });
        } while(!found)

        return result
    }

    randomsNotIn(amount, ...cards) {
        throw Error("Abstract")
    }
}