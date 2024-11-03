class DrawableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx){
        try {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
        } catch(e){
            console.warn("Error loading image");
            console.log("Couldn't load image", this.img.src)
        }
    }

    loadImages(arr){
        arr.forEach ((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path]= img;
        })
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

}