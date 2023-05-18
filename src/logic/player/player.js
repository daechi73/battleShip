const player = (name) => {
  const makeMove = (board, coord) => {
    if (board.checkCellHit(coord) === false) {
      return board.receiveAttack(coord);
    }
  };
  return { name, makeMove };
};

export default player;
