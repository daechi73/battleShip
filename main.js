/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic/UI/UI.js":
/*!****************************!*\
  !*** ./src/logic/UI/UI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameBoard/gameBoard */ "./src/logic/gameBoard/gameBoard.js");
/* harmony import */ var _player_computer_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/computer/player */ "./src/logic/player/computer/player.js");
/* harmony import */ var _player_computer_computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/computer/computer */ "./src/logic/player/computer/computer.js");
/* harmony import */ var _render_renderUI_renderUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/renderUI/renderUI */ "./src/render/renderUI/renderUI.js");
/* harmony import */ var _utility_shipId_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/shipId.js */ "./src/logic/utility/shipId.js");
/* harmony import */ var _utility_dragDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/dragDrop */ "./src/logic/utility/dragDrop.js");
/* harmony import */ var _utility_changePosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/changePosition */ "./src/logic/utility/changePosition.js");
/* harmony import */ var _utility_clickDrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/clickDrop */ "./src/logic/utility/clickDrop.js");
/* harmony import */ var _utility_mobileCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utility/mobileCheck */ "./src/logic/utility/mobileCheck.js");










const UI = (playerName) => {
  const id = (0,_utility_shipId_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const player1 = (0,_player_computer_player__WEBPACK_IMPORTED_MODULE_1__["default"])(playerName);
  const player2 = (0,_player_computer_computer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const player1Board = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  const player2Board = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(id);

  (0,_render_renderUI_renderUI__WEBPACK_IMPORTED_MODULE_3__["default"])(player1Board, player2Board, player1, player2);

  if ((0,_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(400)) {
    const moveEventObj = (0,_utility_clickDrop__WEBPACK_IMPORTED_MODULE_7__["default"])(
      player1Board,
      player2Board,
      player1,
      player2
    );
    const changePositionObject = (0,_utility_changePosition__WEBPACK_IMPORTED_MODULE_6__["default"])(
      player1Board,
      moveEventObj
    );

    moveEventObj.addEvents(moveEventObj, changePositionObject);
  } else {
    const dragEventObj = (0,_utility_dragDrop__WEBPACK_IMPORTED_MODULE_5__["default"])(
      player1Board,
      player2Board,
      player1,
      player2
    );
    const changePositionObject = (0,_utility_changePosition__WEBPACK_IMPORTED_MODULE_6__["default"])(
      player1Board,
      dragEventObj
    );
    dragEventObj.addEvents(dragEventObj, changePositionObject);
  }
};

const devPreShipPosition = (player1Board) => {
  player1Board.getShips().forEach((ship) => {
    ship.setCoord([0, 0]);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/logic/UI/gameOverUI.js":
/*!************************************!*\
  !*** ./src/logic/UI/gameOverUI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderUI_renderGameOverUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderUI/renderGameOverUi */ "./src/render/renderUI/renderGameOverUi.js");
/* harmony import */ var _utility_gameOverBtnHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/gameOverBtnHandler */ "./src/logic/utility/gameOverBtnHandler.js");



const gameOverUI = (player) => {
  //console.log(player);
  (0,_render_renderUI_renderGameOverUi__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
  (0,_utility_gameOverBtnHandler__WEBPACK_IMPORTED_MODULE_1__.noBtnEventListener)();
  (0,_utility_gameOverBtnHandler__WEBPACK_IMPORTED_MODULE_1__.yesBtnEventListener)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameOverUI);


/***/ }),

/***/ "./src/logic/UI/startUI.js":
/*!*********************************!*\
  !*** ./src/logic/UI/startUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderStartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderStartPage */ "./src/render/renderStartPage.js");


const startUI = () => {
  (0,_render_renderStartPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startUI);


/***/ }),

/***/ "./src/logic/gameBoard/gameBoard.js":
/*!******************************************!*\
  !*** ./src/logic/gameBoard/gameBoard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/logic/ship/ship.js");


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
  const carrier = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("carrier" + `${id.id}`, 5);
  const battleShip = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("battleShip" + `${id.id}`, 4);
  const cruiser = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("reaper" + `${id.id}`, 3);
  const submarine = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("submarine" + `${id.id}`, 3);
  const destroyer = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("destroyer" + `${id.id}`, 2);
  const scout = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("fishingBoat" + `${id.id}`, 2);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);


/***/ }),

/***/ "./src/logic/playRound/playRound.js":
/*!******************************************!*\
  !*** ./src/logic/playRound/playRound.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_cellRecieveAttack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/cellRecieveAttack */ "./src/logic/utility/cellRecieveAttack.js");


const playRound = (player1Board, player2Board, player1, player2) => {
  const player2Cells = document.querySelectorAll(".container-player2 .cell");
  player2Cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const player1Attack = (0,_utility_cellRecieveAttack__WEBPACK_IMPORTED_MODULE_0__["default"])(player2Board, player1, e);
      if (player1Attack) (0,_utility_cellRecieveAttack__WEBPACK_IMPORTED_MODULE_0__["default"])(player1Board, player2);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playRound);


/***/ }),

/***/ "./src/logic/player/computer/computer.js":
/*!***********************************************!*\
  !*** ./src/logic/player/computer/computer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computer);


/***/ }),

/***/ "./src/logic/player/computer/player.js":
/*!*********************************************!*\
  !*** ./src/logic/player/computer/player.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const player = (name) => {
  const makeMove = (board, coord) => {
    if (board.checkCellAttacked(coord) === false) {
      return board.receiveAttack(coord);
    }
  };
  return { name, makeMove };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/logic/ship/ship.js":
/*!********************************!*\
  !*** ./src/logic/ship/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (name, length, position = "horizontal", coord = null) => {
  let timesHit = 0;
  const hit = () => {
    timesHit++;
  };
  const getTimesHit = () => {
    return timesHit;
  };
  const isSunk = () => {
    return length === timesHit ? true : false;
  };
  const getLength = () => {
    return length;
  };
  const getName = () => {
    return name;
  };
  const getPosition = () => {
    return position;
  };
  const getCoord = () => {
    return coord;
  };
  const setCoord = (coordination) => {
    coord = coordination;
  };
  const changePosition = () => {
    if (position === "horizontal") position = "vertical";
    else position = "horizontal";
  };

  return {
    getName,
    getLength,
    hit,
    getTimesHit,
    isSunk,
    getPosition,
    changePosition,
    getCoord,
    setCoord,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


/***/ }),

/***/ "./src/logic/utility/cellRecieveAttack.js":
/*!************************************************!*\
  !*** ./src/logic/utility/cellRecieveAttack.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_gameOverUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/gameOverUI */ "./src/logic/UI/gameOverUI.js");

const cellRecieveAttack = (playerBoard, player, e) => {
  // console.log(
  //   playerBoard.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
  // );
  if (e) {
    if (e.target.textContent === "") {
      const result = player.makeMove(
        playerBoard,
        playerBoard.alphaNumCoordToNumCoord(e.target.dataset.alphanumcoord)
      );
      // console.log(result);
      if (result) {
        if (result.shipSunk)
          console.log(`${player.name} sank a ${result.ship.getName()}`);
        if (result.sunkAllShips) {
          console.log(`${player.name} sank all ships! game over!`);
          (0,_UI_gameOverUI__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
        }

        e.target.innerHTML = "H";
        e.target.style.backgroundColor = "red";
      } else e.target.innerHTML += "X";
      playerBoard.printBoard();
      return true;
    } else return false;
  } else {
    const result = player.makeMove(playerBoard);
    const frontPlayerCell = document.querySelector(
      `.container-player1 [data-alphanumcoord='${playerBoard.numCoordToAlphaNumCoord(
        player.getCoordToAttack()
      )}']`
    );
    //console.log(frontPlayerCell);
    if (result) {
      if (result.shipSunk)
        console.log(`${player.name} sank a ${result.ship.getName()}`);
      if (result.sunkAllShips) {
        console.log(`${player.name} sank all ships Game Over!`);
        (0,_UI_gameOverUI__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
      }

      frontPlayerCell.innerHTML = "H";
      frontPlayerCell.style.backgroundColor = "red";
    } else frontPlayerCell.innerHTML += "X";
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cellRecieveAttack);


/***/ }),

/***/ "./src/logic/utility/changePosition.js":
/*!*********************************************!*\
  !*** ./src/logic/utility/changePosition.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderUI_renderShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderUI/renderShip */ "./src/render/renderUI/renderShip.js");
/* harmony import */ var _positionUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positionUtility */ "./src/logic/utility/positionUtility.js");



