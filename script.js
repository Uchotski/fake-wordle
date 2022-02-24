//PAGE COMPONENTS:
//Toggle Overlay...
document.getElementsByClassName('close-button')[0].onclick = function () {
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('menu').onclick = function () {
    document.getElementById('overlay').style.display = 'flex';
}

//GAME ELEMENTS:
//Starts the game...
const startGame = () => {
    //document.getElementById('start').removeEventListener("click", startGame);

    //Function to reset the game...
    const resetGame = () => {
        for (let i = 0; i < maxRow; i++) {
            for (let j = 0; j < maxCol; j++) {
                document.getElementById('game-grid').children[i].children[j].innerHTML = "";
            }
        }
        row = 0;
        col = 0;
    }

    //Function to generate new word...
    const makeWord = (length) => {
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const newWord = [];
        let i = 0;
        while (i < length) {
            newWord.push(alphabet[Math.floor(Math.random() * 26)]);
            i++;
        }
        return newWord;
    }

    //Function to make keyboard functional...
    const typeArea = () => {
        const gameArea = document.getElementById('game-grid');
        let content = event.target.innerHTML;

        if (content.length == 1) {
            //If one letter is selected...
            if (col >= maxCol || row >= maxRow) { return; }
            gameArea.children[row].children[col].innerHTML = content;
            return col++;
        } else if (content == 'delete') {
            //If 'delete' is clicked...
            if (col <= 0) { return; } //Disallows col from going below 0.
            col--;
            return gameArea.children[row].children[col].innerHTML = "";
        } else if (content == 'enter') {
            //If 'enter' is clicked...
            if (col != maxCol) { return; } //Disallows use if guess is incomplete.
            return submitGuess(collectGuess());
        } else {
            return;
        }
    }

    //Function to collect guesses...
    const collectGuess = () => {
        const currentRow = Array.from(document.getElementById('game-grid').children[row].children);
        const guess = [];
        currentRow.forEach(item => guess.push(item.innerHTML));
        return guess;
    }

    //Function to handle what happens when a user submits a guess...
    const submitGuess = (guess) => {
        console.log(`Hello! The current guess is ${guess.join("")}!`);
        console.log(`The current word to guess is ${word.join("")}!`);
        editBackground(guess, word);
        if (guess.join("") == word.join("")) {
            document.getElementById('keyboard').removeEventListener("click", typeArea);
            document.getElementById('start').addEventListener("click", startGame);
            return console.log("You won!");
        } else {
            row++;
            col = 0;
            return console.log("Try again!");
        }
    }

    //Function for editing styles on guess...
    const editBackground = (guess, word) => {
        const correct = "green";
        const incorrect = "gray";
        const isInWord = "orange";
        const currentRow = document.getElementById('game-grid').children[row];

        const containsLetter = (guess, word) => {
            for (let i = 0; i < guess.length; i++) {
                for (let j = 0; j < word.length; j++) {
                    if (guess[i] == word[j]) { return true; }
                }
            }
        }
    }

    //Game Variables:
    let col = 0;
    let row = 0;
    let maxCol = 5;
    let maxRow = 6;

    //Resets the game grid...
    resetGame();

    //Generates a new word...
    let word = makeWord(maxCol);

    //Enables the keyboard...
    document.getElementById('keyboard').addEventListener("click", typeArea);
}

document.getElementById('start').addEventListener("click", startGame);
