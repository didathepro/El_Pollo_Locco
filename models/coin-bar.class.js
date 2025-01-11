class CoinBar extends StatusBar {
    percentage = 0;
    IMAGES = [
        "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    constructor (){
        super();
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 60;
        this.width = 60;
        this.height = 200;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage * 10;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.percentage === 0) return 0;
        if (this.percentage < 40) return 1;
        if (this.percentage < 60) return 2;
        if (this.percentage < 80) return 3;
        if (this.percentage < 100) return 4;
        return 5;
    }
}