const changePositionListener = (board, moveEventObject) => {
  const shipSubsets = document.querySelectorAll(".shipSubset");
  const changePositionFuncHolder = (e) => {
    changePosition(board, e, moveEventObject);
  };
  const addEvents = (() => {
    shipSubsets.forEach((shipSubset) => {
      shipSubset.addEventListener("click", changePositionFuncHolder);
    });
  })();
  const removeEvents = () => {
    shipSubsets.forEach((shipSubset) => {
      shipSubset.removeEventListener("click", changePositionFuncHolder);
    });
  };
  return { removeEvents };
};
const changePosition = (board, e, moveEventObject) => {
  const shipContainer = e.target.parentNode.parentNode;
  //console.log(e.target.parentNode.parentNode);
  if (shipContainer.classList.contains("dock")) {
    // const ship = board.findShip(e.target.parentNode.id);
    // ship.changePosition();
    // e.target.parentNode.remove();
    // const newShip = renderShip(ship);
    // shipContainer.appendChild(newShip);
    // moveEventObject.recallDragEvents();
    // newShip.childNodes.forEach((child) => {
    //   child.addEventListener("click", (event) => {
    //     changePosition(board, event, moveEventObject);
    //   });
    // });
  }
  if (shipContainer.classList.contains("cell")) {
    const ship = board.findShip(e.target.parentNode.id);
    board.turnShip(ship.getName());
    board.printBoard();
    const newShip = (0,_render_renderUI_renderShip__WEBPACK_IMPORTED_MODULE_0__["default"])(ship);
    if ((0,_positionUtility__WEBPACK_IMPORTED_MODULE_1__["default"])().checkBoundary(shipContainer, newShip)) {
      if (
        (0,_positionUtility__WEBPACK_IMPORTED_MODULE_1__["default"])().checkCellAvailability(shipContainer, newShip, true)
      ) {
        (0,_positionUtility__WEBPACK_IMPORTED_MODULE_1__["default"])().enableCell(shipContainer, e.target.parentNode);
        e.target.parentNode.remove();
        shipContainer.appendChild(newShip);
        (0,_positionUtility__WEBPACK_IMPORTED_MODULE_1__["default"])().disableCell(shipContainer, newShip);
      }
    }
    //console.log(moveEventObject);
    moveEventObject.recallDragEvents();
    moveEventObject.setSelected(newShip);

    newShip.childNodes.forEach((child) => {
      child.addEventListener("click", (event) => {
        changePosition(board, event, moveEventObject);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePositionListener);


/***/ }),

/***/ "./src/logic/utility/clickDrop.js":
/*!****************************************!*\
  !*** ./src/logic/utility/clickDrop.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _positionUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionUtility */ "./src/logic/utility/positionUtility.js");
/* harmony import */ var _gameStartBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameStartBtn */ "./src/logic/utility/gameStartBtn.js");



const clickDrop = (player1Board, player2Board, player1, player2) => {
  let selected = null;
  let shipSubset = null;
  let moveEventObj;
  let changePositionObj;
  const cells = document.querySelectorAll(".cell");

  const selectShip = (e) => {
    if (selected && e.target.parentNode !== selected) {
      e.stopPropagation();
      return;
    }
    if (e.target.classList.contains("shipSubset")) {
      e.stopPropagation();
      shipSubset = e.target.dataset.subset;
      selected = e.target.parentNode;
      console.log(e.target);
      console.log(selected.parentNode);
    }
  };
  const positionShip = (e) => {
    if (selected) {
      console.log(e.target);
      if ((0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().checkBoundary(e.target, selected)) {
        if ((0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().checkCellAvailability(e.target, selected)) {
          if (e.target.classList.contains("droppable")) {
            let realCellToAppend;
            if (selected.dataset.position === "horizontal") {
              realCellToAppend = document.querySelector(
                `[data-column="${
                  e.target.dataset.column - (shipSubset - 1)
                }"][data-row="${e.target.dataset.row}"]`
              );
            } else {
              const newRow =
                e.target.dataset.row.charCodeAt(0) - (shipSubset - 1);
              realCellToAppend = document.querySelector(
                `[data-column="${
                  e.target.dataset.column
                }"][data-row="${String.fromCharCode(newRow)}"]`
              );
            }
            if (selected.parentNode.classList.contains("cell"))
              (0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().enableCell(selected.parentNode, selected);

            selected.parentNode.removeChild(selected);
            realCellToAppend.appendChild(selected);

            player1Board.placeShip(
              player1Board.findShip(selected.id),
              realCellToAppend.dataset.alphanumcoord
            );
            player1Board.printBoard();
            (0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().disableCell(realCellToAppend, selected);
            selected = null;
            if (player1Board.allShipsOnBoard() == true) {
              console.log("allShipOnBoard");
              (0,_gameStartBtn__WEBPACK_IMPORTED_MODULE_1__["default"])(player1Board, player2Board, player1, player2);
            }
          }
        }
      }
    }
  };

  const addEvents = (moveEventObject, changePositionObject) => {
    const ships = document.querySelectorAll(".ship");
    moveEventObj = moveEventObject;
    changePositionObj = changePositionObject;
    ships.forEach((ship) => {
      ship.addEventListener("click", selectShip);
    });
    cells.forEach((cell) => {
      cell.addEventListener("click", positionShip);
    });
  };

  const removeEvents = () => {
    const ships = document.querySelectorAll(".ship");
    ships.forEach((ship) => {
      ship.removeEventListener("click", selectShip);
    });
    cells.forEach((cell) => {
      cell.removeEventListener("click", positionShip);
    });
  };
  const recallDragEvents = () => {
    removeEvents();
    addEvents();
  };

  const setSelected = (newShip) => {
    selected = newShip;
  };

  const getSelected = () => {
    return selected;
  };

  return { recallDragEvents, addEvents, setSelected, getSelected };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickDrop);


/***/ }),

/***/ "./src/logic/utility/dragDrop.js":
/*!***************************************!*\
  !*** ./src/logic/utility/dragDrop.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _positionUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionUtility */ "./src/logic/utility/positionUtility.js");
/* harmony import */ var _gameStartBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameStartBtn */ "./src/logic/utility/gameStartBtn.js");



const dragEvent = (player1Board, player2Board, player1, player2) => {
  let dragged = null;
  let shipSubset = null;
  let dragEventObj;
  let changePositionObj;
  const cells = document.querySelectorAll(".cell");

  const mouseDownEvent = (e) => {
    if (e.target.classList.contains("shipSubset")) {
      shipSubset = e.target.dataset.subset;
      console.log(e.target);
    }
  };

  const dragstartEvent = (e) => {
    console.log("dragstarting");
    console.log(e.target);
    if (e.target.classList.contains("ship")) {
      if (e.target.parentNode.classList.contains("cell"))
        (0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().enableCell(e.target.parentNode, e.target);
      dragged = e.target;
    }
  };

  const dragendEvent = (e) => {
    return "drag ending";
  };
  const dragoverEvent = (e) => {
    return e.preventDefault();
  };
  const dropEvent = (e) => {
    e.preventDefault();
    console.log(e.target);
    if ((0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().checkBoundary(e.target, dragged)) {
      if ((0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().checkCellAvailability(e.target, dragged)) {
        if (e.target.classList.contains("droppable")) {
          let realCellToAppend;
          if (dragged.dataset.position === "horizontal") {
            realCellToAppend = document.querySelector(
              `[data-column="${
                e.target.dataset.column - (shipSubset - 1)
              }"][data-row="${e.target.dataset.row}"]`
            );
          } else {
            const newRow =
              e.target.dataset.row.charCodeAt(0) - (shipSubset - 1);
            realCellToAppend = document.querySelector(
              `[data-column="${
                e.target.dataset.column
              }"][data-row="${String.fromCharCode(newRow)}"]`
            );
          }
          dragged.parentNode.removeChild(dragged);
          realCellToAppend.appendChild(dragged);

          player1Board.placeShip(
            player1Board.findShip(dragged.id),
            realCellToAppend.dataset.alphanumcoord
          );
          player1Board.printBoard();
          (0,_positionUtility__WEBPACK_IMPORTED_MODULE_0__["default"])().disableCell(realCellToAppend, dragged);
          if (player1Board.allShipsOnBoard() == true) {
            console.log("allShipOnBoard");
            (0,_gameStartBtn__WEBPACK_IMPORTED_MODULE_1__["default"])(
              player1Board,
              player2Board,
              dragEventObj,
              changePositionObj,
              player1,
              player2
            );
          }
        }
      }
    }
  };
  const removeEvents = () => {
    console.log("removing events..");
    const ships = document.querySelectorAll(".ship");
    ships.forEach((ship) => {
      ship.removeEventListener("mousedown", mouseDownEvent);

      ship.removeEventListener("dragstart", dragstartEvent);

      ship.removeEventListener("dragend", dragendEvent);
    });

    cells.forEach((cell) => {
      cell.removeEventListener("dragover", dragoverEvent);
    });
    cells.forEach((cell) => {
      cell.removeEventListener("drop", dropEvent);
    });
  };
  const addEvents = (dragEventObject, changePositionObject) => {
    const ships = document.querySelectorAll(".ship");
    dragEventObj = dragEventObject;
    changePositionObj = changePositionObject;
    console.log("addingEvents...");
    ships.forEach((ship) => {
      ship.addEventListener("mousedown", mouseDownEvent);

      ship.addEventListener("dragstart", dragstartEvent);

      ship.addEventListener("dragend", dragendEvent);
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragover", dragoverEvent);
    });
    cells.forEach((cell) => {
      cell.addEventListener("drop", dropEvent);
    });
  };
  const recallDragEvents = () => {
    removeEvents();
    addEvents();
  };

  return { addEvents, recallDragEvents, removeEvents };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragEvent);


/***/ }),

/***/ "./src/logic/utility/gameOverBtnHandler.js":
/*!*************************************************!*\
  !*** ./src/logic/utility/gameOverBtnHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noBtnEventListener": () => (/* binding */ noBtnEventListener),
/* harmony export */   "yesBtnEventListener": () => (/* binding */ yesBtnEventListener)
/* harmony export */ });
/* harmony import */ var _render_renderStartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderStartPage */ "./src/render/renderStartPage.js");


const yesBtnEventListener = () => {
  const yesBtn = document.querySelector(".yesBtn");
  yesBtn.addEventListener("click", () => {
    document.querySelector(".container-main").textContent = "";
    document.querySelector(".gameTitle").remove();
    (0,_render_renderStartPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    yesBtn.parentNode.parentNode.parentNode.remove();
  });
};
const noBtnEventListener = () => {
  const noBtn = document.querySelector(".noBtn");

  noBtn.addEventListener("click", () => {
    noBtn.parentNode.parentNode.innerHTML =
      "<div class='finalMsg'>GAME OVER</div>";
  });
};




/***/ }),

/***/ "./src/logic/utility/gameStartBtn.js":
/*!*******************************************!*\
  !*** ./src/logic/utility/gameStartBtn.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderUI_renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderUI/renderBoard */ "./src/render/renderUI/renderBoard.js");
/* harmony import */ var _render_renderUI_renderPlayerSides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderUI/renderPlayerSides */ "./src/render/renderUI/renderPlayerSides.js");
/* harmony import */ var _playRound_playRound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playRound/playRound.js */ "./src/logic/playRound/playRound.js");
/* harmony import */ var _render_renderUI_renderGameStartBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/renderUI/renderGameStartBtn */ "./src/render/renderUI/renderGameStartBtn.js");





const gameStartBtnEvent = (player1Board, player2Board, player1, player2) => {
  (0,_render_renderUI_renderGameStartBtn__WEBPACK_IMPORTED_MODULE_3__["default"])();

  document.querySelector(".gameStartBtn").addEventListener("click", () => {
    document.querySelector(".container-port").remove();
    player2Board.autoPcBoard();
    (0,_render_renderUI_renderPlayerSides__WEBPACK_IMPORTED_MODULE_1__.renderPlayer2Side)(player2Board);
    // console.log(dragEventObject);
    // //dragEventObject.removeEvents();

    //changePositionObject.removeEvents();
    (0,_playRound_playRound_js__WEBPACK_IMPORTED_MODULE_2__["default"])(player1Board, player2Board, player1, player2);
    (0,_render_renderUI_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderShipsToBoard)(player1Board);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameStartBtnEvent);


/***/ }),

/***/ "./src/logic/utility/mobileCheck.js":
/*!******************************************!*\
  !*** ./src/logic/utility/mobileCheck.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mobileCheck = (dimension) => {
  if (window.innerWidth <= dimension) return true;
  else return false;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileCheck);


/***/ }),

/***/ "./src/logic/utility/positionUtility.js":
/*!**********************************************!*\
  !*** ./src/logic/utility/positionUtility.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const positionUtility = () => {
  const disableCell = (startingCell, targetShip) => {
    if (targetShip.dataset.position === "horizontal") {
      const disableFrom = startingCell.dataset.column;
      const disableTo =
        parseInt(startingCell.dataset.column) +
        parseInt(targetShip.dataset.length);

      for (let i = disableFrom; i < disableTo; i++) {
        document.querySelector(
          `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
        ).dataset.available = false;
      }
    }

    if (targetShip.dataset.position === "vertical") {
      const disableFrom = startingCell.dataset.row.charCodeAt(0);
      const disableTo = disableFrom + parseInt(targetShip.dataset.length);

      for (let i = disableFrom; i < disableTo; i++) {
        document.querySelector(
          `[data-column="${
            startingCell.dataset.column
          }"][data-row="${String.fromCharCode(i)}"]`
        ).dataset.available = false;
      }
    }
  };

  const enableCell = (startingCell, targetShip) => {
    console.log("enabling Cell....");
    if (targetShip.dataset.position === "horizontal") {
      const enableFrom = startingCell.dataset.column;
      const enableTo =
        parseInt(startingCell.dataset.column) +
        parseInt(targetShip.dataset.length);

      for (let i = enableFrom; i < enableTo; i++) {
        document.querySelector(
          `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
        ).dataset.available = true;
      }
    }

    if (targetShip.dataset.position === "vertical") {
      const disableFrom = startingCell.dataset.row.charCodeAt(0);
      const disableTo = disableFrom + parseInt(targetShip.dataset.length);

      for (let i = disableFrom; i < disableTo; i++) {
        document.querySelector(
          `[data-column="${
            startingCell.dataset.column
          }"][data-row="${String.fromCharCode(i)}"]`
        ).dataset.available = true;
      }
    }
  };

  const checkCellAvailability = (startingCell, targetShip, positionChange) => {
    if (startingCell.className === "shipSubset") {
      startingCell = startingCell.parentNode.parentNode;
    }
    if (targetShip.dataset.position === "horizontal") {
      let checkFrom;
      if (positionChange === true) {
        checkFrom = startingCell.dataset.column + 1;
      } else checkFrom = startingCell.dataset.column;
      const checkTo =
        parseInt(startingCell.dataset.column) +
        parseInt(targetShip.dataset.length);

      for (let i = checkFrom; i < checkTo; i++) {
        if (
          document.querySelector(
            `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
          ).dataset.available === "false"
        ) {
          console.log("cell not available choose another");
          return false;
        }
      }
      return true;
    }
    if (targetShip.dataset.position === "vertical") {
      let checkFrom;
      if (positionChange === true)
        checkFrom = startingCell.dataset.row.charCodeAt(0) + 1;
      else checkFrom = startingCell.dataset.row.charCodeAt(0);
      const checkTo = checkFrom + parseInt(targetShip.dataset.length) - 1;

      for (let i = checkFrom; i < checkTo; i++) {
        if (
          document.querySelector(
            `[data-column="${
              startingCell.dataset.column
            }"][data-row="${String.fromCharCode(i)}"]`
          ).dataset.available === "false"
        ) {
          console.log("cell not available choose another");
          return false;
        }
      }
      return true;
    }
  };

  const checkBoundary = (startingCell, targetShip) => {
    if (startingCell.className === "shipSubset") {
      startingCell = startingCell.parentNode.parentNode;
    }
    console.log("checkingBoundary..");
    //return console.log(targetShip);
    if (targetShip.dataset.position === "horizontal") {
      const checkFrom = startingCell.dataset.column;
      const checkTo =
        parseInt(startingCell.dataset.column) +
        parseInt(targetShip.dataset.length);

      for (let i = checkFrom; i < checkTo; i++) {
        if (
          document.querySelector(
            `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
          ) === null
        ) {
          console.log("Placement outofbound, pick another spot");
          return false;
        }
      }
      return true;
    }
    if (targetShip.dataset.position === "vertical") {
      const checkFrom = startingCell.dataset.row.charCodeAt(0);
      const checkTo =
        startingCell.dataset.row.charCodeAt(0) +
        parseInt(targetShip.dataset.length);

      for (let i = checkFrom; i < checkTo; i++) {
        if (
          document.querySelector(
            `[data-row="${String.fromCharCode(i)}"][data-column="${
              startingCell.dataset.column
            }"]`
          ) === null
        ) {
          console.log("Placement outofbound, pick another spot");
          return false;
        }
      }
      if (targetShip.dataset.position === "") return "position not set";
      return true;
    }
  };

  return {
    disableCell,
    enableCell,
    checkBoundary,
    checkCellAvailability,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (positionUtility);


/***/ }),

/***/ "./src/logic/utility/shipId.js":
/*!*************************************!*\
  !*** ./src/logic/utility/shipId.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipId = () => {
  return { id: 0 };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipId);


/***/ }),

/***/ "./src/render/renderStartPage.js":
/*!***************************************!*\
  !*** ./src/render/renderStartPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_UI_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/UI/UI.js */ "./src/logic/UI/UI.js");


