const playGame = document.getElementById('button');
const gameSection = document.querySelector('.game');
const game = {
    isDisplayed: false,
    No_counters: 0,
}
const columns = {
    col0: document.getElementsByClassName('column:0'),
    col1: document.getElementsByClassName('column:1'),
    col2: document.getElementsByClassName('column:2'),
    col3: document.getElementsByClassName('column:3'),
    col4: document.getElementsByClassName('column:4'),
    col5: document.getElementsByClassName('column:5'),
    col6: document.getElementsByClassName('column:6'),
    col7: document.getElementsByClassName('column:7')
}
playGame.addEventListener('click', showGame);

function showGame(e) {
    e.preventDefault();
    game.isDisplayed = true;
    createTable()

    if (!game.isDisplayed) {
        playGame.setAttribute('class', 'game__button--hide')
        createButton()
    }
}
function createTable() {
    if (game.isDisplayed) {
        createDropCounters()

        const board = document.createElement('div');
        board.setAttribute('class', 'game__board');
        gameSection.appendChild(board);

        for (i = 1; i <= 7; i++) {
            const row = document.createElement('div');
            row.setAttribute('class', `game__board__rows row:${i}`);
            board.appendChild(row);

            for (k = 0; k <= 7; k++) {
                const spaces = document.createElement('div');
                spaces.setAttribute('class', `game__board__spaces column:${k}`);

                row.appendChild(spaces);
            }
        }
        game.isDisplayed = false;
    }
}
function createDropCounters (){
    const dropCounters = document.createElement('div');
    dropCounters.setAttribute('class', 'drop-counters');
    gameSection.appendChild(dropCounters);
    
    for(i = 0; i <= 7; i++){
        const dropCountersSpaces = document.createElement('div');
        dropCountersSpaces.setAttribute('class', `drop-counters__spaces`);
        dropCountersSpaces.setAttribute('id', `counter--${i}`)
        dropCounters.appendChild(dropCountersSpaces);
    
        if(game.No_counters !== 1){
            dropCountersSpaces.addEventListener('click', function(e) {
                game.No_counters += 1;
                
                for(c = 7; c > i; c--){
                    console.log(c);
                }
                switch(e.target.id){
                    case 'counter--0':
                        columns.col0[6].setAttribute('class', 'dropped-counter');
                        
                        break;
                    case 'counter--1':
                        columns.col1[6].setAttribute('class', 'dropped-counter')
                        break;
                    case 'counter--2':
                        columns.col2[6].setAttribute('class', 'dropped-counter')
                        break;
                    case 'counter--3':
                        columns.col3[6].setAttribute('class', 'dropped-counter')
                        break;
                    case 'counter--4':
                        columns.col4[6].setAttribute('class', 'dropped-counter')
                        break;
                    case 'counter--5':
                        columns.col5[6].setAttribute('class', 'dropped-counter')
                        break; 
                    case 'counter--6':
                        columns.col6[6].setAttribute('class', 'dropped-counter')
                        break; 
                    case 'counter--7':
                        columns.col7[6].setAttribute('class', 'dropped-counter')
                        break;
                }
            })
        } else {
            return
        }
    }
}
function createButton(){
    const restart = document.createElement('button');
    restart.setAttribute('class', 'game__button');
    restart.innerHTML = 'Restart Game';
    gameSection.appendChild(restart);

    restart.addEventListener('click', clearBoard)
}

function clearBoard(){
    console.log('clear game');
}



