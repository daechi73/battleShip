const computer = () => {
  const makeMove = (board) => {
    const randomX = Math.floor(Math.random() * 10);
    const randomY = Math.floor(Math.random() * 10);
    const coordToAttack = [randomX, randomY];
    let pass = false;
    if (board.checkCellAttacked(coordToAttack) === false) {
      pass = true;
      return board.receiveAttack(coordToAttack);
    }
  };
  return { name: "Computer", makeMove };
};

export default computer;
