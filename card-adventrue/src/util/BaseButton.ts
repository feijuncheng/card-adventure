class BaseButton extends eui.UILayer {

    public constructor() {
        super();
    }
    
    public getBtnPrimary () {
        let button = new eui.Button();
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
        button.height = 90
        button.width = 300
        return button
    }
}
