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
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle= 'blue';
        ctx.rect(this.x, this.y, this.height, this.width);
        ctx.stroke();
    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length; 
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

