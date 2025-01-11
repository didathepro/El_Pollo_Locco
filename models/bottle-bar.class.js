class BottleBar extends StatusBar {
    IMAGES = [
        "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
        "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png"
    ];

    percentage = 0;

    constructor (){
        super();
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 110;
        this.width = 60;
        this.height = 200;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage * 10; // Converts percentage to index range (0 to 5)
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the appropriate image index based on the current percentage.
     * @returns {number} - The index of the image to display.
     */
    resolveImageIndex() {
        if (this.percentage === 0) return 0;
        if (this.percentage < 40) return 1;
        if (this.percentage < 60) return 2;
        if (this.percentage < 80) return 3;
        if (this.percentage < 100) return 4;
        return 5;
    }
}