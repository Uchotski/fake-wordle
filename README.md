
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