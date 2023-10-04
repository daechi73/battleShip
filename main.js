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

        moveEventObject.recallDragEvents();
        if (moveEventObject.getType() === "click") {
          moveEventObject.setSelected(newShip);
        }

        newShip.childNodes.forEach((child) => {
          child.addEventListener("click", (event) => {
            changePosition(board, event, moveEventObject);
          });
        });
      }
    }
    //console.log(moveEventObject);
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
  const type = "click";
  let selected = null;
  let shipSubset = null;
  let moveEventObj;
  let changePositionObj;
  const cells = document.querySelectorAll(".cell");
  //e.target.parentNode.parentNode === "cell"
  const selectShip = (e) => {
    if (selected && e.target.parentNode.parentNode === null) {
      e.stopPropagation();
      console.log(e.target.parentNode.parentNode);
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
  const getType = () => {
    return type;
  };
  return { recallDragEvents, addEvents, setSelected, getSelected, getType };
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
  const type = "drag";
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
            (0,_gameStartBtn__WEBPACK_IMPORTED_MODULE_1__["default"])(player1Board, player2Board, player1, player2);
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
  const getType = () => {
    return type;
  };

  return { addEvents, recallDragEvents, removeEvents, getType };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL1VJL2dhbWVPdmVyVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9VSS9zdGFydFVJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvZ2FtZUJvYXJkL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3BsYXlSb3VuZC9wbGF5Um91bmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9wbGF5ZXIvY29tcHV0ZXIvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9wbGF5ZXIvY29tcHV0ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9jZWxsUmVjaWV2ZUF0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvY2hhbmdlUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy91dGlsaXR5L2NsaWNrRHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy91dGlsaXR5L2dhbWVPdmVyQnRuSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvZ2FtZVN0YXJ0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9tb2JpbGVDaGVjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvcG9zaXRpb25VdGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9zaGlwSWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyU3RhcnRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlckdhbWVPdmVyVWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZVN0YXJ0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlclBsYXllclNpZGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlclBvcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuLi9wbGF5ZXIvY29tcHV0ZXIvcGxheWVyXCI7XG5pbXBvcnQgY29tcHV0ZXIgZnJvbSBcIi4uL3BsYXllci9jb21wdXRlci9jb21wdXRlclwiO1xuaW1wb3J0IHJlbmRlclVJIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyVUlcIjtcbmltcG9ydCBzaGlwSWQgZnJvbSBcIi4uL3V0aWxpdHkvc2hpcElkLmpzXCI7XG5pbXBvcnQgZHJhZ0V2ZW50IGZyb20gXCIuLi91dGlsaXR5L2RyYWdEcm9wXCI7XG5pbXBvcnQgY2hhbmdlUG9zaXRpb25MaXN0ZW5lciBmcm9tIFwiLi4vdXRpbGl0eS9jaGFuZ2VQb3NpdGlvblwiO1xuaW1wb3J0IGNsaWNrRHJvcCBmcm9tIFwiLi4vdXRpbGl0eS9jbGlja0Ryb3BcIjtcbmltcG9ydCBtb2JpbGVDaGVjayBmcm9tIFwiLi4vdXRpbGl0eS9tb2JpbGVDaGVja1wiO1xuXG5jb25zdCBVSSA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gIGNvbnN0IGlkID0gc2hpcElkKCk7XG5cbiAgY29uc3QgcGxheWVyMSA9IHBsYXllcihwbGF5ZXJOYW1lKTtcbiAgY29uc3QgcGxheWVyMiA9IGNvbXB1dGVyKCk7XG4gIGNvbnN0IHBsYXllcjFCb2FyZCA9IGdhbWVCb2FyZChpZCk7XG4gIGNvbnN0IHBsYXllcjJCb2FyZCA9IGdhbWVCb2FyZChpZCk7XG5cbiAgcmVuZGVyVUkocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpO1xuXG4gIGlmIChtb2JpbGVDaGVjayg0MDApKSB7XG4gICAgY29uc3QgbW92ZUV2ZW50T2JqID0gY2xpY2tEcm9wKFxuICAgICAgcGxheWVyMUJvYXJkLFxuICAgICAgcGxheWVyMkJvYXJkLFxuICAgICAgcGxheWVyMSxcbiAgICAgIHBsYXllcjJcbiAgICApO1xuICAgIGNvbnN0IGNoYW5nZVBvc2l0aW9uT2JqZWN0ID0gY2hhbmdlUG9zaXRpb25MaXN0ZW5lcihcbiAgICAgIHBsYXllcjFCb2FyZCxcbiAgICAgIG1vdmVFdmVudE9ialxuICAgICk7XG5cbiAgICBtb3ZlRXZlbnRPYmouYWRkRXZlbnRzKG1vdmVFdmVudE9iaiwgY2hhbmdlUG9zaXRpb25PYmplY3QpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRyYWdFdmVudE9iaiA9IGRyYWdFdmVudChcbiAgICAgIHBsYXllcjFCb2FyZCxcbiAgICAgIHBsYXllcjJCb2FyZCxcbiAgICAgIHBsYXllcjEsXG4gICAgICBwbGF5ZXIyXG4gICAgKTtcbiAgICBjb25zdCBjaGFuZ2VQb3NpdGlvbk9iamVjdCA9IGNoYW5nZVBvc2l0aW9uTGlzdGVuZXIoXG4gICAgICBwbGF5ZXIxQm9hcmQsXG4gICAgICBkcmFnRXZlbnRPYmpcbiAgICApO1xuICAgIGRyYWdFdmVudE9iai5hZGRFdmVudHMoZHJhZ0V2ZW50T2JqLCBjaGFuZ2VQb3NpdGlvbk9iamVjdCk7XG4gIH1cbn07XG5cbmNvbnN0IGRldlByZVNoaXBQb3NpdGlvbiA9IChwbGF5ZXIxQm9hcmQpID0+IHtcbiAgcGxheWVyMUJvYXJkLmdldFNoaXBzKCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuc2V0Q29vcmQoWzAsIDBdKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCByZW5kZXJHYW1lT3ZlclVJIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZU92ZXJVaVwiO1xuaW1wb3J0IHtcbiAgbm9CdG5FdmVudExpc3RlbmVyLFxuICB5ZXNCdG5FdmVudExpc3RlbmVyLFxufSBmcm9tIFwiLi4vdXRpbGl0eS9nYW1lT3ZlckJ0bkhhbmRsZXJcIjtcblxuY29uc3QgZ2FtZU92ZXJVSSA9IChwbGF5ZXIpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhwbGF5ZXIpO1xuICByZW5kZXJHYW1lT3ZlclVJKHBsYXllcik7XG4gIG5vQnRuRXZlbnRMaXN0ZW5lcigpO1xuICB5ZXNCdG5FdmVudExpc3RlbmVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lT3ZlclVJO1xuIiwiaW1wb3J0IHJlbmRlclN0YXJ0IGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyU3RhcnRQYWdlXCI7XG5cbmNvbnN0IHN0YXJ0VUkgPSAoKSA9PiB7XG4gIHJlbmRlclN0YXJ0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydFVJO1xuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5jb25zdCBjZWxsID0gKHJvdywgY29sdW1uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm93LFxuICAgIGNvbHVtbixcbiAgICBjaGFyQ29kZTogcm93ICsgXCJcIiArIGNvbHVtbixcbiAgICBjb250YWluczogbnVsbCxcbiAgICBoaXQ6IGZhbHNlLFxuICAgIG1pc3NlZDogZmFsc2UsXG4gIH07XG59O1xuY29uc3QgZ2FtZUJvYXJkID0gKGlkKSA9PiB7XG4gIGlkLmlkKys7XG4gIGNvbnN0IGNhcnJpZXIgPSBzaGlwKFwiY2FycmllclwiICsgYCR7aWQuaWR9YCwgNSk7XG4gIGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKFwiYmF0dGxlU2hpcFwiICsgYCR7aWQuaWR9YCwgNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKFwicmVhcGVyXCIgKyBgJHtpZC5pZH1gLCAzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcChcInN1Ym1hcmluZVwiICsgYCR7aWQuaWR9YCwgMyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoXCJkZXN0cm95ZXJcIiArIGAke2lkLmlkfWAsIDIpO1xuICBjb25zdCBzY291dCA9IHNoaXAoXCJmaXNoaW5nQm9hdFwiICsgYCR7aWQuaWR9YCwgMik7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZVNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyLCBzY291dF07XG4gIC8vY29uc3Qgc2hpcHMgPSBbY2Fycmllcl07XG5cbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgbGV0IG51bWJlck9mU3Vua2VuU2hpcCA9IDA7XG5cbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2goY2VsbChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSksIGogKyAxKSk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGNoZWNrQ2VsbE9wZW4gPSAoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbc3RhcnRpbmdZXVtpXS5jb250YWlucyAhPSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdZOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3N0YXJ0aW5nWF0uY29udGFpbnMgIT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0JvdW5kYXJ5ID0gKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBlbmRQb3NpdGlvbiwgcG9zaXRpb24pID0+IHtcbiAgICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3N0YXJ0aW5nWV1baV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWTsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBjaGVja0NlbGxBdHRhY2tlZCA9IChjb29yZCkgPT4ge1xuICAgIGxldCBbeCwgeV0gPSBjb29yZDtcbiAgICBpZiAoYm9hcmRbeV1beF0uaGl0ID09PSB0cnVlIHx8IGJvYXJkW3ldW3hdLm1pc3NlZCA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydGluZ1Bvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0Q29vcmQoKSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBbcHJldlgsIHByZXZZXSA9IHNoaXAuZ2V0Q29vcmQoKTtcbiAgICAgIHJlbW92ZVNoaXAocHJldlgsIHByZXZZLCBzaGlwKTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhzdGFydGluZ1Bvc2l0aW9uICsgXCJzdGFydGluZ1Bvc2l0aW9uXCIpO1xuICAgIHN0YXJ0aW5nUG9zaXRpb24gPSBhbHBoYU51bUNvb3JkVG9OdW1Db29yZChzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICBjb25zdCBbc3RhcnRpbmdYLCBzdGFydGluZ1ldID0gc3RhcnRpbmdQb3NpdGlvbjtcblxuICAgIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25zdCBlbmRQb3NpdGlvbiA9IHN0YXJ0aW5nWCArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgICAgaWYgKCFjaGVja0JvdW5kYXJ5KHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBlbmRQb3NpdGlvbiwgc2hpcC5nZXRQb3NpdGlvbigpKSlcbiAgICAgICAgcmV0dXJuIFwib3V0IG9mIGJvdW5kc1wiO1xuICAgICAgaWYgKCFjaGVja0NlbGxPcGVuKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBlbmRQb3NpdGlvbiwgc2hpcC5nZXRQb3NpdGlvbigpKSlcbiAgICAgICAgcmV0dXJuIFwicG9zaXRpb24gbm90IG9wZW5cIjtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBib2FyZFtzdGFydGluZ1ldW2ldLmNvbnRhaW5zID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHNoaXAuc2V0Q29vcmQoc3RhcnRpbmdQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gc3RhcnRpbmdZICsgc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgICBpZiAoIWNoZWNrQm91bmRhcnkoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBzaGlwLmdldFBvc2l0aW9uKCkpKVxuICAgICAgICByZXR1cm4gXCJvdXQgb2YgYm91bmRzXCI7XG4gICAgICBpZiAoIWNoZWNrQ2VsbE9wZW4oc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBzaGlwLmdldFBvc2l0aW9uKCkpKVxuICAgICAgICByZXR1cm4gXCJwb3NpdGlvbiBub3Qgb3BlblwiO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWTsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2ldW3N0YXJ0aW5nWF0uY29udGFpbnMgPSBzaGlwO1xuICAgICAgfVxuICAgICAgc2hpcC5zZXRDb29yZChzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFscGhhTnVtQ29vcmRUb051bUNvb3JkID0gKGFscGhhTnVtQ29vcmQpID0+IHtcbiAgICBpZiAodHlwZW9mIGFscGhhTnVtQ29vcmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHggPSBhbHBoYU51bUNvb3JkLm1hdGNoKC9bMC05XSsvZylbMF0gLSAxO1xuICAgICAgY29uc3QgeSA9IGFscGhhTnVtQ29vcmQubWF0Y2goL1thLXpBLVpdL2cpWzBdLmNoYXJDb2RlQXQoMCkgLSA2NTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xuICAgICAgLy8gY29uc29sZS5sb2coeSk7XG5cbiAgICAgIGFscGhhTnVtQ29vcmQgPSBbeCwgeV07XG4gICAgfVxuICAgIHJldHVybiBhbHBoYU51bUNvb3JkO1xuICB9O1xuXG4gIGNvbnN0IG51bUNvb3JkVG9BbHBoYU51bUNvb3JkID0gKG51bUNvb3JkKSA9PiB7XG4gICAgY29uc3QgeCA9IG51bUNvb3JkWzBdICsgMTtcbiAgICBjb25zdCB5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShudW1Db29yZFsxXSArIDY1KTtcbiAgICByZXR1cm4geSArIHg7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGlvbikgPT4ge1xuICAgIGxldCBbeCwgeV0gPSBjb29yZGluYXRpb247XG4gICAgaWYgKGJvYXJkW3ldW3hdLmNvbnRhaW5zID09IG51bGwpIHtcbiAgICAgIGJvYXJkW3ldW3hdLm1pc3NlZCA9IHRydWU7XG4gICAgICAvL3JldHVybiBgeW91J3ZlIG1pc3NlZCBhdCBwb3NpdGlvbiBbJHtjb29yZGluYXRpb259XWA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFt5XVt4XS5jb250YWlucztcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBib2FyZFt5XVt4XS5oaXQgPSB0cnVlO1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgbnVtYmVyT2ZTdW5rZW5TaGlwKys7XG4gICAgICAgIGlmIChudW1iZXJPZlN1bmtlblNoaXAgPT09IDYpXG4gICAgICAgICAgLy8gcmV0dXJuIGBcbiAgICAgICAgICAvLyBZb3UndmUgaGl0ICR7c2hpcC5nZXROYW1lKCl9IGF0IHBvc2l0aW9uIFske2Nvb3JkaW5hdGlvbn1dXG4gICAgICAgICAgLy8geW91J3ZlIHN1bmsgYSAke3NoaXAuZ2V0TmFtZSgpfSFcbiAgICAgICAgICAvLyBZb3UndmUgc3Vua2VuIGFsbCB0aGUgc2hpcHNgO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwSGl0OiB0cnVlLFxuICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgIHNoaXBTdW5rOiB0cnVlLFxuICAgICAgICAgICAgc3Vua0FsbFNoaXBzOiB0cnVlLFxuICAgICAgICAgICAgY29vcmRpbmF0aW9uOiBudW1Db29yZFRvQWxwaGFOdW1Db29yZChjb29yZGluYXRpb24pLFxuICAgICAgICAgIH07XG4gICAgICAgIC8vIHJldHVybiBgeW91J3ZlIHN1bmsgYSAke3NoaXAuZ2V0TmFtZSgpfSFgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNoaXBIaXQ6IHRydWUsXG4gICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICBzaGlwU3VuazogdHJ1ZSxcbiAgICAgICAgICBzdW5rQWxsU2hpcHM6IGZhbHNlLFxuICAgICAgICAgIGNvb3JkaW5hdGlvbjogbnVtQ29vcmRUb0FscGhhTnVtQ29vcmQoY29vcmRpbmF0aW9uKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vcmV0dXJuIGBZb3UndmUgaGl0ICR7c2hpcC5nZXROYW1lKCl9IGF0IHBvc2l0aW9uIFske2Nvb3JkaW5hdGlvbn1dYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoaXBIaXQ6IHRydWUsXG4gICAgICAgIHNoaXA6IHNoaXAsXG4gICAgICAgIHNoaXBTdW5rOiBmYWxzZSxcbiAgICAgICAgc3Vua0FsbFNoaXBzOiBmYWxzZSxcbiAgICAgICAgY29vcmRpbmF0aW9uOiBudW1Db29yZFRvQWxwaGFOdW1Db29yZChjb29yZGluYXRpb24pLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHVyblNoaXAgPSAobmFtZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtpXVtqXS5jb250YWlucztcbiAgICAgICAgaWYgKHNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChzaGlwLmdldE5hbWUoKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgbGV0IGVuZFBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nWCwgc3RhcnRpbmdZO1xuICAgICAgICAgICAgbGV0IHRlbXBQb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwiaG9yaXpvbnRhbFwiKSB0ZW1wUG9zaXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICBlbHNlIHRlbXBQb3NpdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gICAgICAgICAgICBpZiAodGVtcFBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICBlbmRQb3NpdGlvbiA9IGogKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgICAgICAgICAgc3RhcnRpbmdYID0gaiArIDE7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nWSA9IGk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRQb3NpdGlvbiA9IGkgKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgICAgICAgICAgc3RhcnRpbmdZID0gaSArIDE7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nWCA9IGo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNoZWNrQm91bmRhcnkoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCB0ZW1wUG9zaXRpb24pKVxuICAgICAgICAgICAgICByZXR1cm4gXCJvdXQgb2YgYm91bmRzXCI7XG4gICAgICAgICAgICBpZiAoIWNoZWNrQ2VsbE9wZW4oc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCB0ZW1wUG9zaXRpb24pKVxuICAgICAgICAgICAgICByZXR1cm4gXCJwb3NpdGlvbiBub3Qgb3BlblwiO1xuICAgICAgICAgICAgcmVtb3ZlU2hpcChqLCBpLCBzaGlwKTtcbiAgICAgICAgICAgIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgcGxhY2VTaGlwKHNoaXAsIFtqLCBpXSk7XG4gICAgICAgICAgICByZXR1cm4gXCJzaGlwIHR1cm5lZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0UG9zaXRpb24oKSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gc3RhcnRpbmdYICsgc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRpbmdZXVtpXS5jb250YWlucyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwidmVydGljYWxcIikge1xuICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBzdGFydGluZ1kgKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1k7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBib2FyZFtpXVtzdGFydGluZ1hdLmNvbnRhaW5zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGxldCBwcmludFJvdyA9IFwiXCI7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uY29udGFpbnMgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb2x1bW4ubWlzc2VkID09PSBmYWxzZSkgcHJpbnRSb3cgKz0gYCBvYDtcbiAgICAgICAgICBlbHNlIHByaW50Um93ICs9IGAgeGA7XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLmhpdCA9PT0gdHJ1ZSkgcHJpbnRSb3cgKz0gYCBIYDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHByaW50Um93ICs9IGAgJHtjb2x1bW4uY29udGFpbnMuZ2V0TmFtZSgpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHByaW50Um93KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH07XG4gIGNvbnN0IGZpbmRTaGlwID0gKHNoaXBOYW1lKSA9PiB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBpZiAoc2hpcC5nZXROYW1lKCkgPT09IHNoaXBOYW1lKSByZXR1cm4gc2hpcDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXV0b1BjQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tVkhQb3NpdGlvbiA9ICh4LCBzaGlwKSA9PiB7XG4gICAgICBpZiAoeCAlIDIgPT09IDApIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcbiAgICB9O1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICByYW5kb21WSFBvc2l0aW9uKHgsIHNoaXApO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgICAgW3gsIHldICtcbiAgICAgICAgLy8gICAgICAgXCIgXCIgK1xuICAgICAgICAvLyAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkgK1xuICAgICAgICAvLyAgICAgICBcIiBcIiArXG4gICAgICAgIC8vICAgICAgIHNoaXAuZ2V0Q29vcmQoKSArXG4gICAgICAgIC8vICAgICAgIFwiIFwiICtcbiAgICAgICAgLy8gICAgICAgc2hpcC5nZXROYW1lKClcbiAgICAgICAgLy8gICApO1xuICAgICAgICBwbGFjZVNoaXAoc2hpcCwgW3gsIHldKTtcbiAgICAgICAgaWYgKHNoaXAuZ2V0Q29vcmQgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hpcFBsYWNlZFwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtzaGlwLmdldENvb3JkKCl9YCk7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKHNoaXAuZ2V0Q29vcmQoKSA9PSBudWxsKTtcbiAgICB9XG4gICAgcHJpbnRCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzT25Cb2FyZCA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmdldENvb3JkKCkgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBnZXRCb2FyZCxcbiAgICBjaGVja0NlbGxBdHRhY2tlZCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHR1cm5TaGlwLFxuICAgIHByaW50Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgZmluZFNoaXAsXG4gICAgbnVtQ29vcmRUb0FscGhhTnVtQ29vcmQsXG4gICAgYXV0b1BjQm9hcmQsXG4gICAgYWxwaGFOdW1Db29yZFRvTnVtQ29vcmQsXG4gICAgYWxsU2hpcHNPbkJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiaW1wb3J0IGNlbGxSZWNpZXZlQXR0YWNrIGZyb20gXCIuLi91dGlsaXR5L2NlbGxSZWNpZXZlQXR0YWNrXCI7XG5cbmNvbnN0IHBsYXlSb3VuZCA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICBjb25zdCBwbGF5ZXIyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lci1wbGF5ZXIyIC5jZWxsXCIpO1xuICBwbGF5ZXIyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXIxQXR0YWNrID0gY2VsbFJlY2lldmVBdHRhY2socGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBlKTtcbiAgICAgIGlmIChwbGF5ZXIxQXR0YWNrKSBjZWxsUmVjaWV2ZUF0dGFjayhwbGF5ZXIxQm9hcmQsIHBsYXllcjIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlSb3VuZDtcbiIsImNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICBsZXQgY29vcmRUb0F0dGFjaztcblxuICBjb25zdCBtYWtlTW92ZSA9IChib2FyZCkgPT4ge1xuICAgIGxldCBwYXNzID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb29yZFRvQXR0YWNrID0gW3JhbmRvbVgsIHJhbmRvbVldO1xuXG4gICAgICBpZiAoYm9hcmQuY2hlY2tDZWxsQXR0YWNrZWQoY29vcmRUb0F0dGFjaykgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhc3MgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFRvQXR0YWNrKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChwYXNzID09IGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q29vcmRUb0F0dGFjayA9ICgpID0+IHtcbiAgICByZXR1cm4gY29vcmRUb0F0dGFjaztcbiAgfTtcbiAgcmV0dXJuIHsgbmFtZTogXCJDb21wdXRlclwiLCBtYWtlTW92ZSwgZ2V0Q29vcmRUb0F0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXI7XG4iLCJjb25zdCBwbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBtYWtlTW92ZSA9IChib2FyZCwgY29vcmQpID0+IHtcbiAgICBpZiAoYm9hcmQuY2hlY2tDZWxsQXR0YWNrZWQoY29vcmQpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgbmFtZSwgbWFrZU1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImNvbnN0IHNoaXAgPSAobmFtZSwgbGVuZ3RoLCBwb3NpdGlvbiA9IFwiaG9yaXpvbnRhbFwiLCBjb29yZCA9IG51bGwpID0+IHtcbiAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHRpbWVzSGl0Kys7XG4gIH07XG4gIGNvbnN0IGdldFRpbWVzSGl0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lc0hpdDtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBsZW5ndGggPT09IHRpbWVzSGl0ID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuICBjb25zdCBnZXRDb29yZCA9ICgpID0+IHtcbiAgICByZXR1cm4gY29vcmQ7XG4gIH07XG4gIGNvbnN0IHNldENvb3JkID0gKGNvb3JkaW5hdGlvbikgPT4ge1xuICAgIGNvb3JkID0gY29vcmRpbmF0aW9uO1xuICB9O1xuICBjb25zdCBjaGFuZ2VQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSBwb3NpdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICBlbHNlIHBvc2l0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldExlbmd0aCxcbiAgICBoaXQsXG4gICAgZ2V0VGltZXNIaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldFBvc2l0aW9uLFxuICAgIGNoYW5nZVBvc2l0aW9uLFxuICAgIGdldENvb3JkLFxuICAgIHNldENvb3JkLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsImltcG9ydCBnYW1lT3ZlclVJIGZyb20gXCIuLi9VSS9nYW1lT3ZlclVJXCI7XG5jb25zdCBjZWxsUmVjaWV2ZUF0dGFjayA9IChwbGF5ZXJCb2FyZCwgcGxheWVyLCBlKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgIHBsYXllckJvYXJkLmFscGhhTnVtQ29vcmRUb051bUNvb3JkKGUudGFyZ2V0LmRhdGFzZXQuYWxwaGFudW1jb29yZClcbiAgLy8gKTtcbiAgaWYgKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5tYWtlTW92ZShcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIHBsYXllckJvYXJkLmFscGhhTnVtQ29vcmRUb051bUNvb3JkKGUudGFyZ2V0LmRhdGFzZXQuYWxwaGFudW1jb29yZClcbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnNoaXBTdW5rKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSBzYW5rIGEgJHtyZXN1bHQuc2hpcC5nZXROYW1lKCl9YCk7XG4gICAgICAgIGlmIChyZXN1bHQuc3Vua0FsbFNoaXBzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHNhbmsgYWxsIHNoaXBzISBnYW1lIG92ZXIhYCk7XG4gICAgICAgICAgZ2FtZU92ZXJVSShwbGF5ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJIXCI7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9IGVsc2UgZS50YXJnZXQuaW5uZXJIVE1MICs9IFwiWFwiO1xuICAgICAgcGxheWVyQm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIubWFrZU1vdmUocGxheWVyQm9hcmQpO1xuICAgIGNvbnN0IGZyb250UGxheWVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNvbnRhaW5lci1wbGF5ZXIxIFtkYXRhLWFscGhhbnVtY29vcmQ9JyR7cGxheWVyQm9hcmQubnVtQ29vcmRUb0FscGhhTnVtQ29vcmQoXG4gICAgICAgIHBsYXllci5nZXRDb29yZFRvQXR0YWNrKClcbiAgICAgICl9J11gXG4gICAgKTtcbiAgICAvL2NvbnNvbGUubG9nKGZyb250UGxheWVyQ2VsbCk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKHJlc3VsdC5zaGlwU3VuaylcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHNhbmsgYSAke3Jlc3VsdC5zaGlwLmdldE5hbWUoKX1gKTtcbiAgICAgIGlmIChyZXN1bHQuc3Vua0FsbFNoaXBzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSBzYW5rIGFsbCBzaGlwcyBHYW1lIE92ZXIhYCk7XG4gICAgICAgIGdhbWVPdmVyVUkocGxheWVyKTtcbiAgICAgIH1cblxuICAgICAgZnJvbnRQbGF5ZXJDZWxsLmlubmVySFRNTCA9IFwiSFwiO1xuICAgICAgZnJvbnRQbGF5ZXJDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfSBlbHNlIGZyb250UGxheWVyQ2VsbC5pbm5lckhUTUwgKz0gXCJYXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNlbGxSZWNpZXZlQXR0YWNrO1xuIiwiaW1wb3J0IHJlbmRlclNoaXAgZnJvbSBcIi4uLy4uL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJTaGlwXCI7XG5pbXBvcnQgcG9zaXRpb25VdGlsaXR5IGZyb20gXCIuL3Bvc2l0aW9uVXRpbGl0eVwiO1xuXG5jb25zdCBjaGFuZ2VQb3NpdGlvbkxpc3RlbmVyID0gKGJvYXJkLCBtb3ZlRXZlbnRPYmplY3QpID0+IHtcbiAgY29uc3Qgc2hpcFN1YnNldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBTdWJzZXRcIik7XG4gIGNvbnN0IGNoYW5nZVBvc2l0aW9uRnVuY0hvbGRlciA9IChlKSA9PiB7XG4gICAgY2hhbmdlUG9zaXRpb24oYm9hcmQsIGUsIG1vdmVFdmVudE9iamVjdCk7XG4gIH07XG4gIGNvbnN0IGFkZEV2ZW50cyA9ICgoKSA9PiB7XG4gICAgc2hpcFN1YnNldHMuZm9yRWFjaCgoc2hpcFN1YnNldCkgPT4ge1xuICAgICAgc2hpcFN1YnNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUG9zaXRpb25GdW5jSG9sZGVyKTtcbiAgICB9KTtcbiAgfSkoKTtcbiAgY29uc3QgcmVtb3ZlRXZlbnRzID0gKCkgPT4ge1xuICAgIHNoaXBTdWJzZXRzLmZvckVhY2goKHNoaXBTdWJzZXQpID0+IHtcbiAgICAgIHNoaXBTdWJzZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVBvc2l0aW9uRnVuY0hvbGRlcik7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IHJlbW92ZUV2ZW50cyB9O1xufTtcbmNvbnN0IGNoYW5nZVBvc2l0aW9uID0gKGJvYXJkLCBlLCBtb3ZlRXZlbnRPYmplY3QpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICBpZiAoc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJkb2NrXCIpKSB7XG4gICAgLy8gY29uc3Qgc2hpcCA9IGJvYXJkLmZpbmRTaGlwKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIC8vIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcbiAgICAvLyBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vIGNvbnN0IG5ld1NoaXAgPSByZW5kZXJTaGlwKHNoaXApO1xuICAgIC8vIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gICAgLy8gbW92ZUV2ZW50T2JqZWN0LnJlY2FsbERyYWdFdmVudHMoKTtcbiAgICAvLyBuZXdTaGlwLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAvLyAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgY2hhbmdlUG9zaXRpb24oYm9hcmQsIGV2ZW50LCBtb3ZlRXZlbnRPYmplY3QpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cbiAgaWYgKHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5maW5kU2hpcChlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICBib2FyZC50dXJuU2hpcChzaGlwLmdldE5hbWUoKSk7XG4gICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuICAgIGNvbnN0IG5ld1NoaXAgPSByZW5kZXJTaGlwKHNoaXApO1xuICAgIGlmIChwb3NpdGlvblV0aWxpdHkoKS5jaGVja0JvdW5kYXJ5KHNoaXBDb250YWluZXIsIG5ld1NoaXApKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmNoZWNrQ2VsbEF2YWlsYWJpbGl0eShzaGlwQ29udGFpbmVyLCBuZXdTaGlwLCB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmVuYWJsZUNlbGwoc2hpcENvbnRhaW5lciwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmRpc2FibGVDZWxsKHNoaXBDb250YWluZXIsIG5ld1NoaXApO1xuXG4gICAgICAgIG1vdmVFdmVudE9iamVjdC5yZWNhbGxEcmFnRXZlbnRzKCk7XG4gICAgICAgIGlmIChtb3ZlRXZlbnRPYmplY3QuZ2V0VHlwZSgpID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICBtb3ZlRXZlbnRPYmplY3Quc2V0U2VsZWN0ZWQobmV3U2hpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdTaGlwLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VQb3NpdGlvbihib2FyZCwgZXZlbnQsIG1vdmVFdmVudE9iamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKG1vdmVFdmVudE9iamVjdCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZVBvc2l0aW9uTGlzdGVuZXI7XG4iLCJpbXBvcnQgcG9zaXRpb25VdGlsaXR5IGZyb20gXCIuL3Bvc2l0aW9uVXRpbGl0eVwiO1xuaW1wb3J0IGdhbWVTdGFydEJ0bkV2ZW50IGZyb20gXCIuL2dhbWVTdGFydEJ0blwiO1xuXG5jb25zdCBjbGlja0Ryb3AgPSAocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgY29uc3QgdHlwZSA9IFwiY2xpY2tcIjtcbiAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgbGV0IHNoaXBTdWJzZXQgPSBudWxsO1xuICBsZXQgbW92ZUV2ZW50T2JqO1xuICBsZXQgY2hhbmdlUG9zaXRpb25PYmo7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICAvL2UudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSA9PT0gXCJjZWxsXCJcbiAgY29uc3Qgc2VsZWN0U2hpcCA9IChlKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkICYmIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwU3Vic2V0XCIpKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc2hpcFN1YnNldCA9IGUudGFyZ2V0LmRhdGFzZXQuc3Vic2V0O1xuICAgICAgc2VsZWN0ZWQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwb3NpdGlvblNoaXAgPSAoZSkgPT4ge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgaWYgKHBvc2l0aW9uVXRpbGl0eSgpLmNoZWNrQm91bmRhcnkoZS50YXJnZXQsIHNlbGVjdGVkKSkge1xuICAgICAgICBpZiAocG9zaXRpb25VdGlsaXR5KCkuY2hlY2tDZWxsQXZhaWxhYmlsaXR5KGUudGFyZ2V0LCBzZWxlY3RlZCkpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHBhYmxlXCIpKSB7XG4gICAgICAgICAgICBsZXQgcmVhbENlbGxUb0FwcGVuZDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICByZWFsQ2VsbFRvQXBwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uIC0gKHNoaXBTdWJzZXQgLSAxKVxuICAgICAgICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke2UudGFyZ2V0LmRhdGFzZXQucm93fVwiXWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKSAtIChzaGlwU3Vic2V0IC0gMSk7XG4gICAgICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgICAgICAgICAgICAgICB9XCJdW2RhdGEtcm93PVwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKG5ld1Jvdyl9XCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSlcbiAgICAgICAgICAgICAgcG9zaXRpb25VdGlsaXR5KCkuZW5hYmxlQ2VsbChzZWxlY3RlZC5wYXJlbnROb2RlLCBzZWxlY3RlZCk7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZWN0ZWQpO1xuICAgICAgICAgICAgcmVhbENlbGxUb0FwcGVuZC5hcHBlbmRDaGlsZChzZWxlY3RlZCk7XG5cbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgIHBsYXllcjFCb2FyZC5maW5kU2hpcChzZWxlY3RlZC5pZCksXG4gICAgICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQuZGF0YXNldC5hbHBoYW51bWNvb3JkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICAgICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmRpc2FibGVDZWxsKHJlYWxDZWxsVG9BcHBlbmQsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxQm9hcmQuYWxsU2hpcHNPbkJvYXJkKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbFNoaXBPbkJvYXJkXCIpO1xuICAgICAgICAgICAgICBnYW1lU3RhcnRCdG5FdmVudChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZEV2ZW50cyA9IChtb3ZlRXZlbnRPYmplY3QsIGNoYW5nZVBvc2l0aW9uT2JqZWN0KSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgbW92ZUV2ZW50T2JqID0gbW92ZUV2ZW50T2JqZWN0O1xuICAgIGNoYW5nZVBvc2l0aW9uT2JqID0gY2hhbmdlUG9zaXRpb25PYmplY3Q7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U2hpcCk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9zaXRpb25TaGlwKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0U2hpcCk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9zaXRpb25TaGlwKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVjYWxsRHJhZ0V2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVFdmVudHMoKTtcbiAgICBhZGRFdmVudHMoKTtcbiAgfTtcblxuICBjb25zdCBzZXRTZWxlY3RlZCA9IChuZXdTaGlwKSA9PiB7XG4gICAgc2VsZWN0ZWQgPSBuZXdTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGdldFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfTtcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcbiAgcmV0dXJuIHsgcmVjYWxsRHJhZ0V2ZW50cywgYWRkRXZlbnRzLCBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWQsIGdldFR5cGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrRHJvcDtcbiIsImltcG9ydCBwb3NpdGlvblV0aWxpdHkgZnJvbSBcIi4vcG9zaXRpb25VdGlsaXR5XCI7XG5pbXBvcnQgZ2FtZVN0YXJ0QnRuRXZlbnQgZnJvbSBcIi4vZ2FtZVN0YXJ0QnRuXCI7XG5cbmNvbnN0IGRyYWdFdmVudCA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICBjb25zdCB0eXBlID0gXCJkcmFnXCI7XG4gIGxldCBkcmFnZ2VkID0gbnVsbDtcbiAgbGV0IHNoaXBTdWJzZXQgPSBudWxsO1xuICBsZXQgZHJhZ0V2ZW50T2JqO1xuICBsZXQgY2hhbmdlUG9zaXRpb25PYmo7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuXG4gIGNvbnN0IG1vdXNlRG93bkV2ZW50ID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFN1YnNldFwiKSkge1xuICAgICAgc2hpcFN1YnNldCA9IGUudGFyZ2V0LmRhdGFzZXQuc3Vic2V0O1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmFnc3RhcnRFdmVudCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnc3RhcnRpbmdcIik7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSB7XG4gICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKVxuICAgICAgICBwb3NpdGlvblV0aWxpdHkoKS5lbmFibGVDZWxsKGUudGFyZ2V0LnBhcmVudE5vZGUsIGUudGFyZ2V0KTtcbiAgICAgIGRyYWdnZWQgPSBlLnRhcmdldDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ2VuZEV2ZW50ID0gKGUpID0+IHtcbiAgICByZXR1cm4gXCJkcmFnIGVuZGluZ1wiO1xuICB9O1xuICBjb25zdCBkcmFnb3ZlckV2ZW50ID0gKGUpID0+IHtcbiAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuICBjb25zdCBkcm9wRXZlbnQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgaWYgKHBvc2l0aW9uVXRpbGl0eSgpLmNoZWNrQm91bmRhcnkoZS50YXJnZXQsIGRyYWdnZWQpKSB7XG4gICAgICBpZiAocG9zaXRpb25VdGlsaXR5KCkuY2hlY2tDZWxsQXZhaWxhYmlsaXR5KGUudGFyZ2V0LCBkcmFnZ2VkKSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHBhYmxlXCIpKSB7XG4gICAgICAgICAgbGV0IHJlYWxDZWxsVG9BcHBlbmQ7XG4gICAgICAgICAgaWYgKGRyYWdnZWQuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbiAtIChzaGlwU3Vic2V0IC0gMSlcbiAgICAgICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7ZS50YXJnZXQuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Um93ID1cbiAgICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKSAtIChzaGlwU3Vic2V0IC0gMSk7XG4gICAgICAgICAgICByZWFsQ2VsbFRvQXBwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgICAgICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShuZXdSb3cpfVwiXWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRyYWdnZWQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkKTtcbiAgICAgICAgICByZWFsQ2VsbFRvQXBwZW5kLmFwcGVuZENoaWxkKGRyYWdnZWQpO1xuXG4gICAgICAgICAgcGxheWVyMUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5maW5kU2hpcChkcmFnZ2VkLmlkKSxcbiAgICAgICAgICAgIHJlYWxDZWxsVG9BcHBlbmQuZGF0YXNldC5hbHBoYW51bWNvb3JkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwbGF5ZXIxQm9hcmQucHJpbnRCb2FyZCgpO1xuICAgICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmRpc2FibGVDZWxsKHJlYWxDZWxsVG9BcHBlbmQsIGRyYWdnZWQpO1xuICAgICAgICAgIGlmIChwbGF5ZXIxQm9hcmQuYWxsU2hpcHNPbkJvYXJkKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbGxTaGlwT25Cb2FyZFwiKTtcbiAgICAgICAgICAgIGdhbWVTdGFydEJ0bkV2ZW50KHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIGV2ZW50cy4uXCIpO1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudCk7XG5cbiAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRFdmVudCk7XG5cbiAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ2VuZEV2ZW50KTtcbiAgICB9KTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdvdmVyRXZlbnQpO1xuICAgIH0pO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEV2ZW50KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgYWRkRXZlbnRzID0gKGRyYWdFdmVudE9iamVjdCwgY2hhbmdlUG9zaXRpb25PYmplY3QpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBkcmFnRXZlbnRPYmogPSBkcmFnRXZlbnRPYmplY3Q7XG4gICAgY2hhbmdlUG9zaXRpb25PYmogPSBjaGFuZ2VQb3NpdGlvbk9iamVjdDtcbiAgICBjb25zb2xlLmxvZyhcImFkZGluZ0V2ZW50cy4uLlwiKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duRXZlbnQpO1xuXG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ3N0YXJ0RXZlbnQpO1xuXG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdlbmRFdmVudCk7XG4gICAgfSk7XG5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnb3ZlckV2ZW50KTtcbiAgICB9KTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3BFdmVudCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlY2FsbERyYWdFdmVudHMgPSAoKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRzKCk7XG4gICAgYWRkRXZlbnRzKCk7XG4gIH07XG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkRXZlbnRzLCByZWNhbGxEcmFnRXZlbnRzLCByZW1vdmVFdmVudHMsIGdldFR5cGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWdFdmVudDtcbiIsImltcG9ydCByZW5kZXJTdGFydCBmcm9tIFwiLi4vLi4vcmVuZGVyL3JlbmRlclN0YXJ0UGFnZVwiO1xuXG5jb25zdCB5ZXNCdG5FdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllc0J0blwiKTtcbiAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItbWFpblwiKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lVGl0bGVcIikucmVtb3ZlKCk7XG4gICAgcmVuZGVyU3RhcnQoKTtcbiAgICB5ZXNCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIH0pO1xufTtcbmNvbnN0IG5vQnRuRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vQnRuXCIpO1xuXG4gIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbm9CdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlubmVySFRNTCA9XG4gICAgICBcIjxkaXYgY2xhc3M9J2ZpbmFsTXNnJz5HQU1FIE9WRVI8L2Rpdj5cIjtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB5ZXNCdG5FdmVudExpc3RlbmVyLCBub0J0bkV2ZW50TGlzdGVuZXIgfTtcbiIsImltcG9ydCB7IHJlbmRlclNoaXBzVG9Cb2FyZCB9IGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyQm9hcmRcIjtcbmltcG9ydCB7IHJlbmRlclBsYXllcjJTaWRlIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJQbGF5ZXJTaWRlc1wiO1xuaW1wb3J0IHBsYXlSb3VuZCBmcm9tIFwiLi4vcGxheVJvdW5kL3BsYXlSb3VuZC5qc1wiO1xuaW1wb3J0IHJlbmRlckdhbWVTdGFydEJ0biBmcm9tIFwiLi4vLi4vcmVuZGVyL3JlbmRlclVJL3JlbmRlckdhbWVTdGFydEJ0blwiO1xuXG5jb25zdCBnYW1lU3RhcnRCdG5FdmVudCA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICByZW5kZXJHYW1lU3RhcnRCdG4oKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVTdGFydEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXBvcnRcIikucmVtb3ZlKCk7XG4gICAgcGxheWVyMkJvYXJkLmF1dG9QY0JvYXJkKCk7XG4gICAgcmVuZGVyUGxheWVyMlNpZGUocGxheWVyMkJvYXJkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkcmFnRXZlbnRPYmplY3QpO1xuICAgIC8vIC8vZHJhZ0V2ZW50T2JqZWN0LnJlbW92ZUV2ZW50cygpO1xuXG4gICAgLy9jaGFuZ2VQb3NpdGlvbk9iamVjdC5yZW1vdmVFdmVudHMoKTtcbiAgICBwbGF5Um91bmQocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpO1xuICAgIHJlbmRlclNoaXBzVG9Cb2FyZChwbGF5ZXIxQm9hcmQpO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBnYW1lU3RhcnRCdG5FdmVudDtcbiIsImNvbnN0IG1vYmlsZUNoZWNrID0gKGRpbWVuc2lvbikgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gZGltZW5zaW9uKSByZXR1cm4gdHJ1ZTtcbiAgZWxzZSByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVDaGVjaztcbiIsImNvbnN0IHBvc2l0aW9uVXRpbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgZGlzYWJsZUNlbGwgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwKSA9PiB7XG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgZGlzYWJsZVRvID1cbiAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZGlzYWJsZUZyb207IGkgPCBkaXNhYmxlVG87IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBkaXNhYmxlRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgY29uc3QgZGlzYWJsZVRvID0gZGlzYWJsZUZyb20gKyBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGRpc2FibGVGcm9tOyBpIDwgZGlzYWJsZVRvOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVuYWJsZUNlbGwgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlbmFibGluZyBDZWxsLi4uLlwiKTtcbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgZW5hYmxlRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgIGNvbnN0IGVuYWJsZVRvID1cbiAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZW5hYmxlRnJvbTsgaSA8IGVuYWJsZVRvOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtpfVwiXVtkYXRhLXJvdz1cIiR7c3RhcnRpbmdDZWxsLmRhdGFzZXQucm93fVwiXWBcbiAgICAgICAgKS5kYXRhc2V0LmF2YWlsYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBkaXNhYmxlRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgY29uc3QgZGlzYWJsZVRvID0gZGlzYWJsZUZyb20gKyBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGRpc2FibGVGcm9tOyBpIDwgZGlzYWJsZVRvOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tDZWxsQXZhaWxhYmlsaXR5ID0gKHN0YXJ0aW5nQ2VsbCwgdGFyZ2V0U2hpcCwgcG9zaXRpb25DaGFuZ2UpID0+IHtcbiAgICBpZiAoc3RhcnRpbmdDZWxsLmNsYXNzTmFtZSA9PT0gXCJzaGlwU3Vic2V0XCIpIHtcbiAgICAgIHN0YXJ0aW5nQ2VsbCA9IHN0YXJ0aW5nQ2VsbC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBsZXQgY2hlY2tGcm9tO1xuICAgICAgaWYgKHBvc2l0aW9uQ2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbiArIDE7XG4gICAgICB9IGVsc2UgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgY2hlY2tUbyA9XG4gICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbikgK1xuICAgICAgICBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGNoZWNrRnJvbTsgaSA8IGNoZWNrVG87IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICAgICkuZGF0YXNldC5hdmFpbGFibGUgPT09IFwiZmFsc2VcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNlbGwgbm90IGF2YWlsYWJsZSBjaG9vc2UgYW5vdGhlclwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCBjaGVja0Zyb207XG4gICAgICBpZiAocG9zaXRpb25DaGFuZ2UgPT09IHRydWUpXG4gICAgICAgIGNoZWNrRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApICsgMTtcbiAgICAgIGVsc2UgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQucm93LmNoYXJDb2RlQXQoMCk7XG4gICAgICBjb25zdCBjaGVja1RvID0gY2hlY2tGcm9tICsgcGFyc2VJbnQodGFyZ2V0U2hpcC5kYXRhc2V0Lmxlbmd0aCkgLSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gY2hlY2tGcm9tOyBpIDwgY2hlY2tUbzsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX1cIl1gXG4gICAgICAgICAgKS5kYXRhc2V0LmF2YWlsYWJsZSA9PT0gXCJmYWxzZVwiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2VsbCBub3QgYXZhaWxhYmxlIGNob29zZSBhbm90aGVyXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrQm91bmRhcnkgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwKSA9PiB7XG4gICAgaWYgKHN0YXJ0aW5nQ2VsbC5jbGFzc05hbWUgPT09IFwic2hpcFN1YnNldFwiKSB7XG4gICAgICBzdGFydGluZ0NlbGwgPSBzdGFydGluZ0NlbGwucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nQm91bmRhcnkuLlwiKTtcbiAgICAvL3JldHVybiBjb25zb2xlLmxvZyh0YXJnZXRTaGlwKTtcbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgY2hlY2tUbyA9XG4gICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbikgK1xuICAgICAgICBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGNoZWNrRnJvbTsgaSA8IGNoZWNrVG87IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICAgICkgPT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQbGFjZW1lbnQgb3V0b2Zib3VuZCwgcGljayBhbm90aGVyIHNwb3RcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBjaGVja0Zyb20gPSBzdGFydGluZ0NlbGwuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKTtcbiAgICAgIGNvbnN0IGNoZWNrVG8gPVxuICAgICAgICBzdGFydGluZ0NlbGwuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gY2hlY2tGcm9tOyBpIDwgY2hlY2tUbzsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX1cIl1bZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgICBzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW5cbiAgICAgICAgICAgIH1cIl1gXG4gICAgICAgICAgKSA9PT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYWNlbWVudCBvdXRvZmJvdW5kLCBwaWNrIGFub3RoZXIgc3BvdFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwiXCIpIHJldHVybiBcInBvc2l0aW9uIG5vdCBzZXRcIjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc2FibGVDZWxsLFxuICAgIGVuYWJsZUNlbGwsXG4gICAgY2hlY2tCb3VuZGFyeSxcbiAgICBjaGVja0NlbGxBdmFpbGFiaWxpdHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblV0aWxpdHk7XG4iLCJjb25zdCBzaGlwSWQgPSAoKSA9PiB7XG4gIHJldHVybiB7IGlkOiAwIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwSWQ7XG4iLCJpbXBvcnQgVUkgZnJvbSBcIi4uL2xvZ2ljL1VJL1VJLmpzXCI7XG5cbmNvbnN0IHJlbmRlclN0YXJ0ID0gKCkgPT4ge1xuICBjb25zdCBzdGFydFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdGFydFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHN5c3RlbU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZVNoaXBcIjtcbiAgcHJvbXB0LnRleHRDb250ZW50ID0gXCJFbnRlciB5b3VyIE5hbWVcIjtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCI7XG5cbiAgc3RhcnRQYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItc3RhcnRQYWdlXCIpO1xuICBzeXN0ZW1Nc2cuY2xhc3NMaXN0LmFkZChcInN0YXJ0U3lzdGVtTXNnXCIpO1xuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnRCdG5cIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJuYW1lSW5wdXRcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdGFydFRpdGxlXCIpO1xuICBwcm9tcHQuY2xhc3NMaXN0LmFkZChcInN0YXJ0UHJvbXB0XCIpO1xuICBzdGFydFBhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXJ0UGFnZVwiKTtcblxuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQocHJvbXB0KTtcbiAgc3RhcnRQYWdlLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgc3RhcnRQYWdlLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbiAgc3RhcnRQYWdlLmFwcGVuZENoaWxkKHN5c3RlbU1zZyk7XG4gIHN0YXJ0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydFBhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXJ0UGFnZUNvbnRhaW5lcik7XG5cbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHN0YXJ0UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBzdGFydFBhZ2VDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBVSShpbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5c3RlbU1zZy50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIHlvdXIgZ2FtZSBuYW1lXCI7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclN0YXJ0O1xuIiwiY29uc3QgcmVuZGVyQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLUJvYXJkXCIpO1xuXG4gIGJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgci5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIHIuY2xhc3NMaXN0LmFkZChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSl9YCk7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gYCR7Y29sdW1uLmNvbHVtbn1gO1xuICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGAke2NvbHVtbi5yb3d9YDtcbiAgICAgIGNlbGwuZGF0YXNldC5hbHBoYW51bWNvb3JkID0gYCR7Y29sdW1uLmNoYXJDb2RlfWA7XG4gICAgICBjZWxsLmRhdGFzZXQuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIC8vIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtjb2x1bW4uY29sdW1ufWApO1xuICAgICAgLy8gY2VsbC5jbGFzc0xpc3QuYWRkKGAke2NvbHVtbi5jaGFyQ29kZX1gKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGVcIik7XG4gICAgICByLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lckJvYXJkLmFwcGVuZENoaWxkKHIpO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyQm9hcmQ7XG59O1xuXG5jb25zdCByZW5kZXJTaGlwc1RvQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgLy8gYm9hcmQuZ2V0U2hpcHMoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gIC8vICAgY29uc3QgYWxwaGFOdW1Db29yZCA9IGJvYXJkLm51bUNvb3JkVG9BbHBoYU51bUNvb3JkKHNoaXAuZ2V0Q29vcmQoKSk7XG4gIC8vICAgLy9jb25zb2xlLmxvZyhhbHBoYU51bUNvb3JkKTtcbiAgLy8gICBjb25zdCBmcm9udENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgYC5jb250YWluZXItcGxheWVyMiBbZGF0YS1hbHBoYW51bWNvb3JkPScke2FscGhhTnVtQ29vcmR9J11gXG4gIC8vICAgKTtcbiAgLy8gICAvL1tkYXRhLWFscGhhbnVtY29vcmQ9JyR7YWxwaGFOdW1Db29yZH0nXVxuICAvLyAgIGNvbnNvbGUubG9nKFwicmVuZGVyU2hpcHNUb0JvYXJkXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKGZyb250Q2VsbCk7XG4gIC8vICAgLy9jb25zb2xlLmxvZyhib2FyZC5udW1Db29yZFRvQWxwaGFOdW1Db29yZChzaGlwLmdldENvb3JkKCkpKTtcbiAgLy8gICBmcm9udENlbGwuYXBwZW5kQ2hpbGQocmVuZGVyU2hpcChzaGlwKSk7XG4gIC8vIH0pO1xuICBib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4uY29udGFpbnMpIHtcbiAgICAgICAgY29uc3QgZnJvbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmNvbnRhaW5lci1wbGF5ZXIxIFtkYXRhLWFscGhhbnVtY29vcmQ9JyR7Y29sdW1uLmNoYXJDb2RlfSddYFxuICAgICAgICApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGZyb250Q2VsbCk7XG4gICAgICAgIGZyb250Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAgICAgZnJvbnRDZWxsLnRleHRDb250ZW50ID0gYCR7Y29sdW1uLmNvbnRhaW5zXG4gICAgICAgICAgLmdldE5hbWUoKVxuICAgICAgICAgIC5jaGFyQXQoMClcbiAgICAgICAgICAudG9VcHBlckNhc2UoKX1gO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJTaGlwc1RvQm9hcmQgfTtcbiIsImNvbnN0IHJlbmRlckdhbWVPdmVyVUkgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckdhbWVPdmVyVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBnYW1lT3ZlclVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWluZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXJHYW1lT3ZlclVJLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItZ2FtZU92ZXJVSVwiKTtcbiAgY29udGFpbmVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXRleHRcIik7XG4gIGNvbnRhaW5lckJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWJ0blwiKTtcbiAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ5ZXNCdG5cIik7XG4gIG5vQnRuLmNsYXNzTGlzdC5hZGQoXCJub0J0blwiKTtcbiAgcGxheUFnYWluLmNsYXNzTGlzdC5hZGQoXCJwbGF5QWdhaW5UeHRcIik7XG4gIGdhbWVPdmVyVUkuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyVUlcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiR09VSUhlYWRlclwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCcke3BsYXllci5uYW1lfScgV29uIWA7XG4gIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2Fpbj9cIjtcbiAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZXCI7XG4gIG5vQnRuLnRleHRDb250ZW50ID0gXCJOXCI7XG5cbiAgY29udGFpbmVyVGV4dC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXJUZXh0LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gIGNvbnRhaW5lckJ0bi5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICBjb250YWluZXJCdG4uYXBwZW5kQ2hpbGQobm9CdG4pO1xuICBnYW1lT3ZlclVJLmFwcGVuZENoaWxkKGNvbnRhaW5lclRleHQpO1xuICBnYW1lT3ZlclVJLmFwcGVuZENoaWxkKGNvbnRhaW5lckJ0bik7XG4gIGNvbnRhaW5lckdhbWVPdmVyVUkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJVSSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyR2FtZU92ZXJVSSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lT3ZlclVJO1xuIiwiY29uc3QgcmVuZGVyR2FtZVN0YXJ0QnRuID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0XCIpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0XCIpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBnYW1lU3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIkdhbWUgU3RhcnRcIjtcbiAgICBnYW1lU3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImdhbWVTdGFydEJ0blwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1wb3J0XCIpLmFwcGVuZENoaWxkKGdhbWVTdGFydEJ0bik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVTdGFydEJ0bjtcbiIsImltcG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJTaGlwc1RvQm9hcmQgfSBmcm9tIFwiLi9yZW5kZXJCb2FyZC5qc1wiO1xuXG5jb25zdCByZW5kZXJQbGF5ZXIxU2lkZSA9IChib2FyZCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXBsYXllcjFcIik7XG4gIHBsYXllcjFDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoYm9hcmQpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItbWFpblwiKS5hcHBlbmRDaGlsZChwbGF5ZXIxQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHJlbmRlclBsYXllcjJTaWRlID0gKGJvYXJkKSA9PiB7XG4gIGNvbnN0IHBsYXllcjJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXIyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItcGxheWVyMlwiKTtcbiAgcGxheWVyMkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZChib2FyZCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1tYWluXCIpLmFwcGVuZENoaWxkKHBsYXllcjJDb250YWluZXIpO1xuICAvL3JlbmRlclNoaXBzVG9Cb2FyZChib2FyZCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXIxU2lkZSwgcmVuZGVyUGxheWVyMlNpZGUgfTtcbiIsImltcG9ydCByZW5kZXJTaGlwIGZyb20gXCIuL3JlbmRlclNoaXAuanNcIjtcbmNvbnN0IHJlbmRlclBvcnQgPSAoc2hpcHMpID0+IHtcbiAgY29uc3QgcG9ydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJEaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXJlY3Rpb24udGV4dENvbnRlbnQgPSBcIlBvc2l0aW9uIHlvdXIgc2hpcHNcIjtcbiAgZGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25cIik7XG4gIGNvbnRhaW5lckRpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWRpcmVjdGlvblwiKTtcblxuICBwb3J0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItcG9ydFwiKTtcbiAgcG9ydC5jbGFzc0xpc3QuYWRkKFwicG9ydFwiKTtcblxuICBjb250YWluZXJEaXJlY3Rpb24uYXBwZW5kQ2hpbGQoZGlyZWN0aW9uKTtcbiAgcG9ydC5hcHBlbmRDaGlsZChjb250YWluZXJEaXJlY3Rpb24pO1xuXG4gIHNoaXBzLmZvckVhY2goKHNoaXAsIGkpID0+IHtcbiAgICBjb25zdCBzaGlwRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9hdCA9IHJlbmRlclNoaXAoc2hpcCk7XG4gICAgc2hpcERvY2suY2xhc3NMaXN0LmFkZChcImRvY2tcIik7XG4gICAgc2hpcERvY2suYXBwZW5kQ2hpbGQoYm9hdCk7XG4gICAgcG9ydC5hcHBlbmRDaGlsZChzaGlwRG9jayk7XG4gIH0pO1xuXG4gIHBvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQocG9ydCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW1haW5cIikuYXBwZW5kQ2hpbGQocG9ydENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyByZW5kZXJQb3J0IH07XG4iLCJpbXBvcnQgbW9iaWxlQ2hlY2sgZnJvbSBcIi4uLy4uL2xvZ2ljL3V0aWxpdHkvbW9iaWxlQ2hlY2tcIjtcblxuY29uc3QgcmVuZGVyU2hpcCA9IChzaGlwKSA9PiB7XG4gIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0LmNsYXNzTGlzdC5hZGQoYHNoaXBgKTtcbiAgYm9hdC5pZCA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG4gIGJvYXQuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gIC8vYm9hdC5kYXRhc2V0Lm5hbWUgPSBgJHtzaGlwLmdldE5hbWUoKX1gO1xuICBpZiAoc2hpcC5nZXRQb3NpdGlvbigpID09PSBcImhvcml6b250YWxcIikge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcFN1YnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwU3Vic2V0LmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vic2V0XCIpO1xuICAgICAgc2hpcFN1YnNldC5kYXRhc2V0LnN1YnNldCA9IGAke2l9YDtcbiAgICAgIC8vc2hpcFN1YnNldC5kYXRhc2V0Lm1haW5zZXQgPSBgJHtzaGlwLmdldE5hbWUoKX1gO1xuICAgICAgLy9zaGlwU3Vic2V0LmRhdGFzZXQubWFpbnNldExlbmd0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCl9YDtcblxuICAgICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgICAgc2hpcFN1YnNldC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBoZWlnaHQ6MjVweDtcbiAgICAgICAgd2lkdGg6MjVweDtcbiAgICAgIGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIGhlaWdodDozNXB4O1xuICAgICAgICB3aWR0aDozNnB4O1xuICAgICAgYDtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgaGVpZ2h0OjI1cHg7XG4gICAgICAgICAgd2lkdGg6MjVweDtcbiAgICAgICAgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgICAgICAgd2lkdGg6MzZweDtcbiAgICAgICAgYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGJvYXQuYXBwZW5kQ2hpbGQoc2hpcFN1YnNldCk7XG4gICAgfVxuXG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGlmIChtb2JpbGVDaGVjayg2NTApKSB7XG4gICAgICBib2F0LnN0eWxlLndpZHRoID0gYCR7c2hpcC5nZXRMZW5ndGgoKSAqIDI2fXB4YDtcbiAgICAgIGJvYXQuc3R5bGUuaGVpZ2h0ID0gXCIyNXB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXQuc3R5bGUud2lkdGggPSBgJHtzaGlwLmdldExlbmd0aCgpICogMzZ9cHhgO1xuICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBcIjM1cHhcIjtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgICAgYm9hdC5zdHlsZS53aWR0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCkgKiAyNn1weGA7XG4gICAgICAgIGJvYXQuc3R5bGUuaGVpZ2h0ID0gXCIyNXB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2F0LnN0eWxlLndpZHRoID0gYCR7c2hpcC5nZXRMZW5ndGgoKSAqIDM2fXB4YDtcbiAgICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBcIjM1cHhcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vYm9hdC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInNoaXBOYW1lXCI+JHtzaGlwLmdldE5hbWUoKX08L2Rpdj5gO1xuICAgIC8vYm9hdC50ZXh0Q29udGVudCA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG5cbiAgICBib2F0LmRhdGFzZXQubGVuZ3RoID0gYCR7c2hpcC5nZXRMZW5ndGgoKX1gO1xuICAgIGJvYXQuZGF0YXNldC5wb3NpdGlvbiA9IGAke3NoaXAuZ2V0UG9zaXRpb24oKX1gO1xuICB9IGVsc2Uge1xuICAgIGJvYXQuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcFN1YnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwU3Vic2V0LmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vic2V0XCIpO1xuICAgICAgc2hpcFN1YnNldC5kYXRhc2V0LnN1YnNldCA9IGAke2l9YDtcbiAgICAgIC8vc2hpcFN1YnNldC5kYXRhc2V0Lm1haW5zZXQgPSBgJHtzaGlwLmdldE5hbWUoKX1gO1xuICAgICAgLy9zaGlwU3Vic2V0LmRhdGFzZXQubWFpbnNldExlbmd0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCl9YDtcblxuICAgICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgICAgc2hpcFN1YnNldC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBoZWlnaHQ6MjZweDtcbiAgICAgICAgd2lkdGg6MjdweDtcbiAgICAgIGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIGhlaWdodDozNnB4O1xuICAgICAgICB3aWR0aDozN3B4O1xuICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICBpZiAobW9iaWxlQ2hlY2soNjUwKSkge1xuICAgICAgICAgIHNoaXBTdWJzZXQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICBoZWlnaHQ6MjZweDtcbiAgICAgICAgICB3aWR0aDoyN3B4O1xuICAgICAgICBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoaXBTdWJzZXQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICBoZWlnaHQ6MzZweDtcbiAgICAgICAgICB3aWR0aDozN3B4O1xuICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYm9hdC5hcHBlbmRDaGlsZChzaGlwU3Vic2V0KTtcbiAgICB9XG4gICAgaWYgKG1vYmlsZUNoZWNrKDY1MCkpIHtcbiAgICAgIGJvYXQuc3R5bGUuaGVpZ2h0ID0gYCR7c2hpcC5nZXRMZW5ndGgoKSAqIDI2fXB4YDtcbiAgICAgIGJvYXQuc3R5bGUud2lkdGggPSBcIjI1cHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hdC5zdHlsZS53aWR0aCA9IFwiMzVweFwiO1xuICAgICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwLmdldExlbmd0aCgpICogMzZ9cHhgO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGlmIChtb2JpbGVDaGVjayg2NTApKSB7XG4gICAgICAgIGJvYXQuc3R5bGUuaGVpZ2h0ID0gYCR7c2hpcC5nZXRMZW5ndGgoKSAqIDI2fXB4YDtcbiAgICAgICAgYm9hdC5zdHlsZS53aWR0aCA9IFwiMjVweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hdC5zdHlsZS53aWR0aCA9IFwiMzVweFwiO1xuICAgICAgICBib2F0LnN0eWxlLmhlaWdodCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCkgKiAzNn1weGA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBib2F0LmRhdGFzZXQucG9zaXRpb24gPSBgJHtzaGlwLmdldFBvc2l0aW9uKCl9YDtcbiAgICBib2F0LmRhdGFzZXQubGVuZ3RoID0gYCR7c2hpcC5nZXRMZW5ndGgoKX1gO1xuICB9XG4gIHJldHVybiBib2F0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2hpcDtcbiIsImltcG9ydCB7IHJlbmRlclBsYXllcjFTaWRlIH0gZnJvbSBcIi4vcmVuZGVyUGxheWVyU2lkZXNcIjtcbmltcG9ydCB7IHJlbmRlclBvcnQgfSBmcm9tIFwiLi9yZW5kZXJQb3J0LmpzXCI7XG5pbXBvcnQgZHJhZ0V2ZW50IGZyb20gXCIuLi8uLi9sb2dpYy91dGlsaXR5L2RyYWdEcm9wLmpzXCI7XG5pbXBvcnQgY2hhbmdlUG9zaXRpb25MaXN0ZW5lciBmcm9tIFwiLi4vLi4vbG9naWMvdXRpbGl0eS9jaGFuZ2VQb3NpdGlvblwiO1xuXG5jb25zdCByZW5kZXJVSSA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICBjb25zdCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZVNoaXBcIjtcbiAgZ2FtZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lVGl0bGVcIik7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKFxuICAgIGdhbWVUaXRsZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1tYWluXCIpXG4gICk7XG4gIHJlbmRlclBsYXllcjFTaWRlKHBsYXllcjFCb2FyZCk7XG4gIHJlbmRlclBvcnQocGxheWVyMUJvYXJkLmdldFNoaXBzKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVUk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdGFydFVJIGZyb20gXCIuL2xvZ2ljL1VJL3N0YXJ0VUlcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9sb2dpYy9VSS9VSVwiO1xuXG4vLyBVSSgpOyAgICAvL2ZvciBkZXZpbmcgVUlcblxuc3RhcnRVSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9