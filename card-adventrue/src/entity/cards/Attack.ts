/**
 * 基础攻击牌
 */
class Attack extends Card {
    public constructor() {
        super()
        this.type = Card_Type.Attack
        this.actionCost = 1
        this.levelMax = 9
        this.name =  'Attack'
        this.description = 'a test card'
        this.attack = 5
    }
}
