class EndbossBar extends StatusBar {
    IMAGES = [
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 480;
        this.y = 15;
        this.width = 60;
        this.height = 200;
        this.setPercentage(100);
    }
}