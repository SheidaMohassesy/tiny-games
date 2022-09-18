let matris = [];
let size = 2;

function initBoard(n) {
    for(let i=0;i<n;i++) {
        const row = Array(Number(n)).fill(' ');
        matris[i] = row;
    }
}

function createRow(n, rowIndex) {
    const row = document.createElement("div");
    row.className= 'row';
    for(let i=0;i<n;i++) {
        const btn = document.createElement('button');
        // btn.onclick = buttonClickHandler;  
        btn.className = 'slot';
        btn.id = `${rowIndex}-${i}`;
        row.appendChild(btn);
    }
    return row;
}
function createBoard(parentElement, n) {
    for(let i=0;i<n;i++) {
        const rowWithButtons = createRow(n, i);
        parentElement.appendChild(rowWithButtons);
    }
}

function loadGameWhenWindowIsLoaded(event){
    console.log("game is loaded");
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    createBoard(boardElement, size);
    initBoard(size);
}
window.addEventListener('load', loadGameWhenWindowIsLoaded);
