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
const rows = {
    row0: [0, 0, 0, 0, 0, 0, 0, 0],
    row1: [0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0] 
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

        for (i = 7; i >=0; i--) {
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
                
                switch(e.target.id){
                    case 'counter--0':
                        columns.col0[7].setAttribute('class', 'dropped-counter');
                        
                        rows.row0[0] = 1
                        console.log(columns.col0[6]);
                        console.log(columns.col0[5]);
                        e.target.addEventListener('click', function (){
                            if(rows.row0[0] === 1){
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break;
                    case 'counter--1':
                        columns.col1[7].setAttribute('class', 'dropped-counter');
                        rows.row0[1] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[1] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break;
                    case 'counter--2':
                        columns.col2[7].setAttribute('class', 'dropped-counter');
                        rows.row0[2] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[2] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break;
                    case 'counter--3':
                        columns.col3[7].setAttribute('class', 'dropped-counter');
                        rows.row0[3] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[3] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break;
                    case 'counter--4':
                        columns.col4[7].setAttribute('class', 'dropped-counter');
                        rows.row0[4] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[4] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break;
                    case 'counter--5':
                        columns.col5[7].setAttribute('class', 'dropped-counter');
                        rows.row0[5] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[5] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break; 
                    case 'counter--6':
                        columns.col6[7].setAttribute('class', 'dropped-counter');
                        rows.row0[6] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[6] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
                        break; 
                    case 'counter--7':
                        columns.col7[7].setAttribute('class', 'dropped-counter');
                        rows.row0[7] = 1
                        console.log(rows.row0);
                        e.target.addEventListener('click', function () {
                            if (rows.row0[7] === 1) {
                                columns.col0[6].setAttribute('class', 'dropped-counter');
                            }
                        })
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



