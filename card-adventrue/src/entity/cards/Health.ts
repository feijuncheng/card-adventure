/**
 * 生命恢复牌
 */
class Health extends Card {
    public constructor() {
        super()
        this.type = Card_Type.Health
        this.actionCost = 1
        this.levelMax = 9
        this.name =  'Health'
        this.description = 'a test card "Health"'
        this.health = 5
    }
}
