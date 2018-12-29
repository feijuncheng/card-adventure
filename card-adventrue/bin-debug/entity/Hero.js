var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hero = (function () {
    function Hero() {
        // todo 后期多英雄可以换
        this.name = "warrior";
        this.type = Hero_Type.HERO_WARRIOR;
        this.health = 60;
        this.attack = 5;
        this.cardLibrary = new CardLibrary();
    }
    return Hero;
}());
__reflect(Hero.prototype, "Hero");
