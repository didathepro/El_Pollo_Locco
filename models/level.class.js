class Level {
    coins;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, coins, clouds, backgroundObjects){
        this.enemies = enemies;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}