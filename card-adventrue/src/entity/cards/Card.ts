/**
 * 选牌
 */
class Card {
    protected bgImage: eui.Skin
    protected type: Card_Type
    protected actionCost: number
    protected magicCost: number
    protected level: number
    protected levelMax: number
    protected name: string
    protected description: string
    // todo change to enum
    protected quality: string
    protected attack: number
    protected health: number
    public constructor() {
        this.level = 1
    }
}
