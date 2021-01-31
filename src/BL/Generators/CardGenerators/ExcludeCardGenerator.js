import ICardGenerator from './ICardGenerator' 

export default class ExcludeCardGenerator extends ICardGenerator {
    generate(amount, cards) {
        let result = []
        let blacklist = cards.slice()
        for (let i = 0; i < amount; i++) {
            let temp = this.randomExclude(blacklist)
            result.push(temp)
            blacklist.push(temp)
        }

        return result
    }
}
