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
  const checkCellOpen = (startingX, startingY, endPosition, position) => {
    if (position === "horizontal") {
      for (let i = startingX; i <= endPosition; i++) {
        if (board[startingY][i].contains != null) return false;
      }
    }
    if (position === "vertical") {
      for (let i = startingY; i <= endPosition; i++) {
        if (board[i][startingY].contains != null) return false;
      }
    }
    return true;
  };
  const placeShip = (ship, startingPosition, position = "horizontal") => {
    let [startingX, startingY] = startingPosition;
    if (position === "horizontal") {
      const endPosition = startingX + ship.getLength() - 1;
      if (!checkCellOpen(startingX, startingY, endPosition, position))
        return "position not open";
      for (let i = startingX; i <= endPosition; i++) {
        board[startingY][i].contains = ship;
      }
    } else {
      const endPosition = startingY + ship.getLength() - 1;
      if (!checkCellOpen(startingX, startingY, endPosition, position))
        return "position not open";
      for (let i = startingY; i <= endPosition; i++) {
        board[i][startingY].contains = ship;
      }
    }
  };
  const getBoard = () => {
    return board;
  };

  createBoard();

  return { createBoard, placeShip, getBoard, checkCellOpen };
};

export default gameBoard;
