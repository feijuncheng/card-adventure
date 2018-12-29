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
 * 生命恢复牌
 */
var Health = (function (_super) {
    __extends(Health, _super);
    function Health() {
        var _this = _super.call(this) || this;
        _this.type = Card_Type.Health;
        _this.actionCost = 1;
        _this.levelMax = 9;
        _this.name = 'Health';
        _this.description = 'a test card "Health"';
        _this.health = 5;
        return _this;
    }
    return Health;
}(Card));
__reflect(Health.prototype, "Health");
