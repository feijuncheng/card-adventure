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
        return _super.call(this) || this;
    }
    BaseButton.prototype.getBtnPrimary = function () {
        var button = new eui.Button();
        // var buttonSkin =
        //     `<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="100" minWidth="300" xmlns:e="http://ns.egret.com/eui">
        //         <e:Image width="100%" height="100%" alpha.disabled="0.5"
        //                  source="resource/btn01_png"
        //                  source.down="resource/btn01_png"/>
        //         <e:Label id="labelDisplay" top="0" bottom="0" left="0" right="0"
        //                  textColor="0xFFFFFF" bold="true" verticalAlign="middle" textAlign="center"/>
        //         <e:Image id="iconDisplay" horizontalCenter="0" verticalCenter="0"/>
        //     </e:Skin>`;
        button.skinName = "resource/skins/ButtonSkin_p.exml";
        button.height = 90;
        button.width = 300;
        return button;
    };
    return BaseButton;
}(eui.UILayer));
__reflect(BaseButton.prototype, "BaseButton");
