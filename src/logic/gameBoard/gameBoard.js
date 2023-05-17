const cell = (row, column) => {
  return { row, column, charCode: row + "" + column };
};
const gameBoard = () => {
  const board = [];
  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        board.push(cell(String.fromCharCode(65 + i), j + 1));
      }
    }
    return board;
  };

  return { createBoard };
};

export default gameBoard;
