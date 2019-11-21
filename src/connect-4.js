let playGame = document.getElementById('button');
let gameSection = document.querySelector('.game');
let dropCounters = document.querySelectorAll('.drop-counters-spaces');

let game = {
    isDisplayed: false
}
for (i = 0; i < dropCounters.length; i++) {
    dropCounters[i].setAttribute('id', i)
    dropCounters[i].addEventListener('click', showCounter)
}

function createTable() {
    if (game.isDisplayed) {
        let board = document.createElement('div');
        board.setAttribute('class', 'game__board');
        gameSection.appendChild(board);

        for (i = 1; i <= 10; i++) {
            let row = document.createElement('div');
            row.setAttribute('class', `game__board__row ${i}`);
            board.appendChild(row);
        }
        game.isDisplayed = false;
    }
}

// function createButton(){
//     if(game.isDisplayed){
//         let restartButton = createElement('button');
//         restartButton.setAttribute('class', 'game__button');
//         restartButton.innerHTML = 'Restart';
//         gameSection.appendChild(restartButton);
//         return restartButton;
//     }
// }
// state for button 
function showGame(e) {
    e.preventDefault();
    game.isDisplayed = true;
    createTable()
    createButton();
}

function showCounter() {
    console.log('show counter');
}

// events
playGame.addEventListener('click', showGame);
//dropCounters.addEventListener('click', showCounter)
// restartButton.addEventListener('click', restartGame)
// activate column 2, disable columns 1-9 


