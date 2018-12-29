var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Director = (function () {
    function Director() {
        this.stackLayer = [];
        this.gameLayer = null;
    }
    Director.getInstance = function () {
        if (Director.instance == null) {
            Director.instance = new Director();
        }
        return Director.instance;
    };
    Director.prototype.initWithMain = function (m) {
        if (this.gameLayer == null) {
            this.gameLayer = m;
        }
    };
    Director.prototype.repleaceScene = function (layer) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.removeChildren();
            console.log(layer, this.gameLayer);
            this.gameLayer.addChild(layer);
        }
    };
    Director.prototype.pushScene = function (layer) {
        if (this.gameLayer != null && layer != null) {
            this.gameLayer.addChild(layer);
            this.stackLayer.push(layer);
        }
    };
    Director.prototype.popScene = function () {
        if (this.gameLayer != null) {
            var len = this.stackLayer.length;
            if (len > 0) {
                var layer = this.stackLayer[len - 1];
                if (layer.parent == this.gameLayer) {
                    this.gameLayer.removeChild(layer);
                    // Util.removeByElements(this.stackLayer, layer);
                }
            }
        }
    };
    Director.instance = null;
    return Director;
}());
__reflect(Director.prototype, "Director");
