class MoveableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
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
        return this.y <215;
    }

    loadImages(arr){
        arr.forEach ((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path]= img;
        })
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }

    showFrame(ctx){
        if(this instanceof Character || this instanceof Chicken){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle= 'blue';
            ctx.rect(this.x, this.y, this.height, this.width);
            ctx.stroke();
        }
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

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
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
}

