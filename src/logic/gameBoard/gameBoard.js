const cell = (row, column) => {
  return { row, column, charCode: row + "" + column, contains: null };
};
const gameBoard = () => {
  const board = [];

  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(cell(String.fromCharCode(65 + i), j + 1));
      }
      board.push(row);
    }
  };
  const placeShip = (ship, startingPosition, position = "horizontal") => {
    let [startingX, startingY] = startingPosition;
    if (position === "horizontal") {
      const endPosition = startingX + ship.getLength() - 1;
      for (let i = startingX; i < endPosition; i++) {
        board[startingY][i].contains = ship;
      }
    }
  };
  const getBoard = () => {
    return board;
  };

  createBoard();

  return { createBoard, placeShip, getBoard };
};

export default gameBoard;
