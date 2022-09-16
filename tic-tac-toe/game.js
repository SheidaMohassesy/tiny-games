let matris = [];
let turn = 'X';
let size = 3;


function isSomeoneWon() {
    // check rows for winner
   for(let ri=0;ri<size;ri++) {
        const first = matris[ri][0];
        let ci=0;
        for(;ci<size;ci++) {
            if(first !== matris[ri][ci]){
                break;
            }
        }

        if(ci === size && first !== ' '){
            return true;
        }
   }

   // check column for winner
   for(let ci=0;ci<size;ci++) {
        const first = matris[0][ci];
        let ri=0;
        for(;ri<size;ri++) {
            if(first !== matris[ri][ci]){
                break;
            }
        }

        if(ri === size && first !== ' '){
            return true;
        }
    }

    let i=0;
    // check crossing from left-top to right-bottom
    const ltr = matris[0][0];
    for(;i<size;i++) {
        if(ltr !== matris[i][i]) {
            break;
        }
    }
    if(i === size && ltr !== ' '){
        return true;
    }

     // check crossing from right-top to left-bottom
    i =0;
    const rtl = matris[0][size-1];
    for(;i<size;i++) {
        if(rtl !== matris[i][size-1-i]){
            break;
        }
    }
    if(i === size && rtl !== ' '){
        return true;
    }

    return false;
}

function buttonClickHandler(event)  {

    const indexes = event.target.id.split('-');
    const rowIndex = indexes[0];
    const colIndex = indexes[1];
    
   console.log(event.target.id);
    if(turn === 'X') {
        event.target.textContent = '[X]';
        matris[rowIndex][colIndex] = 'X';
        turn = 'O';
    }
    else {
        event.target.textContent = '[O]';
        matris[rowIndex][colIndex] = 'O';
        turn = 'X';
    }
    
    console.table(matris);

    if(isSomeoneWon()) {
        if(turn === 'X') {
            alert('O won the game');
        }
        else{
            alert('X won the game');
        }
    }
}

function initBoard(n) {
    for(let i=0;i<n;i++) {
        const row = Array(Number(n)).fill(' ');
        matris[i] = row;
    }
}
function createRow(n, rowIndex) {
    const row = document.createElement("div");
    for(let i=0;i<n;i++) {
        const btn = document.createElement('button');
        btn.innerText = '[   ]';
        btn.onclick = buttonClickHandler;

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
function whenWindowIsLoaded (e) {
    const boardElement = document.getElementById('board');
    size = Number(prompt('Enter Board Size: (e.g: 3, 4, 5)', '3'));
    createBoard(boardElement, size);
    initBoard(size);

   // console.log(matris);
}

window.addEventListener('load', whenWindowIsLoaded);