const renderStart = () => {
  const startPageContainer = document.createElement("div");
  const startPage = document.createElement("div");
  const title = document.createElement("div");
  const prompt = document.createElement("div");
  const input = document.createElement("input");
  const startBtn = document.createElement("button");
  const systemMsg = document.createElement("div");

  title.textContent = "BattleShip";
  prompt.textContent = "Enter your Name";
  startBtn.textContent = "Start";

  startPageContainer.classList.add("container-startPage");
  systemMsg.classList.add("startSystemMsg");
  startBtn.classList.add("startBtn");
  input.classList.add("nameInput");
  title.classList.add("startTitle");
  prompt.classList.add("startPrompt");
  startPage.classList.add("startPage");

  startPage.appendChild(title);
  startPage.appendChild(prompt);
  startPage.appendChild(input);
  startPage.appendChild(startBtn);
  startPage.appendChild(systemMsg);
  startPageContainer.appendChild(startPage);
  document.body.appendChild(startPageContainer);

  startBtn.addEventListener("click", () => {
    if (input.value !== "") {
      startPage.style.display = "none";
      startPageContainer.remove();
      (0,_logic_UI_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
    } else {
      systemMsg.textContent = "Please enter your game name";
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderStart);


/***/ }),

/***/ "./src/render/renderUI/renderBoard.js":
/*!********************************************!*\
  !*** ./src/render/renderUI/renderBoard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderShipsToBoard": () => (/* binding */ renderShipsToBoard)
/* harmony export */ });
const renderBoard = (board) => {
  const containerBoard = document.createElement("div");
  containerBoard.classList.add("container-Board");

  board.getBoard().forEach((row, i) => {
    const r = document.createElement("div");
    r.classList.add("row");
    r.classList.add(`${String.fromCharCode(65 + i)}`);
    row.forEach((column) => {
      const cell = document.createElement("div");
      cell.dataset.column = `${column.column}`;
      cell.dataset.row = `${column.row}`;
      cell.dataset.alphanumcoord = `${column.charCode}`;
      cell.dataset.available = true;
      // cell.classList.add(`${column.column}`);
      // cell.classList.add(`${column.charCode}`);
      cell.classList.add("cell");
      cell.classList.add("droppable");
      r.appendChild(cell);
    });
    containerBoard.appendChild(r);
  });

  return containerBoard;
};

const renderShipsToBoard = (board) => {
  // board.getShips().forEach((ship) => {
  //   const alphaNumCoord = board.numCoordToAlphaNumCoord(ship.getCoord());
  //   //console.log(alphaNumCoord);
  //   const frontCell = document.querySelector(
  //     `.container-player2 [data-alphanumcoord='${alphaNumCoord}']`
  //   );
  //   //[data-alphanumcoord='${alphaNumCoord}']
  //   console.log("renderShipsToBoard");
  //   console.log(frontCell);
  //   //console.log(board.numCoordToAlphaNumCoord(ship.getCoord()));
  //   frontCell.appendChild(renderShip(ship));
  // });
  board.getBoard().forEach((row) => {
    row.forEach((column) => {
      if (column.contains) {
        const frontCell = document.querySelector(
          `.container-player1 [data-alphanumcoord='${column.charCode}']`
        );
        //console.log(frontCell);
        frontCell.style.backgroundColor = "aquamarine";
        frontCell.textContent = `${column.contains
          .getName()
          .charAt(0)
          .toUpperCase()}`;
      }
    });
  });
};




/***/ }),

/***/ "./src/render/renderUI/renderGameOverUi.js":
/*!*************************************************!*\
  !*** ./src/render/renderUI/renderGameOverUi.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderGameOverUI = (player) => {
  const containerGameOverUI = document.createElement("div");
  const gameOverUI = document.createElement("div");
  const header = document.createElement("div");
  const playAgain = document.createElement("div");
  const yesBtn = document.createElement("button");
  const noBtn = document.createElement("button");
  const containerBtn = document.createElement("div");
  const containerText = document.createElement("div");

  containerGameOverUI.classList.add("container-gameOverUI");
  containerText.classList.add("container-text");
  containerBtn.classList.add("container-btn");
  yesBtn.classList.add("yesBtn");
  noBtn.classList.add("noBtn");
  playAgain.classList.add("playAgainTxt");
  gameOverUI.classList.add("gameOverUI");
  header.classList.add("GOUIHeader");
  header.textContent = `'${player.name}' Won!`;
  playAgain.textContent = "Play again?";
  yesBtn.textContent = "Y";
  noBtn.textContent = "N";

  containerText.appendChild(header);
  containerText.appendChild(playAgain);
  containerBtn.appendChild(yesBtn);
  containerBtn.appendChild(noBtn);
  gameOverUI.appendChild(containerText);
  gameOverUI.appendChild(containerBtn);
  containerGameOverUI.appendChild(gameOverUI);
  document.body.appendChild(containerGameOverUI);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameOverUI);


/***/ }),

/***/ "./src/render/renderUI/renderGameStartBtn.js":
/*!***************************************************!*\
  !*** ./src/render/renderUI/renderGameStartBtn.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderGameStartBtn = () => {
  if (document.querySelector(".port")) {
    document.querySelector(".port").remove();

    const gameStartBtn = document.createElement("button");
    gameStartBtn.textContent = "Game Start";
    gameStartBtn.classList.add("gameStartBtn");
    document.querySelector(".container-port").appendChild(gameStartBtn);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameStartBtn);


/***/ }),

/***/ "./src/render/renderUI/renderPlayerSides.js":
/*!**************************************************!*\
  !*** ./src/render/renderUI/renderPlayerSides.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPlayer1Side": () => (/* binding */ renderPlayer1Side),
/* harmony export */   "renderPlayer2Side": () => (/* binding */ renderPlayer2Side)
/* harmony export */ });
/* harmony import */ var _renderBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard.js */ "./src/render/renderUI/renderBoard.js");


const renderPlayer1Side = (board) => {
  const player1Container = document.createElement("div");
  player1Container.classList.add("container-player1");
  player1Container.appendChild((0,_renderBoard_js__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(board));
  document.querySelector(".container-main").appendChild(player1Container);
};

const renderPlayer2Side = (board) => {
  const player2Container = document.createElement("div");
  player2Container.classList.add("container-player2");
  player2Container.appendChild((0,_renderBoard_js__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(board));
  document.querySelector(".container-main").appendChild(player2Container);
  //renderShipsToBoard(board);
};




/***/ }),

/***/ "./src/render/renderUI/renderPort.js":
/*!*******************************************!*\
  !*** ./src/render/renderUI/renderPort.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPort": () => (/* binding */ renderPort)
/* harmony export */ });
/* harmony import */ var _renderShip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderShip.js */ "./src/render/renderUI/renderShip.js");

const renderPort = (ships) => {
  const portContainer = document.createElement("div");
  const port = document.createElement("div");
  const direction = document.createElement("div");
  const containerDirection = document.createElement("div");
  direction.textContent = "Position your ships";
  direction.classList.add("direction");
  containerDirection.classList.add("container-direction");

  portContainer.classList.add("container-port");
  port.classList.add("port");

  containerDirection.appendChild(direction);
  port.appendChild(containerDirection);

  ships.forEach((ship, i) => {
    const shipDock = document.createElement("div");
    const boat = (0,_renderShip_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ship);
    shipDock.classList.add("dock");
    shipDock.appendChild(boat);
    port.appendChild(shipDock);
  });

  portContainer.appendChild(port);
  document.querySelector(".container-main").appendChild(portContainer);
};




/***/ }),

/***/ "./src/render/renderUI/renderShip.js":
/*!*******************************************!*\
  !*** ./src/render/renderUI/renderShip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logic/utility/mobileCheck */ "./src/logic/utility/mobileCheck.js");


const renderShip = (ship) => {
  const boat = document.createElement("div");
  boat.classList.add(`ship`);
  boat.id = `${ship.getName()}`;
  boat.draggable = "true";
  //boat.dataset.name = `${ship.getName()}`;
  if (ship.getPosition() === "horizontal") {
    for (let i = 1; i <= ship.getLength(); i++) {
      const shipSubset = document.createElement("div");
      shipSubset.classList.add("shipSubset");
      shipSubset.dataset.subset = `${i}`;
      //shipSubset.dataset.mainset = `${ship.getName()}`;
      //shipSubset.dataset.mainsetLength = `${ship.getLength()}`;

      if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
        shipSubset.style.cssText = `
        height:25px;
        width:25px;
      `;
      } else {
        shipSubset.style.cssText = `
        height:35px;
        width:36px;
      `;
      }
      window.addEventListener("resize", () => {
        if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
          shipSubset.style.cssText = `
          height:25px;
          width:25px;
        `;
        } else {
          shipSubset.style.cssText = `
          height:35px;
          width:36px;
        `;
        }
      });

      boat.appendChild(shipSubset);
    }

    boat.classList.add("horizontal");

    if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
      boat.style.width = `${ship.getLength() * 26}px`;
      boat.style.height = "25px";
    } else {
      boat.style.width = `${ship.getLength() * 36}px`;
      boat.style.height = "35px";
    }
    window.addEventListener("resize", () => {
      if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
        boat.style.width = `${ship.getLength() * 26}px`;
        boat.style.height = "25px";
      } else {
        boat.style.width = `${ship.getLength() * 36}px`;
        boat.style.height = "35px";
      }
    });

    //boat.innerHTML = `<div class="shipName">${ship.getName()}</div>`;
    //boat.textContent = `${ship.getName()}`;

    boat.dataset.length = `${ship.getLength()}`;
    boat.dataset.position = `${ship.getPosition()}`;
  } else {
    boat.classList.add("vertical");
    for (let i = 1; i <= ship.getLength(); i++) {
      const shipSubset = document.createElement("div");
      shipSubset.classList.add("shipSubset");
      shipSubset.dataset.subset = `${i}`;
      //shipSubset.dataset.mainset = `${ship.getName()}`;
      //shipSubset.dataset.mainsetLength = `${ship.getLength()}`;

      if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
        shipSubset.style.cssText = `
        height:26px;
        width:27px;
      `;
      } else {
        shipSubset.style.cssText = `
        height:36px;
        width:37px;
      `;
      }

      window.addEventListener("resize", () => {
        if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
          shipSubset.style.cssText = `
          height:26px;
          width:27px;
        `;
        } else {
          shipSubset.style.cssText = `
          height:36px;
          width:37px;
        `;
        }
      });

      boat.appendChild(shipSubset);
    }
    if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
      boat.style.height = `${ship.getLength() * 26}px`;
      boat.style.width = "25px";
    } else {
      boat.style.width = "35px";
      boat.style.height = `${ship.getLength() * 36}px`;
    }

    window.addEventListener("resize", () => {
      if ((0,_logic_utility_mobileCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(650)) {
        boat.style.height = `${ship.getLength() * 26}px`;
        boat.style.width = "25px";
      } else {
        boat.style.width = "35px";
        boat.style.height = `${ship.getLength() * 36}px`;
      }
    });

    boat.dataset.position = `${ship.getPosition()}`;
    boat.dataset.length = `${ship.getLength()}`;
  }
  return boat;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderShip);


/***/ }),

/***/ "./src/render/renderUI/renderUI.js":
/*!*****************************************!*\
  !*** ./src/render/renderUI/renderUI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderPlayerSides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPlayerSides */ "./src/render/renderUI/renderPlayerSides.js");
/* harmony import */ var _renderPort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPort.js */ "./src/render/renderUI/renderPort.js");
/* harmony import */ var _logic_utility_dragDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/utility/dragDrop.js */ "./src/logic/utility/dragDrop.js");
/* harmony import */ var _logic_utility_changePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/utility/changePosition */ "./src/logic/utility/changePosition.js");





const renderUI = (player1Board, player2Board, player1, player2) => {
  const gameTitle = document.createElement("div");
  gameTitle.textContent = "BattleShip";
  gameTitle.classList.add("gameTitle");
  document.body.insertBefore(
    gameTitle,
    document.querySelector(".container-main")
  );
  (0,_renderPlayerSides__WEBPACK_IMPORTED_MODULE_0__.renderPlayer1Side)(player1Board);
  (0,_renderPort_js__WEBPACK_IMPORTED_MODULE_1__.renderPort)(player1Board.getShips());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUI);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_UI_startUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/UI/startUI */ "./src/logic/UI/startUI.js");
/* harmony import */ var _logic_UI_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/UI/UI */ "./src/logic/UI/UI.js");



// UI();    //for deving UI

