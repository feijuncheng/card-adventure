var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 基础攻击牌
 */
var Attack = (function (_super) {
    __extends(Attack, _super);
    function Attack() {
        var _this = _super.call(this) || this;
        _this.type = Card_Type.Attack;
        _this.actionCost = 1;
        _this.levelMax = 9;
        _this.name = 'Attack';
        _this.description = 'a test card';
        _this.attack = 5;
        return _this;
    }
    return Attack;
}(Card));
__reflect(Attack.prototype, "Attack");
