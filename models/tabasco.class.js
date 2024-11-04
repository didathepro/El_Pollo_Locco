class Tabasco extends ThrowableObject {
    FLYING_TABASCO = [
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];
    maxY = 350;
    horizontalMovementStopped = false;

    constructor(x, y) {
        super(x, y);
        this.loadImage(this.FLYING_TABASCO[0]);
        this.loadImages(this.FLYING_TABASCO);
        this.applyGravity();
        this.throw();
    }

    applyGravity() {
        setInterval(() => {
            if (this.y < this.maxY) {
                this.y -= this.speedY;
                this.speedY -= 1;

                if (this.y >= this.maxY) {
                    this.y = this.maxY;
                    this.speedY = 0;
                    this.horizontalMovementStopped = true;
                    this.playSplashAnimation();
                }
            }
        }, 25);
    }

    throw() {
        this.speedY = 15;
        this.applyGravity();

        // Horizontal movement
        setInterval(() => {
            if (!this.horizontalMovementStopped) {
                this.x += 5;
            }
        }, 25);
    }

    playSplashAnimation() {
        let currentImageIndex = 0;
        const animationInterval = setInterval(() => {
            if (currentImageIndex < this.FLYING_TABASCO.length) {
                this.img = this.imageCache[this.FLYING_TABASCO[currentImageIndex]];
                currentImageIndex++;
            } else {
                clearInterval(animationInterval);
                this.holdFinalFrame();
            }
        }, 100);
    }

    holdFinalFrame() {
        setTimeout(() => {
            this.markForDeletion();
        }, 500);
    }

    markForDeletion() {
        this.isDeleted = true;
    }
}
