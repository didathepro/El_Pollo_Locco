class Chicken extends MoveableObject {
    y = 360;
    width = 70;
    height = 100;
    IMAGES_WALKING = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    DEAD_IMAGE = 'img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
    currentImage = 0;
    energy = 5;
    isDead = false;

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.random() * 1500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            if (this.energy > 0) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (!this.isDead) {
                this.showDeathImage();
            }
        }, 100);
    }

    showDeathImage() {
        this.isDead = true;
        this.loadImage(this.DEAD_IMAGE);

        setTimeout(() => {
            this.markForDeletion();
        }, 500);
    }

}
