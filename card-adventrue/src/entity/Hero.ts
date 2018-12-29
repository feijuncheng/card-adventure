class Hero {
    private name: string
    private type: Hero_Type
    private health: number
    private attack: number
    private cardLibrary: CardLibrary

    public constructor() {
        // todo 后期多英雄可以换
        this.name = "warrior"
        this.type = Hero_Type.HERO_WARRIOR
        this.health = 60
        this.attack = 5
        this.cardLibrary = new CardLibrary()
    }
}
