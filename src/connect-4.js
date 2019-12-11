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
const rows = [
    [18, 98, 10, 58, 78, 38, 28, 88],
    [7, 5, 0, 0, 0, 0, 0, 0],
    [6, 6, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 0, 0, 0, 0, 5],
    [4, 4, 0, 0, 0, 0, 0, 4],
    [3, 3, 0, 0, 0, 0, 0, 3],
    [2, 2, 0, 0, 0, 0, 0, 2],
    [11, 1, 1, 1, 0, 0, 1, 1]
]
let tally = 0
for (let i = 0; i <= rows.length; i++) {
    // console.log(rows.length)

    for (let c = 0; c < rows.length; c++){
        console.log(rows[c][i]) // checks from top to bottom
        
        // check columns 
        if (rows[c][i] === rows[c][i-1]){
            console.log(' its a match')
        }
       
    }
    function checkValues () {
        // check row 
        // if(rows[i-1][0] === rows[i-1][1]){
        //     console.log('match')
        //     tally++
        //     console.log(`Tally = ${tally}`)
        
        //     if (rows[i - 1][1] === rows[i - 1][2]){
        //         console.log('match')
        //         tally++
        //         console.log(`Tally = ${tally}`) 
        
        //         if (rows[i - 1][2] === rows[i - 1][3]){
        //             console.log('match')
        //             tally++
        //             console.log(`Tally = ${tally}`) 
        
        //             if(tally >= 3){
        //                 console.log('Winner')
        //                 return 'Winner'
        //             }
        //             if (rows[i - 1][3] === rows[i - 1][4]) {
        //                 console.log('match')
        //                 if(tally >= 3) {
        //                     console.log('Winner')
        //                     tally++
        //                     return tally
        //                 }
        
        //                 if (rows[i - 1][4] === rows[i - 1][5]){
        //                     console.log('match')
        //                     if (tally >= 3) {
        //                         console.log('Winner')
        //                         tally++
        //                     }
        //                     // console.log(`Tally = ${tally}`)
        
        //                     if (rows[i - 1][5] === rows[i - 1][6]) {
        //                         console.log('match')
        //                         tally++
        //                         console.log(`Tally = ${tally}`)
        
        //                         if (rows[i - 1][6] === rows[i - 1][7]) {
        //                             console.log('match')
        //                             tally++
        //                             console.log(`Tally = ${tally}`)
        
        //                         } 
        //                     } 
        //                 }
        //             } 
        //         } 
        //     } 
        // } 
    } 
    // checkValues()
    }
const player = {
    one: true,
    two: false
}
playGame.addEventListener('click', showGame);

function displayPlayer() {
    displayP = document.createElement('p');
    
    if(player.one){
        let playerOne = 'player one'
        displayP.innerHTML = `Player: ${playerOne}`;
        player.one = false;
        player.two = true;
    } else if(player.two){
        let playerTwo = 'player one'
        displayP.innerHTML = `Player: ${playerTwo}`;
    }
    gameSection.appendChild(displayPlayer);

}
function showGame(e) {
    e.preventDefault();
    game.isDisplayed = true;
    player.one = true;

    createTable()
    
    if (!game.isDisplayed) {
        playGame.setAttribute('class', 'game__button--hide')
        createButton()
    }
}
function createTable() {
    if (game.isDisplayed) {
        createDropCounters()
        // displayPlayer()

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
        dropCountersSpaces.setAttribute('class', 'drop-counters__spaces drop-counters__spaces--playerOne')
        dropCountersSpaces.setAttribute('id', `counter--${i}`)
        dropCounters.appendChild(dropCountersSpaces);

        dropCountersSpaces.addEventListener('click', function(e) {
            game.No_counters += 1;

            // create two players 
            if(player.one) {
                console.log('player one')
                player.one = false;
                player.two = true;
            } else if (player.two){
                console.log('player two');
                dropCountersSpaces.setAttribute('class', 'drop-counters__spaces drop-counters__spaces--playerTwo')
                player.one = true;
                player.two = false;
            } 
            // needs to loop through col array and check if it has already got class 
            switch(e.target.id){
                case 'counter--0':
                    rows.row0[0] = 1
                    if(player.one){
                        columns.col0[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col0[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break;
                case 'counter--1':
                    rows.row0[1] = 1
                    if (player.one) {
                        columns.col1[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col1[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break;
                case 'counter--2':
                    rows.row0[2] = 1
                    if (player.one) {
                        columns.col2[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col2[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break;
                case 'counter--3':
                    rows.row0[3] = 1
                    if (player.one) {
                        columns.col3[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col3[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break;
                case 'counter--4':
                    rows.row0[4] = 1
                    if (player.one) {
                        columns.col4[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col4[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break;
                case 'counter--5':
                    rows.row0[5] = 1
                    if (player.one) {
                        columns.col5[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col5[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break; 
                case 'counter--6':
                    rows.row0[6] = 1
                    if (player.one) {
                        columns.col6[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col6[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break; 
                case 'counter--7':
                    rows.row0[7] = 1
                    if (player.one) {
                        columns.col7[7].setAttribute('class', 'dropped-counter dropped-counter--playerOne');
                    } else {
                        columns.col7[7].setAttribute('class', 'dropped-counter dropped-counter--playerTwo');
                    }
                    break;
            }
        })
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



