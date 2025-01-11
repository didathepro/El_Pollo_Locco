class Level {
    coins;
    bottles;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, coins, bottles, clouds, backgroundObjects){
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}