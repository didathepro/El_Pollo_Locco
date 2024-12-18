class Endboss extends MoveableObject {
    y = 20;
    width = 470;
    height = 250;

    IMAGES_WALKING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    DEAD_IMAGES = [
        "img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png"
    ];

    HURT_IMAGES = [
        "img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png"
    ];

    ALERT_IMAGES = [
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png",
    ];

    ATTACK_IMAGES = [
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png",
        "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png"
    ];

    constructor() {
        super().loadImage('img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.ALERT_IMAGES);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.ATTACK_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.x = 2300;
        this.animate();
        
    }

    animate() {
        setInterval(() => {

            if(this.isDead()){
                this.playAnimation(this.DEAD_IMAGES);
            }

            else {
                this.playAnimation(this.ALERT_IMAGES);
            }
        }, 500);
    }

    hit() {
    
        this.playAnimation(this.HURT_IMAGES);
        if (this.energy > 0) {
            this.energy -= 20;
        }
        if (this.energy <= 0) {
            this.energy = 0;
        }
    }
}
