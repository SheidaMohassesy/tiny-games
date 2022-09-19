let matris = [];
let size = 2;
let rgbColor = [];
let level = 1;
let opacity = 0.002;
let targetIndexes = [];

function resetGame() {
    size = 2;
    level=1;
    opacity = 0.01;
    loadGameWhenWindowIsLoaded();
}

function nextLevel() {
    const boardElement = document.getElementById('board');
    opacity += 0.1;
    level += 1;
    size += 1;
    loadGameWhenWindowIsLoaded();
}

function buttonClickHandler(event)  {
   const indexes = event.target.id.split('-');
    if(Number(indexes[0]) === targetIndexes[0] && Number(indexes[1]) === targetIndexes[1]) {
        nextLevel();
    }
    else {
        alert('game is over, yu lost the game!');
        resetGame();
    }
}
function getRandomColorRange() {
    return Math.floor(Math.random() * 255) + 1;
}

function getRandomIndex() {
    return Math.floor(Math.random() * size);
}

function getTargetSlotIndexes() {
    const rowIndex = getRandomIndex();
    const colIndex = getRandomIndex();
    return [rowIndex, colIndex];
}

function getRandomRGB() {
    const red = getRandomColorRange();
    const green = getRandomColorRange();
    const blue = getRandomColorRange();

    return [red, green, blue];
}

function initBoard(n) {
    for(let i=0;i<n;i++) {
        const row = Array(Number(n)).fill(' ');
        matris[i] = row;
    }
}

function createRow(n, rowIndex) {
    const row = document.createElement("div");
    row.className= 'row';
    const numberOfSlot = n*n;
    const hitIndex = Math.floor(Math.random()*numberOfSlot);

    for(let i=0;i<n;i++) {
        const btn = document.createElement('button');
        btn.onclick = buttonClickHandler;  
        btn.className = 'slot';
        console.log(targetIndexes);
        if(targetIndexes[0] === rowIndex && targetIndexes[1] === i){
            btn.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]}, ${opacity})`;
        }
        else{
            btn.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
        }
        btn.id = `${rowIndex}-${i}`;
        row.appendChild(btn);
    }
    return row;
}
function createBoard(parentElement, n) {
    color = getRandomRGB();
    targetIndexes = getTargetSlotIndexes();
    parentElement.innerHTML = '';
    for(let i=0;i<n;i++) {
        const rowWithButtons = createRow(n, i);
        parentElement.appendChild(rowWithButtons);
    }
}

function loadGameWhenWindowIsLoaded(event){
    console.log("game is loaded");
    const boardElement = document.getElementById('board');
    const gameLevelElement = document.getElementById('gameLevel');
    boardElement.innerHTML = '';
    gameLevelElement.innerText = level;
    createBoard(boardElement, size);
    initBoard(size);

}
window.addEventListener('load', loadGameWhenWindowIsLoaded);
