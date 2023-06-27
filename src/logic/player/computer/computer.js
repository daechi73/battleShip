const computer = () => {
  let coordToAttack;
  const makeMove = (board) => {
    const randomX = Math.floor(Math.random() * 10);
    const randomY = Math.floor(Math.random() * 10);
    coordToAttack = [randomX, randomY];

    if (board.checkCellAttacked(coordToAttack) === false) {
      return board.receiveAttack(coordToAttack);
    }
  };
  return { name: "Computer", makeMove, coordToAttack };
};

export default computer;
