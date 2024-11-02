class Character extends MoveableObject {

    width = 200;
    y=90;
    speed = 10;

    IMAGES_WALKING = ['img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
                            'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
                            'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
                            'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
                            'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
                            'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'];
    
    currentImage = 0;
    world;
    walking_sound = new Audio('audio/running.mp3');

    IMAGES_JUMPING = ['img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-32.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
                      'img_pollo_locco/img/2_character_pepe/3_jump/J-39.png',
    ];

    IMAGES_DEAD = ['img_pollo_locco/img/2_character_pepe/5_dead/D-51.png',
                'img_pollo_locco/img/2_character_pepe/5_dead/D-52.png',
                'img_pollo_locco/img/2_character_pepe/5_dead/D-53.png',
                'img_pollo_locco/img/2_character_pepe/5_dead/D-54.png',
                'img_pollo_locco/img/2_character_pepe/5_dead/D-55.png',
                'img_pollo_locco/img/2_character_pepe/5_dead/D-56.png',
                'img_pollo_locco/img/2_character_pepe/5_dead/D-57.png',
    ];

    IMAGES_HURT = [
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png',
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png',
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png',
    ];

    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(()=> {
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.moveRight();
            }
            if(this.world.keyboard.LEFT && this.x > 0){
                this.x-=this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }

            if(this.world.keyboard.SPACE && !this.isAboveGround()){
                this.jump();
            }

            this.world.camera_x = -this.x +100;
        },1000/60)

        setInterval(() => {
                if(this.isHurt()){
                    this.playAnimation(this.IMAGES_HURT);
                }

                if(this.isDead()){
                    this.playAnimation(this.IMAGES_DEAD);
                }

                if(this.isAboveGround()) {
                    this.playAnimation(this.IMAGES_JUMPING);
                }

                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                    this.playAnimation(this.IMAGES_WALKING);
                }
        },50)

    }  
}