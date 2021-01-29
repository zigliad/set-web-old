import ICardGenerator from './ICardGenerator' 

export default class SimpleCardGenerator extends ICardGenerator {

    randomsNotIn(amount, ...cards) {
        let result = []
        let blacklist = cards
        for (let i; i < amount; i++) {
            let temp = this.randomNotIn(blacklist)
            result.append(temp)
            blacklist.append(temp)
        }

        return result
    }
}