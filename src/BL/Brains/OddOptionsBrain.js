import IBrain from './IBrain'

export default class OddOptionsBrain extends IBrain {

    constructor(attributes, options) {
        if (options % 2 == 0) {
            throw Error("Options must be odd")
        }
        super(attributes, options)
    }

    isSet(cards) {
        let sumVector = new Array(this.attributes).fill(0);
        for (const card of cards) {
            for (const [i, attr] of card.attributes.entries()) {
                sumVector[i] += attr
            }
        }

        return sumVector.every(x => x % this.options == 0)
    }
}