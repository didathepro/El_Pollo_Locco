
class Bottle extends MoveableObject {
    width = 100;
    height = 100;

    IMAGES_BOTTLE = [
        'img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    ]

    constructor(x, y) {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png'); 
        this.loadImages(this.IMAGES_BOTTLE); 
        this.x = x; 
        this.y = y; 
        this.animation(); 
    };

    animation() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 300);
    };
};
