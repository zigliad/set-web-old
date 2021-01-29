import IBrain from './IBrain'

export default class OddOptionsBrain extends IBrain {

    constructor(attributes, options) {
        // if (options % 2 == 0) {
        //     throw Error("Options must be odd")
        // }
        super(attributes, options)
    }

    isSet(cards) {
        let sumVector = new Array(this.attributes).fill(0);
        for (const [i, card] of cards.entries()) {
            for (const attr of card.attributes) {
                sumVector[i] += attr
            }
        }

        return sumVector.every(x => x % this.options == 0)
    }
}