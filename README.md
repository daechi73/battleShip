                                Battleship

<u>gh-page</u>: https://daechi73.github.io/battleShip/

Set up your ships in the battle ground and destroy all of enemy's ships!

<u>Guide</u>:

1. Enter username and press start button to get to the ship positioning UI

2. a. For pc:
   - Drag the ships where you want them on the board.
   - once the ship is on the board, you can click them to change its position horizontally or vertically.
   - once you are satisfied with the position of the ships, press the start game button to start the game.
     b. For mobile:
   - Select the ship to be positioned by clicking it.
   - touch the board where you want to postion the ship.
   - touching the ship on the board will change horizontal/vertical position.
3. Click on the opponents battle ground (right) to play a round.
   - once you click on one of the cell the computer will attack yours automatically
   - when you see your board marked, it means you are free to attack again.
   - repeat until one of the player's ships are all destroyed.
4. Gameover msg UI will pop up once the game is over asking to play again.
   - Y button will restart the game
   - N button will end the game.

<u>Future update</u>:

- implement ai to computer
- implement 2 player mode

<u>Challenge faced</u>:

- Positioning the ships on the board took a big chunk of the time coding this application.
  - implementation of drag and drop was a new learning curve.
  - changing the ships vertical/horizontal position while on the board was challenging as it dealt with
    removing the whole element and creating a new one. This process caused eventlistener that was added to
    the original element to be removed and finding a way to remove drag and drop event listeners to all other ships/cells for each change of position so the listeners are not duplicated was the hardest part.
    - solution was to initializing the dragEvent object to a variable and using its reference to manipulate its
      enclosed eventlisteners wherever needed.

## ENJOY!

Starting Page:
![img](https://github.com/daechi73/battleShip/blob/main/screenShots/startPage.png)

---

Ship Positioning:
![img](https://github.com/daechi73/battleShip/blob/main/screenShots/shipPosition.png)

---

battle Ship:
![img](https://github.com/daechi73/battleShip/blob/main/screenShots/battleShip.png)

---

end game:
![img](https://github.com/daechi73/battleShip/blob/main/screenShots/endGame.png)

---
