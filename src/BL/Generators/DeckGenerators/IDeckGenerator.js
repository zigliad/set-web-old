// Defines how to generate a fresh new deck.
export default class IDeckGenerator {

    constructor(size) {
        this.size = size
    }

    generate() {
        throw Error("Abstract")
    }
}
