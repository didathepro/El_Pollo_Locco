class MoveableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    speedY=0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity(){
        setInterval(()=> {
            if(this.isAboveGround() || this.speedY >0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        },1000/25)
    }

    isAboveGround() {
        if(this instanceof ThrowableObject){
            return true;
        }else {return this.y <215;}
    }

    isColliding (mo) {
        return this.x+this.width > mo.x &&
            this.y+this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        }else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; //Difference in MS
        timepassed = timepassed / 1000; //Difference in S
        return timepassed < 1 ;
    }

    isDead(){
        return this.energy == 0;
    }

    playAnimation(images){
        let i = this.currentImage % images.length; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x+=this.speed;
        this.otherDirection=false;
        this.walking_sound.play();
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        },1000/60)
    }
    
    jump(){
        this.speedY = 30;
    }

    markForDeletion() {
        this.isDeleted = true;
    }
}

