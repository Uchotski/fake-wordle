//PAGE COMPONENTS:
//Toggle Overlay...
document.getElementsByClassName('close-button')[0].onclick = function() {
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('menu').onclick = function() {
    document.getElementById('overlay').style.display = 'flex';
}

//Functional Keyboard:
//Making the Keyboard Functional
const keyboardPress = () => {
    let content = event.target.innerHTML;
    if (content.length == 1) {
        console.log(content);
        console.log("A single character was pressed!");
    } else if (content == 'delete') {
        console.log("The delete button was pressed!");
    } else if (content == 'enter') {
        console.log("The enter button was pressed!");
    } else {
        return console.log("Something else got pushed!");
    }
}

document.getElementById('keyboard').addEventListener("click", keyboardPress);

//GAME ELEMENTS:
//Random Word Generator:
const makeWord = () => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const newWord = [];
    let i = 0;
    while (i < 5) {
        newWord.push(alphabet[Math.floor(Math.random() * 26)]);
        i++;
    }

    console.log(newWord.join(""));
    return newWord.join("");
}

let col = 0;
    let row = 0;
    let maxCol = 5;
    let maxRow = 5;

const editGameArea = () => {
    const gameArea = document.getElementById('game-grid');

    //Keyboard press...
    let content = event.target.innerHTML;
    let keypress;
    if (content.length == 1) {
        console.log(content);
        console.log("A single character was pressed!");
        keypress = content;
    } else if (content == 'delete') {
        console.log("The delete button was pressed!");
        keypress = content;
    } else if (content == 'enter') {
        console.log("The enter button was pressed!");
        keypress = content;
    } else {
        console.log("Something else got pushed!");
    }

    if (keypress.length == 1) {
        if (col > maxCol || row > maxRow) { return; }
        console.log(keypress);
        gameArea.children[row].children[col].innerHTML = keypress;
        col++;
        return;
    } else if (keypress == 'delete') {
        if (col <= 0) { return; }
        col--;
        gameArea.children[row].children[col].innerHTML = "";
        return;
    } else if (keypress == 'enter') {
        console.log(col);
        if (col != maxCol) { return console.log("You hit enter too soon!"); }
        console.log("The enter button was hit!");
        row++;
        col = 0;
        return;
    }
}

document.getElementById("keyboard").addEventListener("click", editGameArea);
document.getElementById("start").addEventListener("click", makeWord);