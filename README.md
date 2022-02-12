
# FAKE WORDLE

## What is this Project?

The objective of this project is to create a clone of the popular game "Wordle", with some minor changes. The purpose of this is to see if, using Javascript, you can produce a functional game like Wordle, and work out how to make the game functional.

## Targets:

- Create a layout which matches the Wordle format.
- Create a functional, basic game script which does the following:
  - Generate a randomised string of 5 alphabetical characters (A - Z) characters.
  - Allow the user to commit input in order to guess what these 5 characters are. The user will have a maximum of SIX guesses.
  - Each guess will generate a row in a grid showing the user's guess. Their guess will trigger the following events:
    - The grid will display their word and change colours depending on the user's guess.
    - If the guessed letter is correct, and in the correct position, change the background to green.
    - If their letter appears in the word, but is in the wrong location, change the block to yellow.
    - If their letter does not appear in the word at all, change the block to black (or red?).
  - Each guess will also alter the appearance of a keyboard layout, the colour coding the same as above.
  - Tallies how many guesses it took the user to get the correct answer (or not) and produce a histogram of their previous game scores.

## Scopes for Expansion:

- Add a dictionary API. Select a random 5-letter word from the dictionary rather than generating a random 5-letter string.
- Add code so that if the user's guess is not in the dictionary, prevent them from making that guess and wasting a turn.
- Add the ability to remember the users' score from game-to-game.
- Add the ability to change whether the word is a 4, 5, 6 or 7-letter word.
- Add the ability to change the number of maximum guesses a user can make (up to 12 guesses or so?)

## Plan of Action:

### Layout:
- Header
  - Does what it says on the tin. :O
- Means of toggling game modes
  - Button to make game modes appear? Show as an overlay?
- Grid/play area
  - Start with a 5x6 grid for input.
  - If the game mode is altered, then alter the no. of columns.
  - Styling should have each 'tile' as a square, the letter displayed should sit in the dead centre of the tile.
- Keyboard/user input area
  - Bottom of viewport
  - Touchable keyboard for mobile, typeable if using a real keyboard.
  - On touch or keystroke, make the keys change apperance.