const autoPcBoard = (pcBoard) => {
  for (const ship of pcBoard.getShips()) {
    do {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      randomVHPosition(x, ship);
      //   console.log(
      //     [x, y] +
      //       " " +
      //       ship.getPosition() +
      //       " " +
      //       ship.getCoord() +
      //       " " +
      //       ship.getName()
      //   );
      pcBoard.placeShip(ship, [x, y]);
      if (ship.getCoord != null) {
        // console.log("shipPlaced");
        // console.log(`${ship.getCoord()}`);
      }
    } while (ship.getCoord() == null);
  }
  pcBoard.printBoard();
};

const randomVHPosition = (x, ship) => {
  if (x % 2 === 0) ship.changePosition();
};

export default autoPcBoard;
