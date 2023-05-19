const computer = () => {
  const makeMove = (board) => {
    do {
      const randomX = Math.floor(Math.random() * 10);
      const randomY = Math.floor(Math.random() * 10);
      const coordToAttack = [randomX, randomY];
      let pass = false;
      if (board.checkCellHit(coordToAttack) === false) {
        pass = true;
        return board.receiveAttack(coordToAttack);
      }
    } while (pass === false);
  };
  return { name: "Computer", makeMove };
};

export default computer;
