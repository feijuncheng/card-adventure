class Director {
    public static instance:Director = null;
    private stackLayer = [];
    private gameLayer:Main = null;
 
    public static getInstance() {
        if (Director.instance == null) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
 
    public initWithMain(m:Main) {
        if (this.gameLayer == null) {
            this.gameLayer = m;
        }
    }
 
    public repleaceScene(layer:egret.DisplayObject) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.removeChildren();
            console.log(layer, this.gameLayer)
            this.gameLayer.addChild(layer);
        }
    }
 
    public pushScene(layer:egret.DisplayObject) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.addChild(layer);
            this.stackLayer.push(layer);
        }
    }
 
    public popScene() {
        if (this.gameLayer != null) {
            var len = this.stackLayer.length;
            if (len > 0) {
                var layer = this.stackLayer[len - 1];
                if (layer.parent == this.gameLayer) {
                    this.gameLayer.removeChild(layer)
                    // Util.removeByElements(this.stackLayer, layer);
                }
            }
        }
    }
}