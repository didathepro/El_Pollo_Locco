function showStartingScreen() {
    let content = document.getElementById('overlay');
    content.innerHTML ="";
    content.innerHTML += /*html*/`
    <div class="container">
        <img class="startGameImage" src="img_pollo_locco/img/9_intro_outro_screens/start/startscreen_1.png">
        <button onclick="startTheGame();" type="button" class="startGameBtn">Start a game</button>
        <div class ="instructions">
            <p>Arrows Left/Right = Walk</p>
            <p>Spacebar = Jump</p>
            <p>D = Throw Tabasco</p>
        </div>
    </div>
    
    `;
}

function displayGameOverScreen(){
    let content = document.getElementById('gameOver');
    content.innerHTML ="";
    content.innerHTML += /*html*/`
    <div class="container">
        <img class="startGameImage" src="img_pollo_locco/GameOver.png">
        <button onclick="startTheGame();" type="button" class="startGameBtn">Play Again</button>
    </div>
    `;
}