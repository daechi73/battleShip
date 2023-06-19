import ship from "../ship/ship";

const cell = (row, column) => {
  return {
    row,
    column,
    charCode: row + "" + column,
    contains: null,
    hit: false,
  };
};
const gameBoard = () => {
  const carrier = ship("carrier", 5);
  const battleShip = ship("battleShip", 4);
  const cruiser = ship("cruiser", 3);
  const submarine = ship("submarine", 3);
  const destroyer = ship("destroyer", 2);
  const scout = ship("fishingBoat", 2, "vertical");
  const ships = [carrier, battleShip, cruiser, submarine, destroyer, scout];

  const board = [];
  let numberOfSunkenShip = 0;

  const createBoard = (() => {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(cell(String.fromCharCode(65 + i), j + 1));
      }
      board.push(row);
    }
  })();

  const checkCellOpen = (startingX, startingY, endPosition, position) => {
    if (position === "horizontal") {
      for (let i = startingX; i <= endPosition; i++) {
        if (board[startingY][i].contains != null) return false;
      }
    }
    if (position === "vertical") {
      for (let i = startingY; i <= endPosition; i++) {
        if (board[i][startingX].contains != null) return false;
      }
    }
    return true;
  };

  const checkBoundary = (startingX, startingY, endPosition, position) => {
    if (position === "horizontal") {
      for (let i = startingX; i <= endPosition; i++) {
        if (board[startingY][i] === undefined) {
          return false;
        }
      }
    }
    if (position === "vertical") {
      for (let i = startingY; i <= endPosition; i++) {
        if (board[i] === undefined) {
          return false;
        }
      }
    }
    return true;
  };
  const checkCellHit = (coord) => {
    let [x, y] = coord;
    if (board[y][x].hit === true) return true;
    return false;
  };

  const placeShip = (ship, startingPosition) => {
    if (ship.getCoord() != null) {
      const [prevX, prevY] = ship.getCoord();
      removeShip(prevX, prevY, ship);
    }
    startingPosition = alphaNumCoordToNumCoord(startingPosition);
    const [startingX, startingY] = startingPosition;
    ship.setCoord(startingPosition);
    if (ship.getPosition() === "horizontal") {
      const endPosition = startingX + ship.getLength() - 1;
      if (!checkBoundary(startingX, startingY, endPosition, ship.getPosition()))
        return "out of bounds";
      if (!checkCellOpen(startingX, startingY, endPosition, ship.getPosition()))
        return "position not open";
      for (let i = startingX; i <= endPosition; i++) {
        board[startingY][i].contains = ship;
      }
    } else {
      const endPosition = startingY + ship.getLength() - 1;
      if (!checkBoundary(startingX, startingY, endPosition, ship.getPosition()))
        return "out of bounds";
      if (!checkCellOpen(startingX, startingY, endPosition, ship.getPosition()))
        return "position not open";
      for (let i = startingY; i <= endPosition; i++) {
        board[i][startingX].contains = ship;
      }
    }
  };
  const alphaNumCoordToNumCoord = (alphaNumCoord) => {
    //console.log(typeof alphaNumCoord);
    if (typeof alphaNumCoord === "string") {
      const coordArray = alphaNumCoord.split("");
      const y = coordArray[0].charCodeAt(0) - 65;
      alphaNumCoord = [coordArray[1] - 1, y];
    }
    return alphaNumCoord;
  };

  const getBoard = () => {
    return board;
  };

  const receiveAttack = (coordination) => {
    let [x, y] = coordination;
    if (board[y][x].contains == null) {
      board[y][x].hit = true;
      return `you've missed at position [${coordination}]`;
    } else {
      const ship = board[y][x].contains;
      ship.hit();
      board[y][x].hit = true;
      if (ship.isSunk()) {
        numberOfSunkenShip++;
        if (numberOfSunkenShip === 6)
          return `
          You've hit ${ship.getName()} at position [${coordination}]
          you've sunk a ${ship.getName()}!
          You've sunken all the ships`;
        return `you've sunk a ${ship.getName()}!`;
      }
      return `You've hit ${ship.getName()} at position [${coordination}]`;
    }
  };

  const turnShip = (name) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const ship = board[i][j].contains;
        if (ship != null) {
          if (ship.getName() === name) {
            let endPosition;
            let startingX, startingY;
            let tempPosition;
            if (ship.getPosition() === "horizontal") tempPosition = "vertical";
            else tempPosition = "horizontal";

            if (tempPosition === "horizontal") {
              endPosition = j + ship.getLength() - 1;
              startingX = j + 1;
              startingY = i;
            } else {
              endPosition = i + ship.getLength() - 1;
              startingY = i + 1;
              startingX = j;
            }
            if (!checkBoundary(startingX, startingY, endPosition, tempPosition))
              return "out of bounds";
            if (!checkCellOpen(startingX, startingY, endPosition, tempPosition))
              return "position not open";
            removeShip(j, i, ship);
            ship.changePosition();

            placeShip(ship, [j, i]);
            return "ship turned";
          }
        }
      }
    }
  };

  const removeShip = (startingX, startingY, ship) => {
    if (ship.getPosition() === "horizontal") {
      const endPosition = startingX + ship.getLength() - 1;
      for (let i = startingX; i <= endPosition; i++) {
        board[startingY][i].contains = null;
      }
    } else if (ship.getPosition() === "vertical") {
      const endPosition = startingY + ship.getLength() - 1;
      for (let i = startingY; i <= endPosition; i++) {
        board[i][startingX].contains = null;
      }
    }
  };

  const printBoard = () => {
    board.forEach((row) => {
      let printRow = "";
      row.forEach((column) => {
        if (column.contains == null) printRow += ` o`;
        else
          printRow += ` ${column.contains.getName().charAt(0).toUpperCase()}`;
      });
      console.log(printRow);
    });
  };

  const getShips = () => {
    return ships;
  };
  const findShip = (shipName) => {
    for (const ship of ships) {
      if (ship.getName() === shipName) return ship;
    }
  };

  return {
    placeShip,
    getBoard,
    checkCellHit,
    receiveAttack,
    turnShip,
    printBoard,
    getShips,
    findShip,
  };
};

export default gameBoard;
