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
 * 选牌
 */
var SelectScene = (function (_super) {
    __extends(SelectScene, _super);
    function SelectScene() {
        var _this = _super.call(this) || this;
        _this.cardList = new CardLibrary();
        _this.listRender = new eui.TabBar();
        // this.listRenderBase = new eui.ListBase()
        _this.listRender.width = 600;
        _this.listRender.height = 500;
        _this.listRender.verticalCenter = 0;
        _this.listRender.itemRendererSkinName = 'resource/eui_skins/ButtonSkin.exml';
        _this.listRender.horizontalCenter = 0;
        _this.listRender.dataProvider = _this.cardList;
        _this.addChild(_this.listRender);
        _this.initSelection();
        return _this;
    }
    SelectScene.prototype.initSelection = function (len) {
        if (len === void 0) { len = 3; }
        this.cardList.removeAll();
        for (var i = 0; i < len; i++) {
            var randomIndex = parseInt((Math.random() * 2).toString());
            // Card_Type[randomIndex]
            this.cardList.addItem(new window[Card_Type[randomIndex]]());
        }
    };
    return SelectScene;
}(eui.Component));
__reflect(SelectScene.prototype, "SelectScene");
