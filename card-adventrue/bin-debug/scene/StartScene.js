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
var StartSence = (function (_super) {
    __extends(StartSence, _super);
    function StartSence() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/skins/startScene.exml';
        _this.setStartBtn();
        return _this;
        // this.setGameName()
    }
    /**
     * 初始化开始按钮
     */
    StartSence.prototype.setStartBtn = function () {
        this.startBtn = new BaseButton();
        this.startBtn.label = '开始游戏';
        this.startBtn.horizontalCenter = 0;
        // this.startBtn.verticalCenter = 0
        this.startBtn.bottom = 150;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.addChild(this.startBtn);
    };
    /**
     * 初始化标题
     */
    // private setGameName () {
    //     this.gameName = new eui.Label()
    //     this.gameName.text = "卡牌大冒险"
    //     this.gameName.textColor = 0xffffff
    //     this.gameName.size = 50
    //     this.gameName.fontFamily = ''
    //     this.addChild(this.gameName)
    // }
    /**
     * 开始游戏 => 选择牌库
     */
    StartSence.prototype.onStartGame = function () {
        this.hero = new Hero();
        Director.getInstance().pushScene(new SelectScene());
    };
    return StartSence;
}(eui.Component));
__reflect(StartSence.prototype, "StartSence");
