class StartSence extends eui.Component {
    private startBtn: BaseButton
    private gameName: eui.Label
    // private cardLibrary: CardLibrary
    private hero: Hero

    public constructor() {
        super();
        this.skinName = 'resource/skins/startScene.exml'
        this.setStartBtn()
        // this.setGameName()
    }

    /**
     * 初始化开始按钮
     */
    private setStartBtn () {
        this.startBtn = new BaseButton()
        this.startBtn.label = '开始游戏'
        this.startBtn.horizontalCenter = 0
        // this.startBtn.verticalCenter = 0
        this.startBtn.bottom = 150
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this)
        this.addChild(this.startBtn)
    }

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
    private onStartGame () {
        this.hero = new Hero()
        Director.getInstance().pushScene(new SelectScene())
    }
}
