const computer = () => {
  let coordToAttack;

  const makeMove = (board) => {
    let pass = false;
    do {
      const randomX = Math.floor(Math.random() * 10);
      const randomY = Math.floor(Math.random() * 10);
      coordToAttack = [randomX, randomY];

      if (board.checkCellAttacked(coordToAttack) === false) {
        pass = true;
        return board.receiveAttack(coordToAttack);
      }
    } while (pass == false);
  };
  const getCoordToAttack = () => {
    return coordToAttack;
  };
  return { name: "Computer", makeMove, getCoordToAttack };
};

export default computer;
