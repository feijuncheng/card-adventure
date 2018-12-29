var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 选牌
 */
var Card = (function () {
    function Card() {
        this.level = 1;
    }
    return Card;
}());
__reflect(Card.prototype, "Card");
