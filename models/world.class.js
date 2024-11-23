class World {
    character = new Character();
    endboss = new Endboss();
    level = Level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossBar = new EndbossBar();
    throwableObjects = [];
    gameOverDisplayed = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.removeDeletedObjects();
        }, 200);
    }
    
    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new Tabasco(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }
    
    removeDeletedObjects() {
        this.throwableObjects = this.throwableObjects.filter(obj => !obj.isDeleted);
        this.level.enemies = this.level.enemies.filter(enemy => !enemy.isDeleted);
    }

    checkCollisions() {
        // Character and enemy collisions
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    
        // Tabasco and enemy collisions
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.endboss)) {
                this.endboss.hit();
                this.endbossBar.setPercentage(this.endboss.energy);
                bottle.markForDeletion();
            }
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy)) {
                    enemy.hit(); 
                    bottle.markForDeletion(); 
                }
            });
        });
        
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.character.isDead()) {
            this.addObjectsToMap(this.level.backgroundObjects);
            this.showGameOverScreen(); // Only show game over screen if not already displayed

        } else {
            this.gameOverDisplayed = false; // Reset flag when character is alive
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.level.backgroundObjects);

            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.statusBar);
            this.ctx.translate(this.camera_x, 0);

            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.coinBar);
            this.ctx.translate(this.camera_x, 0);

            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.bottleBar);
            this.ctx.translate(this.camera_x, 0);
            
            if (this.character.x > 2000) {
                this.ctx.translate(-this.camera_x, 0);
                this.addToMap(this.endbossBar);
                this.ctx.translate(this.camera_x, 0);
            }

            this.addToMap(this.character);
            this.addObjectsToMap(this.level.clouds);
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.throwableObjects);

            this.ctx.translate(-this.camera_x, 0);
        }
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.showFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    showGameOverScreen() {
        if (!this.gameOverDisplayed) { // Check if game over screen has been displayed
            this.clearAllIntervals();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.addObjectsToMap(this.level.backgroundObjects);
            this.canvas.classList.add("d-none");
            displayGameOverScreen();
            this.gameOverDisplayed = true; // Set flag to true to indicate game over screen is displayed
        }
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}
