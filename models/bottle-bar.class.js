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

}