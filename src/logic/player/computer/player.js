const player = (name) => {
  const makeMove = (board, coord) => {
    if (board.checkCellAttacked(coord) === false) {
      return board.receiveAttack(coord);
    }
  };
  return { name, makeMove };
};

export default player;
