let playGame = document.getElementById('button');
let gameSection = document.querySelector('.game');

let game = {
    isDisplayed: false
}

function createTable(){
    if(game.isDisplayed){
        let table = document.createElement('table');
        table.setAttribute('class', 'game__board');
        gameSection.appendChild(table);
    
        for(i =1; i<=10; i++){
            let column = document.createElement('tr');
            column.setAttribute('class', `game__board__row ${i}` );

            table.appendChild(column);

            for(k = 1; k<=10; k++){
                let row = document.createElement('td');
                row.setAttribute('class', 'game__board__column');
                row.setAttribute('id', k)
                column.appendChild(row);
            }
        }
        game.isDisplayed = false;
    }

}
// state for button 
function showGame(e){
    e.preventDefault();
    game.isDisplayed = true;
    createTable()
}

// events
playGame.addEventListener('click', showGame);

// display counter to table