(0,_logic_UI_startUI__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxzRUFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBUSxzRUFBVztBQUNuQiw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNkJBQTZCLHNCQUFzQjtBQUNuRDs7QUFFQTtBQUNBLFVBQVUsc0VBQVc7QUFDckIsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBLFFBQVE7QUFDUjtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQSxLQUFLOztBQUVMLCtCQUErQixtQkFBbUI7QUFDbEQsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakk4QjtBQUNYO0FBQ1c7QUFDZ0I7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUFpQjtBQUNuQixFQUFFLDBEQUFVO0FBQ1o7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDakJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNWOztBQUUvQixZQUFZOztBQUVaLDZEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9VSS9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL1VJL2dhbWVPdmVyVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9VSS9zdGFydFVJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvZ2FtZUJvYXJkL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3BsYXlSb3VuZC9wbGF5Um91bmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9wbGF5ZXIvY29tcHV0ZXIvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9wbGF5ZXIvY29tcHV0ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9jZWxsUmVjaWV2ZUF0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvY2hhbmdlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy91dGlsaXR5L2NsaWNrRHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy91dGlsaXR5L2dhbWVPdmVyQnRuSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvZ2FtZVN0YXJ0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9tb2JpbGVDaGVjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvcG9zaXRpb25VdGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9zaGlwSWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyU3RhcnRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlckdhbWVPdmVyVWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZVN0YXJ0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlclBsYXllclNpZGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlclBvcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuLi9wbGF5ZXIvY29tcHV0ZXIvcGxheWVyXCI7XG5pbXBvcnQgY29tcHV0ZXIgZnJvbSBcIi4uL3BsYXllci9jb21wdXRlci9jb21wdXRlclwiO1xuaW1wb3J0IHJlbmRlclVJIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyVUlcIjtcbmltcG9ydCBzaGlwSWQgZnJvbSBcIi4uL3V0aWxpdHkvc2hpcElkLmpzXCI7XG5pbXBvcnQgZHJhZ0V2ZW50IGZyb20gXCIuLi91dGlsaXR5L2RyYWdEcm9wXCI7XG5pbXBvcnQgY2hhbmdlUG9zaXRpb25MaXN0ZW5lciBmcm9tIFwiLi4vdXRpbGl0eS9jaGFuZ2VQb3NpdGlvblwiO1xuaW1wb3J0IGNsaWNrRHJvcCBmcm9tIFwiLi4vdXRpbGl0eS9jbGlja0Ryb3BcIjtcbmltcG9ydCBtb2JpbGVDaGVjayBmcm9tIFwiLi4vdXRpbGl0eS9tb2JpbGVDaGVja1wiO1xuXG5jb25zdCBVSSA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gIGNvbnN0IGlkID0gc2hpcElkKCk7XG5cbiAgY29uc3QgcGxheWVyMSA9IHBsYXllcihwbGF5ZXJOYW1lKTtcbiAgY29uc3QgcGxheWVyMiA9IGNvbXB1dGVyKCk7XG4gIGNvbnN0IHBsYXllcjFCb2FyZCA9IGdhbWVCb2FyZChpZCk7XG4gIGNvbnN0IHBsYXllcjJCb2FyZCA9IGdhbWVCb2FyZChpZCk7XG5cbiAgcmVuZGVyVUkocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpO1xuXG4gIGlmIChtb2JpbGVDaGVjayg0MDApKSB7XG4gICAgY29uc3QgbW92ZUV2ZW50T2JqID0gY2xpY2tEcm9wKFxuICAgICAgcGxheWVyMUJvYXJkLFxuICAgICAgcGxheWVyMkJvYXJkLFxuICAgICAgcGxheWVyMSxcbiAgICAgIHBsYXllcjJcbiAgICApO1xuICAgIGNvbnN0IGNoYW5nZVBvc2l0aW9uT2JqZWN0ID0gY2hhbmdlUG9zaXRpb25MaXN0ZW5lcihcbiAgICAgIHBsYXllcjFCb2FyZCxcbiAgICAgIG1vdmVFdmVudE9ialxuICAgICk7XG5cbiAgICBtb3ZlRXZlbnRPYmouYWRkRXZlbnRzKG1vdmVFdmVudE9iaiwgY2hhbmdlUG9zaXRpb25PYmplY3QpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRyYWdFdmVudE9iaiA9IGRyYWdFdmVudChcbiAgICAgIHBsYXllcjFCb2FyZCxcbiAgICAgIHBsYXllcjJCb2FyZCxcbiAgICAgIHBsYXllcjEsXG4gICAgICBwbGF5ZXIyXG4gICAgKTtcbiAgICBjb25zdCBjaGFuZ2VQb3NpdGlvbk9iamVjdCA9IGNoYW5nZVBvc2l0aW9uTGlzdGVuZXIoXG4gICAgICBwbGF5ZXIxQm9hcmQsXG4gICAgICBkcmFnRXZlbnRPYmpcbiAgICApO1xuICAgIGRyYWdFdmVudE9iai5hZGRFdmVudHMoZHJhZ0V2ZW50T2JqLCBjaGFuZ2VQb3NpdGlvbk9iamVjdCk7XG4gIH1cbn07XG5cbmNvbnN0IGRldlByZVNoaXBQb3NpdGlvbiA9IChwbGF5ZXIxQm9hcmQpID0+IHtcbiAgcGxheWVyMUJvYXJkLmdldFNoaXBzKCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuc2V0Q29vcmQoWzAsIDBdKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCByZW5kZXJHYW1lT3ZlclVJIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZU92ZXJVaVwiO1xuaW1wb3J0IHtcbiAgbm9CdG5FdmVudExpc3RlbmVyLFxuICB5ZXNCdG5FdmVudExpc3RlbmVyLFxufSBmcm9tIFwiLi4vdXRpbGl0eS9nYW1lT3ZlckJ0bkhhbmRsZXJcIjtcblxuY29uc3QgZ2FtZU92ZXJVSSA9IChwbGF5ZXIpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhwbGF5ZXIpO1xuICByZW5kZXJHYW1lT3ZlclVJKHBsYXllcik7XG4gIG5vQnRuRXZlbnRMaXN0ZW5lcigpO1xuICB5ZXNCdG5FdmVudExpc3RlbmVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lT3ZlclVJO1xuIiwiaW1wb3J0IHJlbmRlclN0YXJ0IGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyU3RhcnRQYWdlXCI7XG5cbmNvbnN0IHN0YXJ0VUkgPSAoKSA9PiB7XG4gIHJlbmRlclN0YXJ0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydFVJO1xuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5jb25zdCBjZWxsID0gKHJvdywgY29sdW1uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm93LFxuICAgIGNvbHVtbixcbiAgICBjaGFyQ29kZTogcm93ICsgXCJcIiArIGNvbHVtbixcbiAgICBjb250YWluczogbnVsbCxcbiAgICBoaXQ6IGZhbHNlLFxuICAgIG1pc3NlZDogZmFsc2UsXG4gIH07XG59O1xuY29uc3QgZ2FtZUJvYXJkID0gKGlkKSA9PiB7XG4gIGlkLmlkKys7XG4gIGNvbnN0IGNhcnJpZXIgPSBzaGlwKFwiY2FycmllclwiICsgYCR7aWQuaWR9YCwgNSk7XG4gIGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKFwiYmF0dGxlU2hpcFwiICsgYCR7aWQuaWR9YCwgNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKFwicmVhcGVyXCIgKyBgJHtpZC5pZH1gLCAzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcChcInN1Ym1hcmluZVwiICsgYCR7aWQuaWR9YCwgMyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoXCJkZXN0cm95ZXJcIiArIGAke2lkLmlkfWAsIDIpO1xuICBjb25zdCBzY291dCA9IHNoaXAoXCJmaXNoaW5nQm9hdFwiICsgYCR7aWQuaWR9YCwgMik7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZVNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyLCBzY291dF07XG4gIC8vY29uc3Qgc2hpcHMgPSBbY2Fycmllcl07XG5cbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgbGV0IG51bWJlck9mU3Vua2VuU2hpcCA9IDA7XG5cbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2goY2VsbChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSksIGogKyAxKSk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGNoZWNrQ2VsbE9wZW4gPSAoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbc3RhcnRpbmdZXVtpXS5jb250YWlucyAhPSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdZOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3N0YXJ0aW5nWF0uY29udGFpbnMgIT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0JvdW5kYXJ5ID0gKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBlbmRQb3NpdGlvbiwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3N0YXJ0aW5nWV1baV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWTsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBjaGVja0NlbGxBdHRhY2tlZCA9IChjb29yZCkgPT4ge1xuICAgIGxldCBbeCwgeV0gPSBjb29yZDtcbiAgICBpZiAoYm9hcmRbeV1beF0uaGl0ID09PSB0cnVlIHx8IGJvYXJkW3ldW3hdLm1pc3NlZCA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydGluZ1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0Q29vcmQoKSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBbcHJldlgsIHByZXZZXSA9IHNoaXAuZ2V0Q29vcmQoKTtcbiAgICAgIHJlbW92ZVNoaXAocHJldlgsIHByZXZZLCBzaGlwKTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhzdGFydGluZ1Bvc2l0aW9uICsgXCJzdGFydGluZ1Bvc2l0aW9uXCIpO1xuICAgIHN0YXJ0aW5nUG9zaXRpb24gPSBhbHBoYU51bUNvb3JkVG9OdW1Db29yZChzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICBjb25zdCBbc3RhcnRpbmdYLCBzdGFydGluZ1ldID0gc3RhcnRpbmdQb3NpdGlvbjtcblxuICAgIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25zdCBlbmRQb3NpdGlvbiA9IHN0YXJ0aW5nWCArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgICAgaWYgKCFjaGVja0JvdW5kYXJ5KHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBlbmRQb3NpdGlvbiwgc2hpcC5nZXRQb3NpdGlvbigpKSlcbiAgICAgICAgcmV0dXJuIFwib3V0IG9mIGJvdW5kc1wiO1xuICAgICAgaWYgKCFjaGVja0NlbGxPcGVuKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBlbmRQb3NpdGlvbiwgc2hpcC5nZXRQb3NpdGlvbigpKSlcbiAgICAgICAgcmV0dXJuIFwicG9zaXRpb24gbm90IG9wZW5cIjtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBib2FyZFtzdGFydGluZ1ldW2ldLmNvbnRhaW5zID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHNoaXAuc2V0Q29vcmQoc3RhcnRpbmdQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gc3RhcnRpbmdZICsgc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgICBpZiAoIWNoZWNrQm91bmRhcnkoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBzaGlwLmdldFBvc2l0aW9uKCkpKVxuICAgICAgICByZXR1cm4gXCJvdXQgb2YgYm91bmRzXCI7XG4gICAgICBpZiAoIWNoZWNrQ2VsbE9wZW4oc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBzaGlwLmdldFBvc2l0aW9uKCkpKVxuICAgICAgICByZXR1cm4gXCJwb3NpdGlvbiBub3Qgb3BlblwiO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWTsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2ldW3N0YXJ0aW5nWF0uY29udGFpbnMgPSBzaGlwO1xuICAgICAgfVxuICAgICAgc2hpcC5zZXRDb29yZChzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFscGhhTnVtQ29vcmRUb051bUNvb3JkID0gKGFscGhhTnVtQ29vcmQpID0+IHtcbiAgICBpZiAodHlwZW9mIGFscGhhTnVtQ29vcmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHggPSBhbHBoYU51bUNvb3JkLm1hdGNoKC9bMC05XSsvZylbMF0gLSAxO1xuICAgICAgY29uc3QgeSA9IGFscGhhTnVtQ29vcmQubWF0Y2goL1thLXpBLVpdL2cpWzBdLmNoYXJDb2RlQXQoMCkgLSA2NTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xuICAgICAgLy8gY29uc29sZS5sb2coeSk7XG5cbiAgICAgIGFscGhhTnVtQ29vcmQgPSBbeCwgeV07XG4gICAgfVxuICAgIHJldHVybiBhbHBoYU51bUNvb3JkO1xuICB9O1xuXG4gIGNvbnN0IG51bUNvb3JkVG9BbHBoYU51bUNvb3JkID0gKG51bUNvb3JkKSA9PiB7XG4gICAgY29uc3QgeCA9IG51bUNvb3JkWzBdICsgMTtcbiAgICBjb25zdCB5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShudW1Db29yZFsxXSArIDY1KTtcbiAgICByZXR1cm4geSArIHg7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGlvbikgPT4ge1xuICAgIGxldCBbeCwgeV0gPSBjb29yZGluYXRpb247XG4gICAgaWYgKGJvYXJkW3ldW3hdLmNvbnRhaW5zID09IG51bGwpIHtcbiAgICAgIGJvYXJkW3ldW3hdLm1pc3NlZCA9IHRydWU7XG4gICAgICAvL3JldHVybiBgeW91J3ZlIG1pc3NlZCBhdCBwb3NpdGlvbiBbJHtjb29yZGluYXRpb259XWA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFt5XVt4XS5jb250YWlucztcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBib2FyZFt5XVt4XS5oaXQgPSB0cnVlO1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbnVtYmVyT2ZTdW5rZW5TaGlwKys7XG4gICAgICAgIGlmIChudW1iZXJPZlN1bmtlblNoaXAgPT09IDYpXG4gICAgICAgICAgLy8gcmV0dXJuIGBcbiAgICAgICAgICAvLyBZb3UndmUgaGl0ICR7c2hpcC5nZXROYW1lKCl9IGF0IHBvc2l0aW9uIFske2Nvb3JkaW5hdGlvbn1dXG4gICAgICAgICAgLy8geW91J3ZlIHN1bmsgYSAke3NoaXAuZ2V0TmFtZSgpfSFcbiAgICAgICAgICAvLyBZb3UndmUgc3Vua2VuIGFsbCB0aGUgc2hpcHNgO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwSGl0OiB0cnVlLFxuICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgIHNoaXBTdW5rOiB0cnVlLFxuICAgICAgICAgICAgc3Vua0FsbFNoaXBzOiB0cnVlLFxuICAgICAgICAgICAgY29vcmRpbmF0aW9uOiBudW1Db29yZFRvQWxwaGFOdW1Db29yZChjb29yZGluYXRpb24pLFxuICAgICAgICAgIH07XG4gICAgICAgIC8vIHJldHVybiBgeW91J3ZlIHN1bmsgYSAke3NoaXAuZ2V0TmFtZSgpfSFgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNoaXBIaXQ6IHRydWUsXG4gICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICBzaGlwU3VuazogdHJ1ZSxcbiAgICAgICAgICBzdW5rQWxsU2hpcHM6IGZhbHNlLFxuICAgICAgICAgIGNvb3JkaW5hdGlvbjogbnVtQ29vcmRUb0FscGhhTnVtQ29vcmQoY29vcmRpbmF0aW9uKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vcmV0dXJuIGBZb3UndmUgaGl0ICR7c2hpcC5nZXROYW1lKCl9IGF0IHBvc2l0aW9uIFske2Nvb3JkaW5hdGlvbn1dYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBIaXQ6IHRydWUsXG4gICAgICAgIHNoaXA6IHNoaXAsXG4gICAgICAgIHNoaXBTdW5rOiBmYWxzZSxcbiAgICAgICAgc3Vua0FsbFNoaXBzOiBmYWxzZSxcbiAgICAgICAgY29vcmRpbmF0aW9uOiBudW1Db29yZFRvQWxwaGFOdW1Db29yZChjb29yZGluYXRpb24pLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHVyblNoaXAgPSAobmFtZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtpXVtqXS5jb250YWlucztcbiAgICAgICAgaWYgKHNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChzaGlwLmdldE5hbWUoKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgbGV0IGVuZFBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nWCwgc3RhcnRpbmdZO1xuICAgICAgICAgICAgbGV0IHRlbXBQb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwiaG9yaXpvbnRhbFwiKSB0ZW1wUG9zaXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICBlbHNlIHRlbXBQb3NpdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gICAgICAgICAgICBpZiAodGVtcFBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICBlbmRQb3NpdGlvbiA9IGogKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgICAgICAgICAgc3RhcnRpbmdYID0gaiArIDE7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nWSA9IGk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRQb3NpdGlvbiA9IGkgKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgICAgICAgICAgc3RhcnRpbmdZID0gaSArIDE7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nWCA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNoZWNrQm91bmRhcnkoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCB0ZW1wUG9zaXRpb24pKVxuICAgICAgICAgICAgICByZXR1cm4gXCJvdXQgb2YgYm91bmRzXCI7XG4gICAgICAgICAgICBpZiAoIWNoZWNrQ2VsbE9wZW4oc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCB0ZW1wUG9zaXRpb24pKVxuICAgICAgICAgICAgICByZXR1cm4gXCJwb3NpdGlvbiBub3Qgb3BlblwiO1xuICAgICAgICAgICAgcmVtb3ZlU2hpcChqLCBpLCBzaGlwKTtcbiAgICAgICAgICAgIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgcGxhY2VTaGlwKHNoaXAsIFtqLCBpXSk7XG4gICAgICAgICAgICByZXR1cm4gXCJzaGlwIHR1cm5lZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0UG9zaXRpb24oKSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gc3RhcnRpbmdYICsgc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRpbmdZXVtpXS5jb250YWlucyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwidmVydGljYWxcIikge1xuICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBzdGFydGluZ1kgKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1k7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBib2FyZFtpXVtzdGFydGluZ1hdLmNvbnRhaW5zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGxldCBwcmludFJvdyA9IFwiXCI7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29udGFpbnMgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb2x1bW4ubWlzc2VkID09PSBmYWxzZSkgcHJpbnRSb3cgKz0gYCBvYDtcbiAgICAgICAgICBlbHNlIHByaW50Um93ICs9IGAgeGA7XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLmhpdCA9PT0gdHJ1ZSkgcHJpbnRSb3cgKz0gYCBIYDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHByaW50Um93ICs9IGAgJHtjb2x1bW4uY29udGFpbnMuZ2V0TmFtZSgpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHByaW50Um93KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH07XG4gIGNvbnN0IGZpbmRTaGlwID0gKHNoaXBOYW1lKSA9PiB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBpZiAoc2hpcC5nZXROYW1lKCkgPT09IHNoaXBOYW1lKSByZXR1cm4gc2hpcDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXV0b1BjQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tVkhQb3NpdGlvbiA9ICh4LCBzaGlwKSA9PiB7XG4gICAgICBpZiAoeCAlIDIgPT09IDApIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcbiAgICB9O1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICByYW5kb21WSFBvc2l0aW9uKHgsIHNoaXApO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgICAgW3gsIHldICtcbiAgICAgICAgLy8gICAgICAgXCIgXCIgK1xuICAgICAgICAvLyAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkgK1xuICAgICAgICAvLyAgICAgICBcIiBcIiArXG4gICAgICAgIC8vICAgICAgIHNoaXAuZ2V0Q29vcmQoKSArXG4gICAgICAgIC8vICAgICAgIFwiIFwiICtcbiAgICAgICAgLy8gICAgICAgc2hpcC5nZXROYW1lKClcbiAgICAgICAgLy8gICApO1xuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgW3gsIHldKTtcbiAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmQgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hpcFBsYWNlZFwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtzaGlwLmdldENvb3JkKCl9YCk7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKHNoaXAuZ2V0Q29vcmQoKSA9PSBudWxsKTtcbiAgICB9XG4gICAgcHJpbnRCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzT25Cb2FyZCA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmdldENvb3JkKCkgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBnZXRCb2FyZCxcbiAgICBjaGVja0NlbGxBdHRhY2tlZCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHR1cm5TaGlwLFxuICAgIHByaW50Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgZmluZFNoaXAsXG4gICAgbnVtQ29vcmRUb0FscGhhTnVtQ29vcmQsXG4gICAgYXV0b1BjQm9hcmQsXG4gICAgYWxwaGFOdW1Db29yZFRvTnVtQ29vcmQsXG4gICAgYWxsU2hpcHNPbkJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiaW1wb3J0IGNlbGxSZWNpZXZlQXR0YWNrIGZyb20gXCIuLi91dGlsaXR5L2NlbGxSZWNpZXZlQXR0YWNrXCI7XG5cbmNvbnN0IHBsYXlSb3VuZCA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICBjb25zdCBwbGF5ZXIyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lci1wbGF5ZXIyIC5jZWxsXCIpO1xuICBwbGF5ZXIyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXIxQXR0YWNrID0gY2VsbFJlY2lldmVBdHRhY2socGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBlKTtcbiAgICAgIGlmIChwbGF5ZXIxQXR0YWNrKSBjZWxsUmVjaWV2ZUF0dGFjayhwbGF5ZXIxQm9hcmQsIHBsYXllcjIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlSb3VuZDtcbiIsImNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICBsZXQgY29vcmRUb0F0dGFjaztcblxuICBjb25zdCBtYWtlTW92ZSA9IChib2FyZCkgPT4ge1xuICAgIGxldCBwYXNzID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb29yZFRvQXR0YWNrID0gW3JhbmRvbVgsIHJhbmRvbVldO1xuXG4gICAgICBpZiAoYm9hcmQuY2hlY2tDZWxsQXR0YWNrZWQoY29vcmRUb0F0dGFjaykgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhc3MgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFRvQXR0YWNrKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChwYXNzID09IGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q29vcmRUb0F0dGFjayA9ICgpID0+IHtcbiAgICByZXR1cm4gY29vcmRUb0F0dGFjaztcbiAgfTtcbiAgcmV0dXJuIHsgbmFtZTogXCJDb21wdXRlclwiLCBtYWtlTW92ZSwgZ2V0Q29vcmRUb0F0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXI7XG4iLCJjb25zdCBwbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBtYWtlTW92ZSA9IChib2FyZCwgY29vcmQpID0+IHtcbiAgICBpZiAoYm9hcmQuY2hlY2tDZWxsQXR0YWNrZWQoY29vcmQpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgbmFtZSwgbWFrZU1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImNvbnN0IHNoaXAgPSAobmFtZSwgbGVuZ3RoLCBwb3NpdGlvbiA9IFwiaG9yaXpvbnRhbFwiLCBjb29yZCA9IG51bGwpID0+IHtcbiAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHRpbWVzSGl0Kys7XG4gIH07XG4gIGNvbnN0IGdldFRpbWVzSGl0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lc0hpdDtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBsZW5ndGggPT09IHRpbWVzSGl0ID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuICBjb25zdCBnZXRDb29yZCA9ICgpID0+IHtcbiAgICByZXR1cm4gY29vcmQ7XG4gIH07XG4gIGNvbnN0IHNldENvb3JkID0gKGNvb3JkaW5hdGlvbikgPT4ge1xuICAgIGNvb3JkID0gY29vcmRpbmF0aW9uO1xuICB9O1xuICBjb25zdCBjaGFuZ2VQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSBwb3NpdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICBlbHNlIHBvc2l0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldExlbmd0aCxcbiAgICBoaXQsXG4gICAgZ2V0VGltZXNIaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldFBvc2l0aW9uLFxuICAgIGNoYW5nZVBvc2l0aW9uLFxuICAgIGdldENvb3JkLFxuICAgIHNldENvb3JkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsImltcG9ydCBnYW1lT3ZlclVJIGZyb20gXCIuLi9VSS9nYW1lT3ZlclVJXCI7XG5jb25zdCBjZWxsUmVjaWV2ZUF0dGFjayA9IChwbGF5ZXJCb2FyZCwgcGxheWVyLCBlKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgIHBsYXllckJvYXJkLmFscGhhTnVtQ29vcmRUb051bUNvb3JkKGUudGFyZ2V0LmRhdGFzZXQuYWxwaGFudW1jb29yZClcbiAgLy8gKTtcbiAgaWYgKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5tYWtlTW92ZShcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIHBsYXllckJvYXJkLmFscGhhTnVtQ29vcmRUb051bUNvb3JkKGUudGFyZ2V0LmRhdGFzZXQuYWxwaGFudW1jb29yZClcbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnNoaXBTdW5rKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSBzYW5rIGEgJHtyZXN1bHQuc2hpcC5nZXROYW1lKCl9YCk7XG4gICAgICAgIGlmIChyZXN1bHQuc3Vua0FsbFNoaXBzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHNhbmsgYWxsIHNoaXBzISBnYW1lIG92ZXIhYCk7XG4gICAgICAgICAgZ2FtZU92ZXJVSShwbGF5ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJIXCI7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9IGVsc2UgZS50YXJnZXQuaW5uZXJIVE1MICs9IFwiWFwiO1xuICAgICAgcGxheWVyQm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIubWFrZU1vdmUocGxheWVyQm9hcmQpO1xuICAgIGNvbnN0IGZyb250UGxheWVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNvbnRhaW5lci1wbGF5ZXIxIFtkYXRhLWFscGhhbnVtY29vcmQ9JyR7cGxheWVyQm9hcmQubnVtQ29vcmRUb0FscGhhTnVtQ29vcmQoXG4gICAgICAgIHBsYXllci5nZXRDb29yZFRvQXR0YWNrKClcbiAgICAgICl9J11gXG4gICAgKTtcbiAgICAvL2NvbnNvbGUubG9nKGZyb250UGxheWVyQ2VsbCk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKHJlc3VsdC5zaGlwU3VuaylcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHNhbmsgYSAke3Jlc3VsdC5zaGlwLmdldE5hbWUoKX1gKTtcbiAgICAgIGlmIChyZXN1bHQuc3Vua0FsbFNoaXBzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSBzYW5rIGFsbCBzaGlwcyBHYW1lIE92ZXIhYCk7XG4gICAgICAgIGdhbWVPdmVyVUkocGxheWVyKTtcbiAgICAgIH1cblxuICAgICAgZnJvbnRQbGF5ZXJDZWxsLmlubmVySFRNTCA9IFwiSFwiO1xuICAgICAgZnJvbnRQbGF5ZXJDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfSBlbHNlIGZyb250UGxheWVyQ2VsbC5pbm5lckhUTUwgKz0gXCJYXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNlbGxSZWNpZXZlQXR0YWNrO1xuIiwiaW1wb3J0IHJlbmRlclNoaXAgZnJvbSBcIi4uLy4uL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJTaGlwXCI7XG5pbXBvcnQgcG9zaXRpb25VdGlsaXR5IGZyb20gXCIuL3Bvc2l0aW9uVXRpbGl0eVwiO1xuXG5jb25zdCBjaGFuZ2VQb3NpdGlvbkxpc3RlbmVyID0gKGJvYXJkLCBtb3ZlRXZlbnRPYmplY3QpID0+IHtcbiAgY29uc3Qgc2hpcFN1YnNldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBTdWJzZXRcIik7XG4gIGNvbnN0IGNoYW5nZVBvc2l0aW9uRnVuY0hvbGRlciA9IChlKSA9PiB7XG4gICAgY2hhbmdlUG9zaXRpb24oYm9hcmQsIGUsIG1vdmVFdmVudE9iamVjdCk7XG4gIH07XG4gIGNvbnN0IGFkZEV2ZW50cyA9ICgoKSA9PiB7XG4gICAgc2hpcFN1YnNldHMuZm9yRWFjaCgoc2hpcFN1YnNldCkgPT4ge1xuICAgICAgc2hpcFN1YnNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUG9zaXRpb25GdW5jSG9sZGVyKTtcbiAgICB9KTtcbiAgfSkoKTtcbiAgY29uc3QgcmVtb3ZlRXZlbnRzID0gKCkgPT4ge1xuICAgIHNoaXBTdWJzZXRzLmZvckVhY2goKHNoaXBTdWJzZXQpID0+IHtcbiAgICAgIHNoaXBTdWJzZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVBvc2l0aW9uRnVuY0hvbGRlcik7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IHJlbW92ZUV2ZW50cyB9O1xufTtcbmNvbnN0IGNoYW5nZVBvc2l0aW9uID0gKGJvYXJkLCBlLCBtb3ZlRXZlbnRPYmplY3QpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICBpZiAoc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJkb2NrXCIpKSB7XG4gICAgLy8gY29uc3Qgc2hpcCA9IGJvYXJkLmZpbmRTaGlwKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIC8vIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcbiAgICAvLyBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vIGNvbnN0IG5ld1NoaXAgPSByZW5kZXJTaGlwKHNoaXApO1xuICAgIC8vIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gICAgLy8gbW92ZUV2ZW50T2JqZWN0LnJlY2FsbERyYWdFdmVudHMoKTtcbiAgICAvLyBuZXdTaGlwLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAvLyAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgY2hhbmdlUG9zaXRpb24oYm9hcmQsIGV2ZW50LCBtb3ZlRXZlbnRPYmplY3QpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cbiAgaWYgKHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5maW5kU2hpcChlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICBib2FyZC50dXJuU2hpcChzaGlwLmdldE5hbWUoKSk7XG4gICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuICAgIGNvbnN0IG5ld1NoaXAgPSByZW5kZXJTaGlwKHNoaXApO1xuICAgIGlmIChwb3NpdGlvblV0aWxpdHkoKS5jaGVja0JvdW5kYXJ5KHNoaXBDb250YWluZXIsIG5ld1NoaXApKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmNoZWNrQ2VsbEF2YWlsYWJpbGl0eShzaGlwQ29udGFpbmVyLCBuZXdTaGlwLCB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmVuYWJsZUNlbGwoc2hpcENvbnRhaW5lciwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmRpc2FibGVDZWxsKHNoaXBDb250YWluZXIsIG5ld1NoaXApO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKG1vdmVFdmVudE9iamVjdCk7XG4gICAgbW92ZUV2ZW50T2JqZWN0LnJlY2FsbERyYWdFdmVudHMoKTtcbiAgICBtb3ZlRXZlbnRPYmplY3Quc2V0U2VsZWN0ZWQobmV3U2hpcCk7XG5cbiAgICBuZXdTaGlwLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY2hhbmdlUG9zaXRpb24oYm9hcmQsIGV2ZW50LCBtb3ZlRXZlbnRPYmplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZVBvc2l0aW9uTGlzdGVuZXI7XG4iLCJpbXBvcnQgcG9zaXRpb25VdGlsaXR5IGZyb20gXCIuL3Bvc2l0aW9uVXRpbGl0eVwiO1xuaW1wb3J0IGdhbWVTdGFydEJ0bkV2ZW50IGZyb20gXCIuL2dhbWVTdGFydEJ0blwiO1xuXG5jb25zdCBjbGlja0Ryb3AgPSAocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgbGV0IHNoaXBTdWJzZXQgPSBudWxsO1xuICBsZXQgbW92ZUV2ZW50T2JqO1xuICBsZXQgY2hhbmdlUG9zaXRpb25PYmo7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuXG4gIGNvbnN0IHNlbGVjdFNoaXAgPSAoZSkgPT4ge1xuICAgIGlmIChzZWxlY3RlZCAmJiBlLnRhcmdldC5wYXJlbnROb2RlICE9PSBzZWxlY3RlZCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBTdWJzZXRcIikpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzaGlwU3Vic2V0ID0gZS50YXJnZXQuZGF0YXNldC5zdWJzZXQ7XG4gICAgICBzZWxlY3RlZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZC5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBvc2l0aW9uU2hpcCA9IChlKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICBpZiAocG9zaXRpb25VdGlsaXR5KCkuY2hlY2tCb3VuZGFyeShlLnRhcmdldCwgc2VsZWN0ZWQpKSB7XG4gICAgICAgIGlmIChwb3NpdGlvblV0aWxpdHkoKS5jaGVja0NlbGxBdmFpbGFiaWxpdHkoZS50YXJnZXQsIHNlbGVjdGVkKSkge1xuICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wcGFibGVcIikpIHtcbiAgICAgICAgICAgIGxldCByZWFsQ2VsbFRvQXBwZW5kO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmRhdGFzZXQucG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5jb2x1bW4gLSAoc2hpcFN1YnNldCAtIDEpXG4gICAgICAgICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7ZS50YXJnZXQuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID1cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApIC0gKHNoaXBTdWJzZXQgLSAxKTtcbiAgICAgICAgICAgICAgcmVhbENlbGxUb0FwcGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7XG4gICAgICAgICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUobmV3Um93KX1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKVxuICAgICAgICAgICAgICBwb3NpdGlvblV0aWxpdHkoKS5lbmFibGVDZWxsKHNlbGVjdGVkLnBhcmVudE5vZGUsIHNlbGVjdGVkKTtcblxuICAgICAgICAgICAgc2VsZWN0ZWQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxlY3RlZCk7XG4gICAgICAgICAgICByZWFsQ2VsbFRvQXBwZW5kLmFwcGVuZENoaWxkKHNlbGVjdGVkKTtcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgcGxheWVyMUJvYXJkLmZpbmRTaGlwKHNlbGVjdGVkLmlkKSxcbiAgICAgICAgICAgICAgcmVhbENlbGxUb0FwcGVuZC5kYXRhc2V0LmFscGhhbnVtY29vcmRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgICAgICAgcG9zaXRpb25VdGlsaXR5KCkuZGlzYWJsZUNlbGwocmVhbENlbGxUb0FwcGVuZCwgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHBsYXllcjFCb2FyZC5hbGxTaGlwc09uQm9hcmQoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsU2hpcE9uQm9hcmRcIik7XG4gICAgICAgICAgICAgIGdhbWVTdGFydEJ0bkV2ZW50KHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkRXZlbnRzID0gKG1vdmVFdmVudE9iamVjdCwgY2hhbmdlUG9zaXRpb25PYmplY3QpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBtb3ZlRXZlbnRPYmogPSBtb3ZlRXZlbnRPYmplY3Q7XG4gICAgY2hhbmdlUG9zaXRpb25PYmogPSBjaGFuZ2VQb3NpdGlvbk9iamVjdDtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RTaGlwKTtcbiAgICB9KTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3NpdGlvblNoaXApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RTaGlwKTtcbiAgICB9KTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3NpdGlvblNoaXApO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZWNhbGxEcmFnRXZlbnRzID0gKCkgPT4ge1xuICAgIHJlbW92ZUV2ZW50cygpO1xuICAgIGFkZEV2ZW50cygpO1xuICB9O1xuXG4gIGNvbnN0IHNldFNlbGVjdGVkID0gKG5ld1NoaXApID0+IHtcbiAgICBzZWxlY3RlZCA9IG5ld1NoaXA7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9O1xuXG4gIHJldHVybiB7IHJlY2FsbERyYWdFdmVudHMsIGFkZEV2ZW50cywgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja0Ryb3A7XG4iLCJpbXBvcnQgcG9zaXRpb25VdGlsaXR5IGZyb20gXCIuL3Bvc2l0aW9uVXRpbGl0eVwiO1xuaW1wb3J0IGdhbWVTdGFydEJ0bkV2ZW50IGZyb20gXCIuL2dhbWVTdGFydEJ0blwiO1xuXG5jb25zdCBkcmFnRXZlbnQgPSAocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgbGV0IGRyYWdnZWQgPSBudWxsO1xuICBsZXQgc2hpcFN1YnNldCA9IG51bGw7XG4gIGxldCBkcmFnRXZlbnRPYmo7XG4gIGxldCBjaGFuZ2VQb3NpdGlvbk9iajtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG5cbiAgY29uc3QgbW91c2VEb3duRXZlbnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwU3Vic2V0XCIpKSB7XG4gICAgICBzaGlwU3Vic2V0ID0gZS50YXJnZXQuZGF0YXNldC5zdWJzZXQ7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdzdGFydEV2ZW50ID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWdzdGFydGluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcbiAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpXG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmVuYWJsZUNlbGwoZS50YXJnZXQucGFyZW50Tm9kZSwgZS50YXJnZXQpO1xuICAgICAgZHJhZ2dlZCA9IGUudGFyZ2V0O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmFnZW5kRXZlbnQgPSAoZSkgPT4ge1xuICAgIHJldHVybiBcImRyYWcgZW5kaW5nXCI7XG4gIH07XG4gIGNvbnN0IGRyYWdvdmVyRXZlbnQgPSAoZSkgPT4ge1xuICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG4gIGNvbnN0IGRyb3BFdmVudCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBpZiAocG9zaXRpb25VdGlsaXR5KCkuY2hlY2tCb3VuZGFyeShlLnRhcmdldCwgZHJhZ2dlZCkpIHtcbiAgICAgIGlmIChwb3NpdGlvblV0aWxpdHkoKS5jaGVja0NlbGxBdmFpbGFiaWxpdHkoZS50YXJnZXQsIGRyYWdnZWQpKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wcGFibGVcIikpIHtcbiAgICAgICAgICBsZXQgcmVhbENlbGxUb0FwcGVuZDtcbiAgICAgICAgICBpZiAoZHJhZ2dlZC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgcmVhbENlbGxUb0FwcGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uIC0gKHNoaXBTdWJzZXQgLSAxKVxuICAgICAgICAgICAgICB9XCJdW2RhdGEtcm93PVwiJHtlLnRhcmdldC5kYXRhc2V0LnJvd31cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdSb3cgPVxuICAgICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApIC0gKHNoaXBTdWJzZXQgLSAxKTtcbiAgICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgICAgICB9XCJdW2RhdGEtcm93PVwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKG5ld1Jvdyl9XCJdYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xuICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQuYXBwZW5kQ2hpbGQoZHJhZ2dlZCk7XG5cbiAgICAgICAgICBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmZpbmRTaGlwKGRyYWdnZWQuaWQpLFxuICAgICAgICAgICAgcmVhbENlbGxUb0FwcGVuZC5kYXRhc2V0LmFscGhhbnVtY29vcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIHBsYXllcjFCb2FyZC5wcmludEJvYXJkKCk7XG4gICAgICAgICAgcG9zaXRpb25VdGlsaXR5KCkuZGlzYWJsZUNlbGwocmVhbENlbGxUb0FwcGVuZCwgZHJhZ2dlZCk7XG4gICAgICAgICAgaWYgKHBsYXllcjFCb2FyZC5hbGxTaGlwc09uQm9hcmQoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbFNoaXBPbkJvYXJkXCIpO1xuICAgICAgICAgICAgZ2FtZVN0YXJ0QnRuRXZlbnQoXG4gICAgICAgICAgICAgIHBsYXllcjFCb2FyZCxcbiAgICAgICAgICAgICAgcGxheWVyMkJvYXJkLFxuICAgICAgICAgICAgICBkcmFnRXZlbnRPYmosXG4gICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uT2JqLFxuICAgICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgICBwbGF5ZXIyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgZXZlbnRzLi5cIik7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bkV2ZW50KTtcblxuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydEV2ZW50KTtcblxuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnZW5kRXZlbnQpO1xuICAgIH0pO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ292ZXJFdmVudCk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wRXZlbnQpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBhZGRFdmVudHMgPSAoZHJhZ0V2ZW50T2JqZWN0LCBjaGFuZ2VQb3NpdGlvbk9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIGRyYWdFdmVudE9iaiA9IGRyYWdFdmVudE9iamVjdDtcbiAgICBjaGFuZ2VQb3NpdGlvbk9iaiA9IGNoYW5nZVBvc2l0aW9uT2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nRXZlbnRzLi4uXCIpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudCk7XG5cbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRFdmVudCk7XG5cbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ2VuZEV2ZW50KTtcbiAgICB9KTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdvdmVyRXZlbnQpO1xuICAgIH0pO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEV2ZW50KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVjYWxsRHJhZ0V2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVFdmVudHMoKTtcbiAgICBhZGRFdmVudHMoKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRFdmVudHMsIHJlY2FsbERyYWdFdmVudHMsIHJlbW92ZUV2ZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhZ0V2ZW50O1xuIiwiaW1wb3J0IHJlbmRlclN0YXJ0IGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyU3RhcnRQYWdlXCI7XG5cbmNvbnN0IHllc0J0bkV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueWVzQnRuXCIpO1xuICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1tYWluXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVUaXRsZVwiKS5yZW1vdmUoKTtcbiAgICByZW5kZXJTdGFydCgpO1xuICAgIHllc0J0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgfSk7XG59O1xuY29uc3Qgbm9CdG5FdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBub0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm9CdG5cIik7XG5cbiAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub0J0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUuaW5uZXJIVE1MID1cbiAgICAgIFwiPGRpdiBjbGFzcz0nZmluYWxNc2cnPkdBTUUgT1ZFUjwvZGl2PlwiO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHllc0J0bkV2ZW50TGlzdGVuZXIsIG5vQnRuRXZlbnRMaXN0ZW5lciB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyU2hpcHNUb0JvYXJkIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJCb2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVyUGxheWVyMlNpZGUgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL3JlbmRlclVJL3JlbmRlclBsYXllclNpZGVzXCI7XG5pbXBvcnQgcGxheVJvdW5kIGZyb20gXCIuLi9wbGF5Um91bmQvcGxheVJvdW5kLmpzXCI7XG5pbXBvcnQgcmVuZGVyR2FtZVN0YXJ0QnRuIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZVN0YXJ0QnRuXCI7XG5cbmNvbnN0IGdhbWVTdGFydEJ0bkV2ZW50ID0gKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIHJlbmRlckdhbWVTdGFydEJ0bigpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZVN0YXJ0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcG9ydFwiKS5yZW1vdmUoKTtcbiAgICBwbGF5ZXIyQm9hcmQuYXV0b1BjQm9hcmQoKTtcbiAgICByZW5kZXJQbGF5ZXIyU2lkZShwbGF5ZXIyQm9hcmQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRyYWdFdmVudE9iamVjdCk7XG4gICAgLy8gLy9kcmFnRXZlbnRPYmplY3QucmVtb3ZlRXZlbnRzKCk7XG5cbiAgICAvL2NoYW5nZVBvc2l0aW9uT2JqZWN0LnJlbW92ZUV2ZW50cygpO1xuICAgIHBsYXlSb3VuZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMik7XG4gICAgcmVuZGVyU2hpcHNUb0JvYXJkKHBsYXllcjFCb2FyZCk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVTdGFydEJ0bkV2ZW50O1xuIiwiY29uc3QgbW9iaWxlQ2hlY2sgPSAoZGltZW5zaW9uKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBkaW1lbnNpb24pIHJldHVybiB0cnVlO1xuICBlbHNlIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vYmlsZUNoZWNrO1xuIiwiY29uc3QgcG9zaXRpb25VdGlsaXR5ID0gKCkgPT4ge1xuICBjb25zdCBkaXNhYmxlQ2VsbCA9IChzdGFydGluZ0NlbGwsIHRhcmdldFNoaXApID0+IHtcbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgZGlzYWJsZUZyb20gPSBzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW47XG4gICAgICBjb25zdCBkaXNhYmxlVG8gPVxuICAgICAgICBwYXJzZUludChzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW4pICtcbiAgICAgICAgcGFyc2VJbnQodGFyZ2V0U2hpcC5kYXRhc2V0Lmxlbmd0aCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBkaXNhYmxlRnJvbTsgaSA8IGRpc2FibGVUbzsgaSsrKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7aX1cIl1bZGF0YS1yb3c9XCIke3N0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvd31cIl1gXG4gICAgICAgICkuZGF0YXNldC5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQucm93LmNoYXJDb2RlQXQoMCk7XG4gICAgICBjb25zdCBkaXNhYmxlVG8gPSBkaXNhYmxlRnJvbSArIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZGlzYWJsZUZyb207IGkgPCBkaXNhYmxlVG87IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uXG4gICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX1cIl1gXG4gICAgICAgICkuZGF0YXNldC5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZW5hYmxlQ2VsbCA9IChzdGFydGluZ0NlbGwsIHRhcmdldFNoaXApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImVuYWJsaW5nIENlbGwuLi4uXCIpO1xuICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25zdCBlbmFibGVGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgZW5hYmxlVG8gPVxuICAgICAgICBwYXJzZUludChzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW4pICtcbiAgICAgICAgcGFyc2VJbnQodGFyZ2V0U2hpcC5kYXRhc2V0Lmxlbmd0aCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBlbmFibGVGcm9tOyBpIDwgZW5hYmxlVG87IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQucm93LmNoYXJDb2RlQXQoMCk7XG4gICAgICBjb25zdCBkaXNhYmxlVG8gPSBkaXNhYmxlRnJvbSArIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZGlzYWJsZUZyb207IGkgPCBkaXNhYmxlVG87IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uXG4gICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX1cIl1gXG4gICAgICAgICkuZGF0YXNldC5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0NlbGxBdmFpbGFiaWxpdHkgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwLCBwb3NpdGlvbkNoYW5nZSkgPT4ge1xuICAgIGlmIChzdGFydGluZ0NlbGwuY2xhc3NOYW1lID09PSBcInNoaXBTdWJzZXRcIikge1xuICAgICAgc3RhcnRpbmdDZWxsID0gc3RhcnRpbmdDZWxsLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGxldCBjaGVja0Zyb207XG4gICAgICBpZiAocG9zaXRpb25DaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uICsgMTtcbiAgICAgIH0gZWxzZSBjaGVja0Zyb20gPSBzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW47XG4gICAgICBjb25zdCBjaGVja1RvID1cbiAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gY2hlY2tGcm9tOyBpIDwgY2hlY2tUbzsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7aX1cIl1bZGF0YS1yb3c9XCIke3N0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvd31cIl1gXG4gICAgICAgICAgKS5kYXRhc2V0LmF2YWlsYWJsZSA9PT0gXCJmYWxzZVwiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2VsbCBub3QgYXZhaWxhYmxlIGNob29zZSBhbm90aGVyXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IGNoZWNrRnJvbTtcbiAgICAgIGlmIChwb3NpdGlvbkNoYW5nZSA9PT0gdHJ1ZSlcbiAgICAgICAgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQucm93LmNoYXJDb2RlQXQoMCkgKyAxO1xuICAgICAgZWxzZSBjaGVja0Zyb20gPSBzdGFydGluZ0NlbGwuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKTtcbiAgICAgIGNvbnN0IGNoZWNrVG8gPSBjaGVja0Zyb20gKyBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKSAtIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBjaGVja0Zyb207IGkgPCBjaGVja1RvOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgICAgc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uXG4gICAgICAgICAgICB9XCJdW2RhdGEtcm93PVwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfVwiXWBcbiAgICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID09PSBcImZhbHNlXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjZWxsIG5vdCBhdmFpbGFibGUgY2hvb3NlIGFub3RoZXJcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tCb3VuZGFyeSA9IChzdGFydGluZ0NlbGwsIHRhcmdldFNoaXApID0+IHtcbiAgICBpZiAoc3RhcnRpbmdDZWxsLmNsYXNzTmFtZSA9PT0gXCJzaGlwU3Vic2V0XCIpIHtcbiAgICAgIHN0YXJ0aW5nQ2VsbCA9IHN0YXJ0aW5nQ2VsbC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmdCb3VuZGFyeS4uXCIpO1xuICAgIC8vcmV0dXJuIGNvbnNvbGUubG9nKHRhcmdldFNoaXApO1xuICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25zdCBjaGVja0Zyb20gPSBzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW47XG4gICAgICBjb25zdCBjaGVja1RvID1cbiAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gY2hlY2tGcm9tOyBpIDwgY2hlY2tUbzsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7aX1cIl1bZGF0YS1yb3c9XCIke3N0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvd31cIl1gXG4gICAgICAgICAgKSA9PT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYWNlbWVudCBvdXRvZmJvdW5kLCBwaWNrIGFub3RoZXIgc3BvdFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbnN0IGNoZWNrRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgY29uc3QgY2hlY2tUbyA9XG4gICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApICtcbiAgICAgICAgcGFyc2VJbnQodGFyZ2V0U2hpcC5kYXRhc2V0Lmxlbmd0aCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBjaGVja0Zyb207IGkgPCBjaGVja1RvOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtcm93PVwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpfVwiXVtkYXRhLWNvbHVtbj1cIiR7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgICAgfVwiXWBcbiAgICAgICAgICApID09PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxhY2VtZW50IG91dG9mYm91bmQsIHBpY2sgYW5vdGhlciBzcG90XCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJcIikgcmV0dXJuIFwicG9zaXRpb24gbm90IHNldFwiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGlzYWJsZUNlbGwsXG4gICAgZW5hYmxlQ2VsbCxcbiAgICBjaGVja0JvdW5kYXJ5LFxuICAgIGNoZWNrQ2VsbEF2YWlsYWJpbGl0eSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uVXRpbGl0eTtcbiIsImNvbnN0IHNoaXBJZCA9ICgpID0+IHtcbiAgcmV0dXJuIHsgaWQ6IDAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBJZDtcbiIsImltcG9ydCBVSSBmcm9tIFwiLi4vbG9naWMvVUkvVUkuanNcIjtcblxuY29uc3QgcmVuZGVyU3RhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXJ0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN0YXJ0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3Qgc3lzdGVtTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlU2hpcFwiO1xuICBwcm9tcHQudGV4dENvbnRlbnQgPSBcIkVudGVyIHlvdXIgTmFtZVwiO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcblxuICBzdGFydFBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1zdGFydFBhZ2VcIik7XG4gIHN5c3RlbU1zZy5jbGFzc0xpc3QuYWRkKFwic3RhcnRTeXN0ZW1Nc2dcIik7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdGFydEJ0blwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hbWVJbnB1dFwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInN0YXJ0VGl0bGVcIik7XG4gIHByb21wdC5jbGFzc0xpc3QuYWRkKFwic3RhcnRQcm9tcHRcIik7XG4gIHN0YXJ0UGFnZS5jbGFzc0xpc3QuYWRkKFwic3RhcnRQYWdlXCIpO1xuXG4gIHN0YXJ0UGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHN0YXJ0UGFnZS5hcHBlbmRDaGlsZChwcm9tcHQpO1xuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQoc3lzdGVtTXNnKTtcbiAgc3RhcnRQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0UGFnZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRQYWdlQ29udGFpbmVyKTtcblxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgc3RhcnRQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHN0YXJ0UGFnZUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIFVJKGlucHV0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3lzdGVtTXNnLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgeW91ciBnYW1lIG5hbWVcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU3RhcnQ7XG4iLCJjb25zdCByZW5kZXJCb2FyZCA9IChib2FyZCkgPT4ge1xuICBjb25zdCBjb250YWluZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItQm9hcmRcIik7XG5cbiAgYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICBjb25zdCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgci5jbGFzc0xpc3QuYWRkKGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKX1gKTtcbiAgICByb3cuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBgJHtjb2x1bW4uY29sdW1ufWA7XG4gICAgICBjZWxsLmRhdGFzZXQucm93ID0gYCR7Y29sdW1uLnJvd31gO1xuICAgICAgY2VsbC5kYXRhc2V0LmFscGhhbnVtY29vcmQgPSBgJHtjb2x1bW4uY2hhckNvZGV9YDtcbiAgICAgIGNlbGwuZGF0YXNldC5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgLy8gY2VsbC5jbGFzc0xpc3QuYWRkKGAke2NvbHVtbi5jb2x1bW59YCk7XG4gICAgICAvLyBjZWxsLmNsYXNzTGlzdC5hZGQoYCR7Y29sdW1uLmNoYXJDb2RlfWApO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcbiAgICAgIHIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyQm9hcmQuYXBwZW5kQ2hpbGQocik7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXJCb2FyZDtcbn07XG5cbmNvbnN0IHJlbmRlclNoaXBzVG9Cb2FyZCA9IChib2FyZCkgPT4ge1xuICAvLyBib2FyZC5nZXRTaGlwcygpLmZvckVhY2goKHNoaXApID0+IHtcbiAgLy8gICBjb25zdCBhbHBoYU51bUNvb3JkID0gYm9hcmQubnVtQ29vcmRUb0FscGhhTnVtQ29vcmQoc2hpcC5nZXRDb29yZCgpKTtcbiAgLy8gICAvL2NvbnNvbGUubG9nKGFscGhhTnVtQ29vcmQpO1xuICAvLyAgIGNvbnN0IGZyb250Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIC8vICAgICBgLmNvbnRhaW5lci1wbGF5ZXIyIFtkYXRhLWFscGhhbnVtY29vcmQ9JyR7YWxwaGFOdW1Db29yZH0nXWBcbiAgLy8gICApO1xuICAvLyAgIC8vW2RhdGEtYWxwaGFudW1jb29yZD0nJHthbHBoYU51bUNvb3JkfSddXG4gIC8vICAgY29uc29sZS5sb2coXCJyZW5kZXJTaGlwc1RvQm9hcmRcIik7XG4gIC8vICAgY29uc29sZS5sb2coZnJvbnRDZWxsKTtcbiAgLy8gICAvL2NvbnNvbGUubG9nKGJvYXJkLm51bUNvb3JkVG9BbHBoYU51bUNvb3JkKHNoaXAuZ2V0Q29vcmQoKSkpO1xuICAvLyAgIGZyb250Q2VsbC5hcHBlbmRDaGlsZChyZW5kZXJTaGlwKHNoaXApKTtcbiAgLy8gfSk7XG4gIGJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgaWYgKGNvbHVtbi5jb250YWlucykge1xuICAgICAgICBjb25zdCBmcm9udENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuY29udGFpbmVyLXBsYXllcjEgW2RhdGEtYWxwaGFudW1jb29yZD0nJHtjb2x1bW4uY2hhckNvZGV9J11gXG4gICAgICAgICk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZnJvbnRDZWxsKTtcbiAgICAgICAgZnJvbnRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYXF1YW1hcmluZVwiO1xuICAgICAgICBmcm9udENlbGwudGV4dENvbnRlbnQgPSBgJHtjb2x1bW4uY29udGFpbnNcbiAgICAgICAgICAuZ2V0TmFtZSgpXG4gICAgICAgICAgLmNoYXJBdCgwKVxuICAgICAgICAgIC50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQm9hcmQsIHJlbmRlclNoaXBzVG9Cb2FyZCB9O1xuIiwiY29uc3QgcmVuZGVyR2FtZU92ZXJVSSA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyR2FtZU92ZXJVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGdhbWVPdmVyVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBub0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNvbnRhaW5lckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhaW5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhaW5lckdhbWVPdmVyVUkuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1nYW1lT3ZlclVJXCIpO1xuICBjb250YWluZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItdGV4dFwiKTtcbiAgY29udGFpbmVyQnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItYnRuXCIpO1xuICB5ZXNCdG4uY2xhc3NMaXN0LmFkZChcInllc0J0blwiKTtcbiAgbm9CdG4uY2xhc3NMaXN0LmFkZChcIm5vQnRuXCIpO1xuICBwbGF5QWdhaW4uY2xhc3NMaXN0LmFkZChcInBsYXlBZ2FpblR4dFwiKTtcbiAgZ2FtZU92ZXJVSS5jbGFzc0xpc3QuYWRkKFwiZ2FtZU92ZXJVSVwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJHT1VJSGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJyR7cGxheWVyLm5hbWV9JyBXb24hYDtcbiAgcGxheUFnYWluLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluP1wiO1xuICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIllcIjtcbiAgbm9CdG4udGV4dENvbnRlbnQgPSBcIk5cIjtcblxuICBjb250YWluZXJUZXh0LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lclRleHQuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcbiAgY29udGFpbmVyQnRuLmFwcGVuZENoaWxkKHllc0J0bik7XG4gIGNvbnRhaW5lckJ0bi5hcHBlbmRDaGlsZChub0J0bik7XG4gIGdhbWVPdmVyVUkuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGV4dCk7XG4gIGdhbWVPdmVyVUkuYXBwZW5kQ2hpbGQoY29udGFpbmVyQnRuKTtcbiAgY29udGFpbmVyR2FtZU92ZXJVSS5hcHBlbmRDaGlsZChnYW1lT3ZlclVJKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJHYW1lT3ZlclVJKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVPdmVyVUk7XG4iLCJjb25zdCByZW5kZXJHYW1lU3RhcnRCdG4gPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGdhbWVTdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiR2FtZSBTdGFydFwiO1xuICAgIGdhbWVTdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2FtZVN0YXJ0QnRuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXBvcnRcIikuYXBwZW5kQ2hpbGQoZ2FtZVN0YXJ0QnRuKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZVN0YXJ0QnRuO1xuIiwiaW1wb3J0IHsgcmVuZGVyQm9hcmQsIHJlbmRlclNoaXBzVG9Cb2FyZCB9IGZyb20gXCIuL3JlbmRlckJvYXJkLmpzXCI7XG5cbmNvbnN0IHJlbmRlclBsYXllcjFTaWRlID0gKGJvYXJkKSA9PiB7XG4gIGNvbnN0IHBsYXllcjFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXIxQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItcGxheWVyMVwiKTtcbiAgcGxheWVyMUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZChib2FyZCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1tYWluXCIpLmFwcGVuZENoaWxkKHBsYXllcjFDb250YWluZXIpO1xufTtcblxuY29uc3QgcmVuZGVyUGxheWVyMlNpZGUgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgcGxheWVyMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllcjJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1wbGF5ZXIyXCIpO1xuICBwbGF5ZXIyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKGJvYXJkKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW1haW5cIikuYXBwZW5kQ2hpbGQocGxheWVyMkNvbnRhaW5lcik7XG4gIC8vcmVuZGVyU2hpcHNUb0JvYXJkKGJvYXJkKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlclBsYXllcjFTaWRlLCByZW5kZXJQbGF5ZXIyU2lkZSB9O1xuIiwiaW1wb3J0IHJlbmRlclNoaXAgZnJvbSBcIi4vcmVuZGVyU2hpcC5qc1wiO1xuY29uc3QgcmVuZGVyUG9ydCA9IChzaGlwcykgPT4ge1xuICBjb25zdCBwb3J0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhaW5lckRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpcmVjdGlvbi50ZXh0Q29udGVudCA9IFwiUG9zaXRpb24geW91ciBzaGlwc1wiO1xuICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvblwiKTtcbiAgY29udGFpbmVyRGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItZGlyZWN0aW9uXCIpO1xuXG4gIHBvcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1wb3J0XCIpO1xuICBwb3J0LmNsYXNzTGlzdC5hZGQoXCJwb3J0XCIpO1xuXG4gIGNvbnRhaW5lckRpcmVjdGlvbi5hcHBlbmRDaGlsZChkaXJlY3Rpb24pO1xuICBwb3J0LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpcmVjdGlvbik7XG5cbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCwgaSkgPT4ge1xuICAgIGNvbnN0IHNoaXBEb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib2F0ID0gcmVuZGVyU2hpcChzaGlwKTtcbiAgICBzaGlwRG9jay5jbGFzc0xpc3QuYWRkKFwiZG9ja1wiKTtcbiAgICBzaGlwRG9jay5hcHBlbmRDaGlsZChib2F0KTtcbiAgICBwb3J0LmFwcGVuZENoaWxkKHNoaXBEb2NrKTtcbiAgfSk7XG5cbiAgcG9ydENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3J0KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItbWFpblwiKS5hcHBlbmRDaGlsZChwb3J0Q29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlclBvcnQgfTtcbiIsImltcG9ydCBtb2JpbGVDaGVjayBmcm9tIFwiLi4vLi4vbG9naWMvdXRpbGl0eS9tb2JpbGVDaGVja1wiO1xuXG5jb25zdCByZW5kZXJTaGlwID0gKHNoaXApID0+IHtcbiAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXQuY2xhc3NMaXN0LmFkZChgc2hpcGApO1xuICBib2F0LmlkID0gYCR7c2hpcC5nZXROYW1lKCl9YDtcbiAgYm9hdC5kcmFnZ2FibGUgPSBcInRydWVcIjtcbiAgLy9ib2F0LmRhdGFzZXQubmFtZSA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG4gIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwU3Vic2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBTdWJzZXQuY2xhc3NMaXN0LmFkZChcInNoaXBTdWJzZXRcIik7XG4gICAgICBzaGlwU3Vic2V0LmRhdGFzZXQuc3Vic2V0ID0gYCR7aX1gO1xuICAgICAgLy9zaGlwU3Vic2V0LmRhdGFzZXQubWFpbnNldCA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG4gICAgICAvL3NoaXBTdWJzZXQuZGF0YXNldC5tYWluc2V0TGVuZ3RoID0gYCR7c2hpcC5nZXRMZW5ndGgoKX1gO1xuXG4gICAgICBpZiAobW9iaWxlQ2hlY2soNjUwKSkge1xuICAgICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIGhlaWdodDoyNXB4O1xuICAgICAgICB3aWR0aDoyNXB4O1xuICAgICAgYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBTdWJzZXQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgICAgIHdpZHRoOjM2cHg7XG4gICAgICBgO1xuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBpZiAobW9iaWxlQ2hlY2soNjUwKSkge1xuICAgICAgICAgIHNoaXBTdWJzZXQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICBoZWlnaHQ6MjVweDtcbiAgICAgICAgICB3aWR0aDoyNXB4O1xuICAgICAgICBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoaXBTdWJzZXQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICBoZWlnaHQ6MzVweDtcbiAgICAgICAgICB3aWR0aDozNnB4O1xuICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYm9hdC5hcHBlbmRDaGlsZChzaGlwU3Vic2V0KTtcbiAgICB9XG5cbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoXCJob3Jpem9udGFsXCIpO1xuXG4gICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgIGJvYXQuc3R5bGUud2lkdGggPSBgJHtzaGlwLmdldExlbmd0aCgpICogMjZ9cHhgO1xuICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBcIjI1cHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hdC5zdHlsZS53aWR0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCkgKiAzNn1weGA7XG4gICAgICBib2F0LnN0eWxlLmhlaWdodCA9IFwiMzVweFwiO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlQ2hlY2soNjUwKSkge1xuICAgICAgICBib2F0LnN0eWxlLndpZHRoID0gYCR7c2hpcC5nZXRMZW5ndGgoKSAqIDI2fXB4YDtcbiAgICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBcIjI1cHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXQuc3R5bGUud2lkdGggPSBgJHtzaGlwLmdldExlbmd0aCgpICogMzZ9cHhgO1xuICAgICAgICBib2F0LnN0eWxlLmhlaWdodCA9IFwiMzVweFwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9ib2F0LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic2hpcE5hbWVcIj4ke3NoaXAuZ2V0TmFtZSgpfTwvZGl2PmA7XG4gICAgLy9ib2F0LnRleHRDb250ZW50ID0gYCR7c2hpcC5nZXROYW1lKCl9YDtcblxuICAgIGJvYXQuZGF0YXNldC5sZW5ndGggPSBgJHtzaGlwLmdldExlbmd0aCgpfWA7XG4gICAgYm9hdC5kYXRhc2V0LnBvc2l0aW9uID0gYCR7c2hpcC5nZXRQb3NpdGlvbigpfWA7XG4gIH0gZWxzZSB7XG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwU3Vic2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBTdWJzZXQuY2xhc3NMaXN0LmFkZChcInNoaXBTdWJzZXRcIik7XG4gICAgICBzaGlwU3Vic2V0LmRhdGFzZXQuc3Vic2V0ID0gYCR7aX1gO1xuICAgICAgLy9zaGlwU3Vic2V0LmRhdGFzZXQubWFpbnNldCA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG4gICAgICAvL3NoaXBTdWJzZXQuZGF0YXNldC5tYWluc2V0TGVuZ3RoID0gYCR7c2hpcC5nZXRMZW5ndGgoKX1gO1xuXG4gICAgICBpZiAobW9iaWxlQ2hlY2soNjUwKSkge1xuICAgICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIGhlaWdodDoyNnB4O1xuICAgICAgICB3aWR0aDoyN3B4O1xuICAgICAgYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBTdWJzZXQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgaGVpZ2h0OjM2cHg7XG4gICAgICAgIHdpZHRoOjM3cHg7XG4gICAgICBgO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChtb2JpbGVDaGVjayg2NTApKSB7XG4gICAgICAgICAgc2hpcFN1YnNldC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIGhlaWdodDoyNnB4O1xuICAgICAgICAgIHdpZHRoOjI3cHg7XG4gICAgICAgIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hpcFN1YnNldC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIGhlaWdodDozNnB4O1xuICAgICAgICAgIHdpZHRoOjM3cHg7XG4gICAgICAgIGA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBib2F0LmFwcGVuZENoaWxkKHNoaXBTdWJzZXQpO1xuICAgIH1cbiAgICBpZiAobW9iaWxlQ2hlY2soNjUwKSkge1xuICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwLmdldExlbmd0aCgpICogMjZ9cHhgO1xuICAgICAgYm9hdC5zdHlsZS53aWR0aCA9IFwiMjVweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2F0LnN0eWxlLndpZHRoID0gXCIzNXB4XCI7XG4gICAgICBib2F0LnN0eWxlLmhlaWdodCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCkgKiAzNn1weGA7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwLmdldExlbmd0aCgpICogMjZ9cHhgO1xuICAgICAgICBib2F0LnN0eWxlLndpZHRoID0gXCIyNXB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2F0LnN0eWxlLndpZHRoID0gXCIzNXB4XCI7XG4gICAgICAgIGJvYXQuc3R5bGUuaGVpZ2h0ID0gYCR7c2hpcC5nZXRMZW5ndGgoKSAqIDM2fXB4YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJvYXQuZGF0YXNldC5wb3NpdGlvbiA9IGAke3NoaXAuZ2V0UG9zaXRpb24oKX1gO1xuICAgIGJvYXQuZGF0YXNldC5sZW5ndGggPSBgJHtzaGlwLmdldExlbmd0aCgpfWA7XG4gIH1cbiAgcmV0dXJuIGJvYXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTaGlwO1xuIiwiaW1wb3J0IHsgcmVuZGVyUGxheWVyMVNpZGUgfSBmcm9tIFwiLi9yZW5kZXJQbGF5ZXJTaWRlc1wiO1xuaW1wb3J0IHsgcmVuZGVyUG9ydCB9IGZyb20gXCIuL3JlbmRlclBvcnQuanNcIjtcbmltcG9ydCBkcmFnRXZlbnQgZnJvbSBcIi4uLy4uL2xvZ2ljL3V0aWxpdHkvZHJhZ0Ryb3AuanNcIjtcbmltcG9ydCBjaGFuZ2VQb3NpdGlvbkxpc3RlbmVyIGZyb20gXCIuLi8uLi9sb2dpYy91dGlsaXR5L2NoYW5nZVBvc2l0aW9uXCI7XG5cbmNvbnN0IHJlbmRlclVJID0gKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlU2hpcFwiO1xuICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZChcImdhbWVUaXRsZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoXG4gICAgZ2FtZVRpdGxlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW1haW5cIilcbiAgKTtcbiAgcmVuZGVyUGxheWVyMVNpZGUocGxheWVyMUJvYXJkKTtcbiAgcmVuZGVyUG9ydChwbGF5ZXIxQm9hcmQuZ2V0U2hpcHMoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJVSTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0YXJ0VUkgZnJvbSBcIi4vbG9naWMvVUkvc3RhcnRVSVwiO1xuaW1wb3J0IFVJIGZyb20gXCIuL2xvZ2ljL1VJL1VJXCI7XG5cbi8vIFVJKCk7ICAgIC8vZm9yIGRldmluZyBVSVxuXG5zdGFydFVJKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=