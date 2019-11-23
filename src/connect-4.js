let playGame = document.getElementById('button');
let gameSection = document.querySelector('.game');
// let dropCounters = document.querySelectorAll('.drop-counters__spaces');

let game = {
    isDisplayed: false,
    No_counters: 0,
}

function createDropCounters (){
    let dropCounters = document.createElement('div');
    dropCounters.setAttribute('class', 'drop-counters');
    gameSection.appendChild(dropCounters);
    
    for(i = 0; i <= 7; i++){
        let dropCountersSpaces = document.createElement('div');
        dropCountersSpaces.setAttribute('class', 'drop-counters__spaces');
        dropCounters.appendChild(dropCountersSpaces);
    
        dropCountersSpaces.addEventListener('mouseover', function(){
            event.target.style.background = 'pink';
        })
        dropCountersSpaces.addEventListener('mouseout', function(){
            event.target.style.background = ''
        })
        dropCountersSpaces.addEventListener('click', function(){
            event.target.style.background = 'purple'
            this.onmouseout = null;
        })

    }
}

function createTable() {
    if (game.isDisplayed) {
        createDropCounters()

        let board = document.createElement('div');
        board.setAttribute('class', 'game__board');
        gameSection.appendChild(board);

        for (i = 1; i <= 7; i++) {
            let row = document.createElement('div');
            row.setAttribute('class', `game__board__rows`);
            row.setAttribute('id', i)
            board.appendChild(row);

            for(k = 0; k<=7; k++){
                let spaces = document.createElement('div');
                spaces.setAttribute('class', 'game__board__spaces');
                spaces.setAttribute('id', k)
                row.appendChild(spaces);
            }
        }
        game.isDisplayed = false;
    }
}
function restartButton(){
    let restart = document.createElement('button');
    restart.setAttribute('class', 'game__button');
    restart.innerHTML = 'Restart Game';
    gameSection.appendChild(restart);
    // clear game
}

function showGame(e) {
    e.preventDefault();
    game.isDisplayed = true;
    createTable()

    if(!game.isDisplayed){
        playGame.setAttribute('class', 'game__button--hide')
        restartButton()
    }
}

playGame.addEventListener('click', showGame);



