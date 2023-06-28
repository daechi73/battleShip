import ship from "../ship/ship";

const cell = (row, column) => {
  return {
    row,
    column,
    charCode: row + "" + column,
    contains: null,
    hit: false,
    missed: false,
  };
};
const gameBoard = (id) => {
  id.id++;
  const carrier = ship("carrier" + `${id.id}`, 5);
  const battleShip = ship("battleShip" + `${id.id}`, 4);
  const cruiser = ship("reaper" + `${id.id}`, 3);
  const submarine = ship("submarine" + `${id.id}`, 3);
  const destroyer = ship("destroyer" + `${id.id}`, 2);
  const scout = ship("fishingBoat" + `${id.id}`, 2);
  const ships = [carrier, battleShip, cruiser, submarine, destroyer, scout];
  //const ships = [carrier];

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
  const checkCellAttacked = (coord) => {
    let [x, y] = coord;
    if (board[y][x].hit === true || board[y][x].missed === true) return true;
    return false;
  };

  const placeShip = (ship, startingPosition) => {
    if (ship.getCoord() != null) {
      const [prevX, prevY] = ship.getCoord();
      removeShip(prevX, prevY, ship);
    }
    //console.log(startingPosition + "startingPosition");
    startingPosition = alphaNumCoordToNumCoord(startingPosition);
    // console.log(startingPosition);
    const [startingX, startingY] = startingPosition;

    if (ship.getPosition() === "horizontal") {
      const endPosition = startingX + ship.getLength() - 1;
      if (!checkBoundary(startingX, startingY, endPosition, ship.getPosition()))
        return "out of bounds";
      if (!checkCellOpen(startingX, startingY, endPosition, ship.getPosition()))
        return "position not open";
      for (let i = startingX; i <= endPosition; i++) {
        board[startingY][i].contains = ship;
      }
      ship.setCoord(startingPosition);
    } else {
      const endPosition = startingY + ship.getLength() - 1;
      if (!checkBoundary(startingX, startingY, endPosition, ship.getPosition()))
        return "out of bounds";
      if (!checkCellOpen(startingX, startingY, endPosition, ship.getPosition()))
        return "position not open";
      for (let i = startingY; i <= endPosition; i++) {
        board[i][startingX].contains = ship;
      }
      ship.setCoord(startingPosition);
    }
  };
  const alphaNumCoordToNumCoord = (alphaNumCoord) => {
    if (typeof alphaNumCoord === "string") {
      const x = alphaNumCoord.match(/[0-9]+/g)[0] - 1;
      const y = alphaNumCoord.match(/[a-zA-Z]/g)[0].charCodeAt(0) - 65;
      // console.log(x);
      // console.log(y);

      alphaNumCoord = [x, y];
    }
    return alphaNumCoord;
  };

  const numCoordToAlphaNumCoord = (numCoord) => {
    const x = numCoord[0] + 1;
    const y = String.fromCharCode(numCoord[1] + 65);
    return y + x;
  };
  const getBoard = () => {
    return board;
  };

  const receiveAttack = (coordination) => {
    let [x, y] = coordination;
    if (board[y][x].contains == null) {
      board[y][x].missed = true;
      //return `you've missed at position [${coordination}]`;
      return false;
    } else {
      const ship = board[y][x].contains;
      ship.hit();
      board[y][x].hit = true;
      if (ship.isSunk()) {
        numberOfSunkenShip++;
        if (numberOfSunkenShip === 6)
          // return `
          // You've hit ${ship.getName()} at position [${coordination}]
          // you've sunk a ${ship.getName()}!
          // You've sunken all the ships`;
          return {
            shipHit: true,
            ship: ship,
            shipSunk: true,
            sunkAllShips: true,
            coordination: numCoordToAlphaNumCoord(coordination),
          };
        // return `you've sunk a ${ship.getName()}!`;
        return {
          shipHit: true,
          ship: ship,
          shipSunk: true,
          sunkAllShips: false,
          coordination: numCoordToAlphaNumCoord(coordination),
        };
      }
      //return `You've hit ${ship.getName()} at position [${coordination}]`;
      return {
        shipHit: true,
        ship: ship,
        shipSunk: false,
        sunkAllShips: false,
        coordination: numCoordToAlphaNumCoord(coordination),
      };
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
        if (column.contains == null) {
          if (column.missed === false) printRow += ` o`;
          else printRow += ` x`;
        } else if (column.hit === true) printRow += ` H`;
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

  const autoPcBoard = () => {
    const randomVHPosition = (x, ship) => {
      if (x % 2 === 0) ship.changePosition();
    };
    for (const ship of ships) {
      do {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        randomVHPosition(x, ship);
        //   console.log(
        //     [x, y] +
        //       " " +
        //       ship.getPosition() +
        //       " " +
        //       ship.getCoord() +
        //       " " +
        //       ship.getName()
        //   );
        placeShip(ship, [x, y]);
        if (ship.getCoord != null) {
          // console.log("shipPlaced");
          // console.log(`${ship.getCoord()}`);
        }
      } while (ship.getCoord() == null);
    }
    printBoard();
  };

  const allShipsOnBoard = () => {
    for (const ship of ships) {
      if (ship.getCoord() == null) return false;
    }
    return true;
  };

  return {
    placeShip,
    getBoard,
    checkCellAttacked,
    receiveAttack,
    turnShip,
    printBoard,
    getShips,
    findShip,
    numCoordToAlphaNumCoord,
    autoPcBoard,
    alphaNumCoordToNumCoord,
    allShipsOnBoard,
  };
};

export default gameBoard;
