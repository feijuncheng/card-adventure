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
var BaseButton = (function (_super) {
    __extends(BaseButton, _super);
    function BaseButton() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ButtonSkin_p.exml";
        return _this;
    }
    return BaseButton;
}(eui.Button));
__reflect(BaseButton.prototype, "BaseButton");
