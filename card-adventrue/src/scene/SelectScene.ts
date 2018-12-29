/**
 * 选牌
 */
class SelectScene extends eui.Component {
    private cardList: CardLibrary
    private listRender: eui.TabBar
    public constructor() {
        super();
        this.cardList = new CardLibrary()
        this.listRender = new eui.TabBar()
        // this.listRenderBase = new eui.ListBase()
        this.listRender.width = 600
        this.listRender.height = 500
        this.listRender.verticalCenter = 0
        this.listRender.itemRendererSkinName = 'resource/eui_skins/ButtonSkin.exml'
        this.listRender.horizontalCenter = 0
        this.listRender.dataProvider = this.cardList
        this.addChild(this.listRender)
        this.initSelection()
    }

    public initSelection (len: number = 3) {
        this.cardList.removeAll()
        for (let i = 0; i < len; i++) {
            let randomIndex:number = parseInt((Math.random() * 2).toString())
            // Card_Type[randomIndex]
            this.cardList.addItem(new window[Card_Type[randomIndex]]())
        }
    }
}
