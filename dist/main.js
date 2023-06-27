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
/* harmony import */ var _gameOverUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameOverUI */ "./src/logic/UI/gameOverUI.js");







const UI = (playerName) => {
  const id = (0,_utility_shipId_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const player1 = (0,_player_computer_player__WEBPACK_IMPORTED_MODULE_1__["default"])(playerName);
  const player2 = (0,_player_computer_computer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const player1Board = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  const player2Board = (0,_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(id);

  //deleteThisafter(player1Board);
  //gameOverUI();
  (0,_render_renderUI_renderUI__WEBPACK_IMPORTED_MODULE_3__["default"])(player1Board, player2Board, player1, player2);
};

const deleteThisafter = (player1Board) => {
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
  //const ships = [carrier, battleShip, cruiser, submarine, destroyer, scout];
  const ships = [carrier];

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
        if (numberOfSunkenShip === 1)
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



const changePositionListener = (board, dragEventObject) => {
  const shipSubsets = document.querySelectorAll(".shipSubset");
  const changePositionFuncHolder = (e) => {
    changePosition(board, e, dragEventObject);
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
const changePosition = (board, e, dragEventObject) => {
  const shipContainer = e.target.parentNode.parentNode;
  console.log(e.target.parentNode.parentNode);
  if (shipContainer.classList.contains("dock")) {
    // const ship = board.findShip(e.target.parentNode.id);
    // ship.changePosition();
    // e.target.parentNode.remove();
    // const newShip = renderShip(ship);
    // shipContainer.appendChild(newShip);
    // dragEventObject.recallDragEvents();
    // newShip.childNodes.forEach((child) => {
    //   child.addEventListener("click", (event) => {
    //     changePosition(board, event, dragEventObject);
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
    //console.log(dragEventObject);
    dragEventObject.recallDragEvents();

    newShip.childNodes.forEach((child) => {
      child.addEventListener("click", (event) => {
        changePosition(board, event, dragEventObject);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePositionListener);


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
/* harmony import */ var _render_renderUI_renderGameStartBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderUI/renderGameStartBtn */ "./src/render/renderUI/renderGameStartBtn.js");



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
            (0,_render_renderUI_renderGameStartBtn__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
/* harmony import */ var _UI_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/UI */ "./src/logic/UI/UI.js");


const yesBtnEventListener = () => {
  const yesBtn = document.querySelector(".yesBtn");
  yesBtn.addEventListener("click", () => {
    document.querySelector(".container-main").textContent = "";
    (0,_UI_UI__WEBPACK_IMPORTED_MODULE_0__["default"])("j");
    yesBtn.parentNode.parentNode.parentNode.remove();
  });
};
const noBtnEventListener = () => {
  const noBtn = document.querySelector(".noBtn");

  noBtn.addEventListener("click", () => {
    noBtn.parentNode.parentNode.textContent = "GAME OVER";
  });
};




/***/ }),

/***/ "./src/logic/utility/gameStartBtnEventListener.js":
/*!********************************************************!*\
  !*** ./src/logic/utility/gameStartBtnEventListener.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_renderUI_renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderUI/renderBoard */ "./src/render/renderUI/renderBoard.js");
/* harmony import */ var _render_renderUI_renderPlayerSides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderUI/renderPlayerSides */ "./src/render/renderUI/renderPlayerSides.js");
/* harmony import */ var _playRound_playRound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playRound/playRound.js */ "./src/logic/playRound/playRound.js");



_render_renderUI_renderBoard__WEBPACK_IMPORTED_MODULE_0__.renderShipsToBoard;

const gameStartBtnEventListener = (
  gameStartBtn,
  player1Board,
  player2Board,
  dragEventObject,
  changePositionObject,
  player1,
  player2
) => {
  gameStartBtn.addEventListener("click", () => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameStartBtnEventListener);


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
    console.log("droping..");
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
  header.textContent = `${player.name} Won!`;
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
/* harmony import */ var _logic_utility_gameStartBtnEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logic/utility/gameStartBtnEventListener */ "./src/logic/utility/gameStartBtnEventListener.js");


const renderGameStartBtn = (
  player1Board,
  player2Board,
  dragEventObject,
  changePositionObj,
  player1,
  player2
) => {
  if (document.querySelector(".port")) {
    document.querySelector(".port").remove();

    const gameStartBtn = document.createElement("button");
    gameStartBtn.textContent = "Game Start";
    gameStartBtn.classList.add("gameStartBtn");
    document.querySelector(".container-port").appendChild(gameStartBtn);
    (0,_logic_utility_gameStartBtnEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(
      gameStartBtn,
      player1Board,
      player2Board,
      dragEventObject,
      changePositionObj,
      player1,
      player2
    );
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

  portContainer.classList.add("container-port");
  port.classList.add("port");

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
      shipSubset.style.cssText = `
        height:35px;
        width:36px;
      `;
      boat.appendChild(shipSubset);
    }

    boat.classList.add("horizontal");
    boat.style.width = `${ship.getLength() * 36}px`;
    boat.style.height = "35px";
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
      shipSubset.style.cssText = `
        height:36px;
        width:37px;
      `;
      boat.appendChild(shipSubset);
    }
    boat.style.width = "35px";
    boat.style.height = `${ship.getLength() * 36}px`;
    boat.dataset.length = `${ship.getLength()}`;

    boat.dataset.position = `${ship.getPosition()}`;
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
  (0,_renderPlayerSides__WEBPACK_IMPORTED_MODULE_0__.renderPlayer1Side)(player1Board);
  (0,_renderPort_js__WEBPACK_IMPORTED_MODULE_1__.renderPort)(player1Board.getShips());
  const dragEventObj = (0,_logic_utility_dragDrop_js__WEBPACK_IMPORTED_MODULE_2__["default"])(player1Board, player2Board, player1, player2);
  const changePositionObject = (0,_logic_utility_changePosition__WEBPACK_IMPORTED_MODULE_3__["default"])(
    player1Board,
    dragEventObj
  );
  dragEventObj.addEvents(dragEventObj, changePositionObject);
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
/* harmony import */ var _render_renderStartPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/renderStartPage.js */ "./src/render/renderStartPage.js");
/* harmony import */ var _logic_UI_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/UI/UI.js */ "./src/logic/UI/UI.js");



(0,_render_renderStartPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

//UI("j");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNBO0FBQ0k7QUFDRztBQUNaO0FBQ0o7O0FBRXRDO0FBQ0EsYUFBYSw4REFBTTs7QUFFbkIsa0JBQWtCLG1FQUFNO0FBQ3hCLGtCQUFrQixxRUFBUTtBQUMxQix1QkFBdUIsZ0VBQVM7QUFDaEMsdUJBQXVCLGdFQUFTOztBQUVoQztBQUNBO0FBQ0EsRUFBRSxxRUFBUTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJvRDtBQUkvQjs7QUFFdkM7QUFDQTtBQUNBLEVBQUUsNkVBQWdCO0FBQ2xCLEVBQUUsK0VBQWtCO0FBQ3BCLEVBQUUsZ0ZBQW1CO0FBQ3JCOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JNOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQUksZ0JBQWdCLE1BQU07QUFDNUMscUJBQXFCLHNEQUFJLG1CQUFtQixNQUFNO0FBQ2xELGtCQUFrQixzREFBSSxlQUFlLE1BQU07QUFDM0Msb0JBQW9CLHNEQUFJLGtCQUFrQixNQUFNO0FBQ2hELG9CQUFvQixzREFBSSxrQkFBa0IsTUFBTTtBQUNoRCxnQkFBZ0Isc0RBQUksb0JBQW9CLE1BQU07QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixlQUFlLGFBQWE7QUFDdEUsNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCLGVBQWUsYUFBYTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwwQkFBMEIsa0RBQWtEO0FBQzVFLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdlNvQzs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0VBQWlCO0FBQzdDLHlCQUF5QixzRUFBaUI7QUFDMUMsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1p6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhLFNBQVMsc0JBQXNCO0FBQ3JFO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsVUFBVSwwREFBVTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYSxTQUFTLHNCQUFzQjtBQUNuRTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLFFBQVEsMERBQVU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEeUI7QUFDVjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQVU7QUFDOUIsUUFBUSw0REFBZTtBQUN2QjtBQUNBLFFBQVEsNERBQWU7QUFDdkI7QUFDQSxRQUFRLDREQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLDREQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RFU7QUFDMEI7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkIsVUFBVSw0REFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWUscUJBQXFCO0FBQ25EO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWUsNEJBQTRCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDREQUFlO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLCtFQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBRTtBQUNOO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJvQjtBQUNLO0FBQzFCO0FBQ2xELDRFQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRkFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLElBQUksbUVBQVM7QUFDYixJQUFJLGdGQUFrQjtBQUN0QixHQUFHO0FBQ0g7QUFDQSxpRUFBZSx5QkFBeUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBLDJCQUEyQixFQUFFLGVBQWUseUJBQXlCO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlLHVCQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsY0FBYztBQUM3QztBQUNBLDJCQUEyQixFQUFFLGVBQWUseUJBQXlCO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlLHVCQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0EsNkJBQTZCLEVBQUUsZUFBZSx5QkFBeUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZSx1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBLDZCQUE2QixFQUFFLGVBQWUseUJBQXlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaksvQjtBQUNBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFFO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0EsK0JBQStCLGNBQWM7QUFDN0MsNEJBQTRCLFdBQVc7QUFDdkMsc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBLCtCQUErQixjQUFjO0FBQzdDLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRTJDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDc0Q7O0FBRXRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRkFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JpQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUFXO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUFXO0FBQzFDO0FBQ0E7QUFDQTs7QUFFZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlA7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwwREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdEI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2Qyx3Q0FBd0MsZUFBZTtBQUN2RCw4Q0FBOEMsaUJBQWlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQ7QUFDQSxnREFBZ0QsZUFBZTtBQUMvRCw0QkFBNEIsZUFBZTs7QUFFM0MsNkJBQTZCLGlCQUFpQjtBQUM5QywrQkFBK0IsbUJBQW1CO0FBQ2xELElBQUk7QUFDSjtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDLHdDQUF3QyxlQUFlO0FBQ3ZELDhDQUE4QyxpQkFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pELDZCQUE2QixpQkFBaUI7O0FBRTlDLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EOEI7QUFDWDtBQUNXO0FBQ2dCOztBQUV4RTtBQUNBLEVBQUUscUVBQWlCO0FBQ25CLEVBQUUsMERBQVU7QUFDWix1QkFBdUIsc0VBQVM7QUFDaEMsK0JBQStCLHlFQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ2hCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDcEI7O0FBRWxDLHNFQUFXOztBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9VSS9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL1VJL2dhbWVPdmVyVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9nYW1lQm9hcmQvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvcGxheVJvdW5kL3BsYXlSb3VuZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3BsYXllci9jb21wdXRlci9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3BsYXllci9jb21wdXRlci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy91dGlsaXR5L2NlbGxSZWNpZXZlQXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9jaGFuZ2VQb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy91dGlsaXR5L2dhbWVPdmVyQnRuSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvZ2FtZVN0YXJ0QnRuRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljL3V0aWxpdHkvcG9zaXRpb25VdGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbG9naWMvdXRpbGl0eS9zaGlwSWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyU3RhcnRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlckdhbWVPdmVyVWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZVN0YXJ0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlclBsYXllclNpZGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyL3JlbmRlclVJL3JlbmRlclBvcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuLi9nYW1lQm9hcmQvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuLi9wbGF5ZXIvY29tcHV0ZXIvcGxheWVyXCI7XG5pbXBvcnQgY29tcHV0ZXIgZnJvbSBcIi4uL3BsYXllci9jb21wdXRlci9jb21wdXRlclwiO1xuaW1wb3J0IHJlbmRlclVJIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyVUlcIjtcbmltcG9ydCBzaGlwSWQgZnJvbSBcIi4uL3V0aWxpdHkvc2hpcElkLmpzXCI7XG5pbXBvcnQgZ2FtZU92ZXJVSSBmcm9tIFwiLi9nYW1lT3ZlclVJXCI7XG5cbmNvbnN0IFVJID0gKHBsYXllck5hbWUpID0+IHtcbiAgY29uc3QgaWQgPSBzaGlwSWQoKTtcblxuICBjb25zdCBwbGF5ZXIxID0gcGxheWVyKHBsYXllck5hbWUpO1xuICBjb25zdCBwbGF5ZXIyID0gY29tcHV0ZXIoKTtcbiAgY29uc3QgcGxheWVyMUJvYXJkID0gZ2FtZUJvYXJkKGlkKTtcbiAgY29uc3QgcGxheWVyMkJvYXJkID0gZ2FtZUJvYXJkKGlkKTtcblxuICAvL2RlbGV0ZVRoaXNhZnRlcihwbGF5ZXIxQm9hcmQpO1xuICAvL2dhbWVPdmVyVUkoKTtcbiAgcmVuZGVyVUkocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIHBsYXllcjIpO1xufTtcblxuY29uc3QgZGVsZXRlVGhpc2FmdGVyID0gKHBsYXllcjFCb2FyZCkgPT4ge1xuICBwbGF5ZXIxQm9hcmQuZ2V0U2hpcHMoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5zZXRDb29yZChbMCwgMF0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiaW1wb3J0IHJlbmRlckdhbWVPdmVyVUkgZnJvbSBcIi4uLy4uL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJHYW1lT3ZlclVpXCI7XG5pbXBvcnQge1xuICBub0J0bkV2ZW50TGlzdGVuZXIsXG4gIHllc0J0bkV2ZW50TGlzdGVuZXIsXG59IGZyb20gXCIuLi91dGlsaXR5L2dhbWVPdmVyQnRuSGFuZGxlclwiO1xuXG5jb25zdCBnYW1lT3ZlclVJID0gKHBsYXllcikgPT4ge1xuICAvL2NvbnNvbGUubG9nKHBsYXllcik7XG4gIHJlbmRlckdhbWVPdmVyVUkocGxheWVyKTtcbiAgbm9CdG5FdmVudExpc3RlbmVyKCk7XG4gIHllc0J0bkV2ZW50TGlzdGVuZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVPdmVyVUk7XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmNvbnN0IGNlbGwgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3csXG4gICAgY29sdW1uLFxuICAgIGNoYXJDb2RlOiByb3cgKyBcIlwiICsgY29sdW1uLFxuICAgIGNvbnRhaW5zOiBudWxsLFxuICAgIGhpdDogZmFsc2UsXG4gICAgbWlzc2VkOiBmYWxzZSxcbiAgfTtcbn07XG5jb25zdCBnYW1lQm9hcmQgPSAoaWQpID0+IHtcbiAgaWQuaWQrKztcbiAgY29uc3QgY2FycmllciA9IHNoaXAoXCJjYXJyaWVyXCIgKyBgJHtpZC5pZH1gLCA1KTtcbiAgY29uc3QgYmF0dGxlU2hpcCA9IHNoaXAoXCJiYXR0bGVTaGlwXCIgKyBgJHtpZC5pZH1gLCA0KTtcbiAgY29uc3QgY3J1aXNlciA9IHNoaXAoXCJyZWFwZXJcIiArIGAke2lkLmlkfWAsIDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKFwic3VibWFyaW5lXCIgKyBgJHtpZC5pZH1gLCAzKTtcbiAgY29uc3QgZGVzdHJveWVyID0gc2hpcChcImRlc3Ryb3llclwiICsgYCR7aWQuaWR9YCwgMik7XG4gIGNvbnN0IHNjb3V0ID0gc2hpcChcImZpc2hpbmdCb2F0XCIgKyBgJHtpZC5pZH1gLCAyKTtcbiAgLy9jb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVTaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llciwgc2NvdXRdO1xuICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyXTtcblxuICBjb25zdCBib2FyZCA9IFtdO1xuICBsZXQgbnVtYmVyT2ZTdW5rZW5TaGlwID0gMDtcblxuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICByb3cucHVzaChjZWxsKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSwgaiArIDEpKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgY29uc3QgY2hlY2tDZWxsT3BlbiA9IChzdGFydGluZ1gsIHN0YXJ0aW5nWSwgZW5kUG9zaXRpb24sIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFtzdGFydGluZ1ldW2ldLmNvbnRhaW5zICE9IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1k7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bc3RhcnRpbmdYXS5jb250YWlucyAhPSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQm91bmRhcnkgPSAoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBwb3NpdGlvbikgPT4ge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbc3RhcnRpbmdZXVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdZOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrQ2VsbEF0dGFja2VkID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IFt4LCB5XSA9IGNvb3JkO1xuICAgIGlmIChib2FyZFt5XVt4XS5oaXQgPT09IHRydWUgfHwgYm9hcmRbeV1beF0ubWlzc2VkID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHN0YXJ0aW5nUG9zaXRpb24pID0+IHtcbiAgICBpZiAoc2hpcC5nZXRDb29yZCgpICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IFtwcmV2WCwgcHJldlldID0gc2hpcC5nZXRDb29yZCgpO1xuICAgICAgcmVtb3ZlU2hpcChwcmV2WCwgcHJldlksIHNoaXApO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHN0YXJ0aW5nUG9zaXRpb24gKyBcInN0YXJ0aW5nUG9zaXRpb25cIik7XG4gICAgc3RhcnRpbmdQb3NpdGlvbiA9IGFscGhhTnVtQ29vcmRUb051bUNvb3JkKHN0YXJ0aW5nUG9zaXRpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0aW5nUG9zaXRpb24pO1xuICAgIGNvbnN0IFtzdGFydGluZ1gsIHN0YXJ0aW5nWV0gPSBzdGFydGluZ1Bvc2l0aW9uO1xuXG4gICAgaWYgKHNoaXAuZ2V0UG9zaXRpb24oKSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gc3RhcnRpbmdYICsgc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgICBpZiAoIWNoZWNrQm91bmRhcnkoc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBzaGlwLmdldFBvc2l0aW9uKCkpKVxuICAgICAgICByZXR1cm4gXCJvdXQgb2YgYm91bmRzXCI7XG4gICAgICBpZiAoIWNoZWNrQ2VsbE9wZW4oc3RhcnRpbmdYLCBzdGFydGluZ1ksIGVuZFBvc2l0aW9uLCBzaGlwLmdldFBvc2l0aW9uKCkpKVxuICAgICAgICByZXR1cm4gXCJwb3NpdGlvbiBub3Qgb3BlblwiO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0aW5nWV1baV0uY29udGFpbnMgPSBzaGlwO1xuICAgICAgfVxuICAgICAgc2hpcC5zZXRDb29yZChzdGFydGluZ1Bvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBzdGFydGluZ1kgKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgIGlmICghY2hlY2tCb3VuZGFyeShzdGFydGluZ1gsIHN0YXJ0aW5nWSwgZW5kUG9zaXRpb24sIHNoaXAuZ2V0UG9zaXRpb24oKSkpXG4gICAgICAgIHJldHVybiBcIm91dCBvZiBib3VuZHNcIjtcbiAgICAgIGlmICghY2hlY2tDZWxsT3BlbihzdGFydGluZ1gsIHN0YXJ0aW5nWSwgZW5kUG9zaXRpb24sIHNoaXAuZ2V0UG9zaXRpb24oKSkpXG4gICAgICAgIHJldHVybiBcInBvc2l0aW9uIG5vdCBvcGVuXCI7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdZOyBpIDw9IGVuZFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgYm9hcmRbaV1bc3RhcnRpbmdYXS5jb250YWlucyA9IHNoaXA7XG4gICAgICB9XG4gICAgICBzaGlwLnNldENvb3JkKHN0YXJ0aW5nUG9zaXRpb24pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWxwaGFOdW1Db29yZFRvTnVtQ29vcmQgPSAoYWxwaGFOdW1Db29yZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgYWxwaGFOdW1Db29yZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgeCA9IGFscGhhTnVtQ29vcmQubWF0Y2goL1swLTldKy9nKVswXSAtIDE7XG4gICAgICBjb25zdCB5ID0gYWxwaGFOdW1Db29yZC5tYXRjaCgvW2EtekEtWl0vZylbMF0uY2hhckNvZGVBdCgwKSAtIDY1O1xuICAgICAgLy8gY29uc29sZS5sb2coeCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh5KTtcblxuICAgICAgYWxwaGFOdW1Db29yZCA9IFt4LCB5XTtcbiAgICB9XG4gICAgcmV0dXJuIGFscGhhTnVtQ29vcmQ7XG4gIH07XG5cbiAgY29uc3QgbnVtQ29vcmRUb0FscGhhTnVtQ29vcmQgPSAobnVtQ29vcmQpID0+IHtcbiAgICBjb25zdCB4ID0gbnVtQ29vcmRbMF0gKyAxO1xuICAgIGNvbnN0IHkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bUNvb3JkWzFdICsgNjUpO1xuICAgIHJldHVybiB5ICsgeDtcbiAgfTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0aW9uKSA9PiB7XG4gICAgbGV0IFt4LCB5XSA9IGNvb3JkaW5hdGlvbjtcbiAgICBpZiAoYm9hcmRbeV1beF0uY29udGFpbnMgPT0gbnVsbCkge1xuICAgICAgYm9hcmRbeV1beF0ubWlzc2VkID0gdHJ1ZTtcbiAgICAgIC8vcmV0dXJuIGB5b3UndmUgbWlzc2VkIGF0IHBvc2l0aW9uIFske2Nvb3JkaW5hdGlvbn1dYDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW3ldW3hdLmNvbnRhaW5zO1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGJvYXJkW3ldW3hdLmhpdCA9IHRydWU7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBudW1iZXJPZlN1bmtlblNoaXArKztcbiAgICAgICAgaWYgKG51bWJlck9mU3Vua2VuU2hpcCA9PT0gMSlcbiAgICAgICAgICAvLyByZXR1cm4gYFxuICAgICAgICAgIC8vIFlvdSd2ZSBoaXQgJHtzaGlwLmdldE5hbWUoKX0gYXQgcG9zaXRpb24gWyR7Y29vcmRpbmF0aW9ufV1cbiAgICAgICAgICAvLyB5b3UndmUgc3VuayBhICR7c2hpcC5nZXROYW1lKCl9IVxuICAgICAgICAgIC8vIFlvdSd2ZSBzdW5rZW4gYWxsIHRoZSBzaGlwc2A7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNoaXBIaXQ6IHRydWUsXG4gICAgICAgICAgICBzaGlwOiBzaGlwLFxuICAgICAgICAgICAgc2hpcFN1bms6IHRydWUsXG4gICAgICAgICAgICBzdW5rQWxsU2hpcHM6IHRydWUsXG4gICAgICAgICAgICBjb29yZGluYXRpb246IG51bUNvb3JkVG9BbHBoYU51bUNvb3JkKGNvb3JkaW5hdGlvbiksXG4gICAgICAgICAgfTtcbiAgICAgICAgLy8gcmV0dXJuIGB5b3UndmUgc3VuayBhICR7c2hpcC5nZXROYW1lKCl9IWA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hpcEhpdDogdHJ1ZSxcbiAgICAgICAgICBzaGlwOiBzaGlwLFxuICAgICAgICAgIHNoaXBTdW5rOiB0cnVlLFxuICAgICAgICAgIHN1bmtBbGxTaGlwczogZmFsc2UsXG4gICAgICAgICAgY29vcmRpbmF0aW9uOiBudW1Db29yZFRvQWxwaGFOdW1Db29yZChjb29yZGluYXRpb24pLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy9yZXR1cm4gYFlvdSd2ZSBoaXQgJHtzaGlwLmdldE5hbWUoKX0gYXQgcG9zaXRpb24gWyR7Y29vcmRpbmF0aW9ufV1gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hpcEhpdDogdHJ1ZSxcbiAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgc2hpcFN1bms6IGZhbHNlLFxuICAgICAgICBzdW5rQWxsU2hpcHM6IGZhbHNlLFxuICAgICAgICBjb29yZGluYXRpb246IG51bUNvb3JkVG9BbHBoYU51bUNvb3JkKGNvb3JkaW5hdGlvbiksXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0dXJuU2hpcCA9IChuYW1lKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW2ldW2pdLmNvbnRhaW5zO1xuICAgICAgICBpZiAoc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHNoaXAuZ2V0TmFtZSgpID09PSBuYW1lKSB7XG4gICAgICAgICAgICBsZXQgZW5kUG9zaXRpb247XG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdYLCBzdGFydGluZ1k7XG4gICAgICAgICAgICBsZXQgdGVtcFBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0UG9zaXRpb24oKSA9PT0gXCJob3Jpem9udGFsXCIpIHRlbXBQb3NpdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICAgICAgICAgIGVsc2UgdGVtcFBvc2l0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wUG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgIGVuZFBvc2l0aW9uID0gaiArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgICAgICAgICAgICBzdGFydGluZ1ggPSBqICsgMTtcbiAgICAgICAgICAgICAgc3RhcnRpbmdZID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZFBvc2l0aW9uID0gaSArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgICAgICAgICAgICBzdGFydGluZ1kgPSBpICsgMTtcbiAgICAgICAgICAgICAgc3RhcnRpbmdYID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2hlY2tCb3VuZGFyeShzdGFydGluZ1gsIHN0YXJ0aW5nWSwgZW5kUG9zaXRpb24sIHRlbXBQb3NpdGlvbikpXG4gICAgICAgICAgICAgIHJldHVybiBcIm91dCBvZiBib3VuZHNcIjtcbiAgICAgICAgICAgIGlmICghY2hlY2tDZWxsT3BlbihzdGFydGluZ1gsIHN0YXJ0aW5nWSwgZW5kUG9zaXRpb24sIHRlbXBQb3NpdGlvbikpXG4gICAgICAgICAgICAgIHJldHVybiBcInBvc2l0aW9uIG5vdCBvcGVuXCI7XG4gICAgICAgICAgICByZW1vdmVTaGlwKGosIGksIHNoaXApO1xuICAgICAgICAgICAgc2hpcC5jaGFuZ2VQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBwbGFjZVNoaXAoc2hpcCwgW2osIGldKTtcbiAgICAgICAgICAgIHJldHVybiBcInNoaXAgdHVybmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAoc3RhcnRpbmdYLCBzdGFydGluZ1ksIHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5nZXRQb3NpdGlvbigpID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBzdGFydGluZ1ggKyBzaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPD0gZW5kUG9zaXRpb247IGkrKykge1xuICAgICAgICBib2FyZFtzdGFydGluZ1ldW2ldLmNvbnRhaW5zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAuZ2V0UG9zaXRpb24oKSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBlbmRQb3NpdGlvbiA9IHN0YXJ0aW5nWSArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWTsgaSA8PSBlbmRQb3NpdGlvbjsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2ldW3N0YXJ0aW5nWF0uY29udGFpbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgbGV0IHByaW50Um93ID0gXCJcIjtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5jb250YWlucyA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNvbHVtbi5taXNzZWQgPT09IGZhbHNlKSBwcmludFJvdyArPSBgIG9gO1xuICAgICAgICAgIGVsc2UgcHJpbnRSb3cgKz0gYCB4YDtcbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4uaGl0ID09PSB0cnVlKSBwcmludFJvdyArPSBgIEhgO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcHJpbnRSb3cgKz0gYCAke2NvbHVtbi5jb250YWlucy5nZXROYW1lKCkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocHJpbnRSb3cpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcztcbiAgfTtcbiAgY29uc3QgZmluZFNoaXAgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGlmIChzaGlwLmdldE5hbWUoKSA9PT0gc2hpcE5hbWUpIHJldHVybiBzaGlwO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdXRvUGNCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21WSFBvc2l0aW9uID0gKHgsIHNoaXApID0+IHtcbiAgICAgIGlmICh4ICUgMiA9PT0gMCkgc2hpcC5jaGFuZ2VQb3NpdGlvbigpO1xuICAgIH07XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHJhbmRvbVZIUG9zaXRpb24oeCwgc2hpcCk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXG4gICAgICAgIC8vICAgICBbeCwgeV0gK1xuICAgICAgICAvLyAgICAgICBcIiBcIiArXG4gICAgICAgIC8vICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKSArXG4gICAgICAgIC8vICAgICAgIFwiIFwiICtcbiAgICAgICAgLy8gICAgICAgc2hpcC5nZXRDb29yZCgpICtcbiAgICAgICAgLy8gICAgICAgXCIgXCIgK1xuICAgICAgICAvLyAgICAgICBzaGlwLmdldE5hbWUoKVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCBbeCwgeV0pO1xuICAgICAgICBpZiAoc2hpcC5nZXRDb29yZCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaGlwUGxhY2VkXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3NoaXAuZ2V0Q29vcmQoKX1gKTtcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoc2hpcC5nZXRDb29yZCgpID09IG51bGwpO1xuICAgIH1cbiAgICBwcmludEJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNPbkJvYXJkID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgaWYgKHNoaXAuZ2V0Q29vcmQoKSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGdldEJvYXJkLFxuICAgIGNoZWNrQ2VsbEF0dGFja2VkLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgdHVyblNoaXAsXG4gICAgcHJpbnRCb2FyZCxcbiAgICBnZXRTaGlwcyxcbiAgICBmaW5kU2hpcCxcbiAgICBudW1Db29yZFRvQWxwaGFOdW1Db29yZCxcbiAgICBhdXRvUGNCb2FyZCxcbiAgICBhbHBoYU51bUNvb3JkVG9OdW1Db29yZCxcbiAgICBhbGxTaGlwc09uQm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCJpbXBvcnQgY2VsbFJlY2lldmVBdHRhY2sgZnJvbSBcIi4uL3V0aWxpdHkvY2VsbFJlY2lldmVBdHRhY2tcIjtcblxuY29uc3QgcGxheVJvdW5kID0gKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGNvbnN0IHBsYXllcjJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFpbmVyLXBsYXllcjIgLmNlbGxcIik7XG4gIHBsYXllcjJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllcjFBdHRhY2sgPSBjZWxsUmVjaWV2ZUF0dGFjayhwbGF5ZXIyQm9hcmQsIHBsYXllcjEsIGUpO1xuICAgICAgaWYgKHBsYXllcjFBdHRhY2spIGNlbGxSZWNpZXZlQXR0YWNrKHBsYXllcjFCb2FyZCwgcGxheWVyMik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheVJvdW5kO1xuIiwiY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4gIGxldCBjb29yZFRvQXR0YWNrO1xuXG4gIGNvbnN0IG1ha2VNb3ZlID0gKGJvYXJkKSA9PiB7XG4gICAgbGV0IHBhc3MgPSBmYWxzZTtcbiAgICBkbyB7XG4gICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvb3JkVG9BdHRhY2sgPSBbcmFuZG9tWCwgcmFuZG9tWV07XG5cbiAgICAgIGlmIChib2FyZC5jaGVja0NlbGxBdHRhY2tlZChjb29yZFRvQXR0YWNrKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGFzcyA9IHRydWU7XG4gICAgICAgIHJldHVybiBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkVG9BdHRhY2spO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHBhc3MgPT0gZmFsc2UpO1xuICB9O1xuICBjb25zdCBnZXRDb29yZFRvQXR0YWNrID0gKCkgPT4ge1xuICAgIHJldHVybiBjb29yZFRvQXR0YWNrO1xuICB9O1xuICByZXR1cm4geyBuYW1lOiBcIkNvbXB1dGVyXCIsIG1ha2VNb3ZlLCBnZXRDb29yZFRvQXR0YWNrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wdXRlcjtcbiIsImNvbnN0IHBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IG1ha2VNb3ZlID0gKGJvYXJkLCBjb29yZCkgPT4ge1xuICAgIGlmIChib2FyZC5jaGVja0NlbGxBdHRhY2tlZChjb29yZCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBuYW1lLCBtYWtlTW92ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiY29uc3Qgc2hpcCA9IChuYW1lLCBsZW5ndGgsIHBvc2l0aW9uID0gXCJob3Jpem9udGFsXCIsIGNvb3JkID0gbnVsbCkgPT4ge1xuICBsZXQgdGltZXNIaXQgPSAwO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgdGltZXNIaXQrKztcbiAgfTtcbiAgY29uc3QgZ2V0VGltZXNIaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWVzSGl0O1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aCA9PT0gdGltZXNIaXQgPyB0cnVlIDogZmFsc2U7XG4gIH07XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG4gIGNvbnN0IGdldENvb3JkID0gKCkgPT4ge1xuICAgIHJldHVybiBjb29yZDtcbiAgfTtcbiAgY29uc3Qgc2V0Q29vcmQgPSAoY29vcmRpbmF0aW9uKSA9PiB7XG4gICAgY29vcmQgPSBjb29yZGluYXRpb247XG4gIH07XG4gIGNvbnN0IGNoYW5nZVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHBvc2l0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIGVsc2UgcG9zaXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGhpdCxcbiAgICBnZXRUaW1lc0hpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0UG9zaXRpb24sXG4gICAgY2hhbmdlUG9zaXRpb24sXG4gICAgZ2V0Q29vcmQsXG4gICAgc2V0Q29vcmQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiaW1wb3J0IGdhbWVPdmVyVUkgZnJvbSBcIi4uL1VJL2dhbWVPdmVyVUlcIjtcbmNvbnN0IGNlbGxSZWNpZXZlQXR0YWNrID0gKHBsYXllckJvYXJkLCBwbGF5ZXIsIGUpID0+IHtcbiAgLy8gY29uc29sZS5sb2coXG4gIC8vICAgcGxheWVyQm9hcmQuYWxwaGFOdW1Db29yZFRvTnVtQ29vcmQoZS50YXJnZXQuZGF0YXNldC5hbHBoYW51bWNvb3JkKVxuICAvLyApO1xuICBpZiAoZSkge1xuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLm1ha2VNb3ZlKFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgcGxheWVyQm9hcmQuYWxwaGFOdW1Db29yZFRvTnVtQ29vcmQoZS50YXJnZXQuZGF0YXNldC5hbHBoYW51bWNvb3JkKVxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuc2hpcFN1bmspXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHNhbmsgYSAke3Jlc3VsdC5zaGlwLmdldE5hbWUoKX1gKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdW5rQWxsU2hpcHMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIubmFtZX0gc2FuayBhbGwgc2hpcHMhIGdhbWUgb3ZlciFgKTtcbiAgICAgICAgICBnYW1lT3ZlclVJKHBsYXllcik7XG4gICAgICAgIH1cblxuICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIkhcIjtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIH0gZWxzZSBlLnRhcmdldC5pbm5lckhUTUwgKz0gXCJYXCI7XG4gICAgICBwbGF5ZXJCb2FyZC5wcmludEJvYXJkKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5tYWtlTW92ZShwbGF5ZXJCb2FyZCk7XG4gICAgY29uc3QgZnJvbnRQbGF5ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuY29udGFpbmVyLXBsYXllcjEgW2RhdGEtYWxwaGFudW1jb29yZD0nJHtwbGF5ZXJCb2FyZC5udW1Db29yZFRvQWxwaGFOdW1Db29yZChcbiAgICAgICAgcGxheWVyLmdldENvb3JkVG9BdHRhY2soKVxuICAgICAgKX0nXWBcbiAgICApO1xuICAgIC8vY29uc29sZS5sb2coZnJvbnRQbGF5ZXJDZWxsKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAocmVzdWx0LnNoaXBTdW5rKVxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIubmFtZX0gc2FuayBhICR7cmVzdWx0LnNoaXAuZ2V0TmFtZSgpfWApO1xuICAgICAgaWYgKHJlc3VsdC5zdW5rQWxsU2hpcHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHNhbmsgYWxsIHNoaXBzIEdhbWUgT3ZlciFgKTtcbiAgICAgICAgZ2FtZU92ZXJVSShwbGF5ZXIpO1xuICAgICAgfVxuXG4gICAgICBmcm9udFBsYXllckNlbGwuaW5uZXJIVE1MID0gXCJIXCI7XG4gICAgICBmcm9udFBsYXllckNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9IGVsc2UgZnJvbnRQbGF5ZXJDZWxsLmlubmVySFRNTCArPSBcIlhcIjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2VsbFJlY2lldmVBdHRhY2s7XG4iLCJpbXBvcnQgcmVuZGVyU2hpcCBmcm9tIFwiLi4vLi4vcmVuZGVyL3JlbmRlclVJL3JlbmRlclNoaXBcIjtcbmltcG9ydCBwb3NpdGlvblV0aWxpdHkgZnJvbSBcIi4vcG9zaXRpb25VdGlsaXR5XCI7XG5cbmNvbnN0IGNoYW5nZVBvc2l0aW9uTGlzdGVuZXIgPSAoYm9hcmQsIGRyYWdFdmVudE9iamVjdCkgPT4ge1xuICBjb25zdCBzaGlwU3Vic2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFN1YnNldFwiKTtcbiAgY29uc3QgY2hhbmdlUG9zaXRpb25GdW5jSG9sZGVyID0gKGUpID0+IHtcbiAgICBjaGFuZ2VQb3NpdGlvbihib2FyZCwgZSwgZHJhZ0V2ZW50T2JqZWN0KTtcbiAgfTtcbiAgY29uc3QgYWRkRXZlbnRzID0gKCgpID0+IHtcbiAgICBzaGlwU3Vic2V0cy5mb3JFYWNoKChzaGlwU3Vic2V0KSA9PiB7XG4gICAgICBzaGlwU3Vic2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQb3NpdGlvbkZ1bmNIb2xkZXIpO1xuICAgIH0pO1xuICB9KSgpO1xuICBjb25zdCByZW1vdmVFdmVudHMgPSAoKSA9PiB7XG4gICAgc2hpcFN1YnNldHMuZm9yRWFjaCgoc2hpcFN1YnNldCkgPT4ge1xuICAgICAgc2hpcFN1YnNldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUG9zaXRpb25GdW5jSG9sZGVyKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgcmVtb3ZlRXZlbnRzIH07XG59O1xuY29uc3QgY2hhbmdlUG9zaXRpb24gPSAoYm9hcmQsIGUsIGRyYWdFdmVudE9iamVjdCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICBpZiAoc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJkb2NrXCIpKSB7XG4gICAgLy8gY29uc3Qgc2hpcCA9IGJvYXJkLmZpbmRTaGlwKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIC8vIHNoaXAuY2hhbmdlUG9zaXRpb24oKTtcbiAgICAvLyBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vIGNvbnN0IG5ld1NoaXAgPSByZW5kZXJTaGlwKHNoaXApO1xuICAgIC8vIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gICAgLy8gZHJhZ0V2ZW50T2JqZWN0LnJlY2FsbERyYWdFdmVudHMoKTtcbiAgICAvLyBuZXdTaGlwLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAvLyAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgY2hhbmdlUG9zaXRpb24oYm9hcmQsIGV2ZW50LCBkcmFnRXZlbnRPYmplY3QpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cbiAgaWYgKHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5maW5kU2hpcChlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICBib2FyZC50dXJuU2hpcChzaGlwLmdldE5hbWUoKSk7XG4gICAgYm9hcmQucHJpbnRCb2FyZCgpO1xuICAgIGNvbnN0IG5ld1NoaXAgPSByZW5kZXJTaGlwKHNoaXApO1xuICAgIGlmIChwb3NpdGlvblV0aWxpdHkoKS5jaGVja0JvdW5kYXJ5KHNoaXBDb250YWluZXIsIG5ld1NoaXApKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmNoZWNrQ2VsbEF2YWlsYWJpbGl0eShzaGlwQ29udGFpbmVyLCBuZXdTaGlwLCB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmVuYWJsZUNlbGwoc2hpcENvbnRhaW5lciwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XG4gICAgICAgIHBvc2l0aW9uVXRpbGl0eSgpLmRpc2FibGVDZWxsKHNoaXBDb250YWluZXIsIG5ld1NoaXApO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGRyYWdFdmVudE9iamVjdCk7XG4gICAgZHJhZ0V2ZW50T2JqZWN0LnJlY2FsbERyYWdFdmVudHMoKTtcblxuICAgIG5ld1NoaXAuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBjaGFuZ2VQb3NpdGlvbihib2FyZCwgZXZlbnQsIGRyYWdFdmVudE9iamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlUG9zaXRpb25MaXN0ZW5lcjtcbiIsImltcG9ydCBwb3NpdGlvblV0aWxpdHkgZnJvbSBcIi4vcG9zaXRpb25VdGlsaXR5XCI7XG5pbXBvcnQgcmVuZGVyR2FtZVN0YXJ0QnRuIGZyb20gXCIuLi8uLi9yZW5kZXIvcmVuZGVyVUkvcmVuZGVyR2FtZVN0YXJ0QnRuXCI7XG5cbmNvbnN0IGRyYWdFdmVudCA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICBsZXQgZHJhZ2dlZCA9IG51bGw7XG4gIGxldCBzaGlwU3Vic2V0ID0gbnVsbDtcbiAgbGV0IGRyYWdFdmVudE9iajtcbiAgbGV0IGNoYW5nZVBvc2l0aW9uT2JqO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcblxuICBjb25zdCBtb3VzZURvd25FdmVudCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBTdWJzZXRcIikpIHtcbiAgICAgIHNoaXBTdWJzZXQgPSBlLnRhcmdldC5kYXRhc2V0LnN1YnNldDtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ3N0YXJ0RXZlbnQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZ3N0YXJ0aW5nXCIpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkge1xuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSlcbiAgICAgICAgcG9zaXRpb25VdGlsaXR5KCkuZW5hYmxlQ2VsbChlLnRhcmdldC5wYXJlbnROb2RlLCBlLnRhcmdldCk7XG4gICAgICBkcmFnZ2VkID0gZS50YXJnZXQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdlbmRFdmVudCA9IChlKSA9PiB7XG4gICAgcmV0dXJuIFwiZHJhZyBlbmRpbmdcIjtcbiAgfTtcbiAgY29uc3QgZHJhZ292ZXJFdmVudCA9IChlKSA9PiB7XG4gICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcbiAgY29uc3QgZHJvcEV2ZW50ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGlmIChwb3NpdGlvblV0aWxpdHkoKS5jaGVja0JvdW5kYXJ5KGUudGFyZ2V0LCBkcmFnZ2VkKSkge1xuICAgICAgaWYgKHBvc2l0aW9uVXRpbGl0eSgpLmNoZWNrQ2VsbEF2YWlsYWJpbGl0eShlLnRhcmdldCwgZHJhZ2dlZCkpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3BwYWJsZVwiKSkge1xuICAgICAgICAgIGxldCByZWFsQ2VsbFRvQXBwZW5kO1xuICAgICAgICAgIGlmIChkcmFnZ2VkLmRhdGFzZXQucG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICByZWFsQ2VsbFRvQXBwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5jb2x1bW4gLSAoc2hpcFN1YnNldCAtIDEpXG4gICAgICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke2UudGFyZ2V0LmRhdGFzZXQucm93fVwiXWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9XG4gICAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQucm93LmNoYXJDb2RlQXQoMCkgLSAoc2hpcFN1YnNldCAtIDEpO1xuICAgICAgICAgICAgcmVhbENlbGxUb0FwcGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gICAgICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUobmV3Um93KX1cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XG4gICAgICAgICAgcmVhbENlbGxUb0FwcGVuZC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcblxuICAgICAgICAgIHBsYXllcjFCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZmluZFNoaXAoZHJhZ2dlZC5pZCksXG4gICAgICAgICAgICByZWFsQ2VsbFRvQXBwZW5kLmRhdGFzZXQuYWxwaGFudW1jb29yZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcGxheWVyMUJvYXJkLnByaW50Qm9hcmQoKTtcbiAgICAgICAgICBwb3NpdGlvblV0aWxpdHkoKS5kaXNhYmxlQ2VsbChyZWFsQ2VsbFRvQXBwZW5kLCBkcmFnZ2VkKTtcbiAgICAgICAgICBpZiAocGxheWVyMUJvYXJkLmFsbFNoaXBzT25Cb2FyZCgpID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsU2hpcE9uQm9hcmRcIik7XG4gICAgICAgICAgICByZW5kZXJHYW1lU3RhcnRCdG4oXG4gICAgICAgICAgICAgIHBsYXllcjFCb2FyZCxcbiAgICAgICAgICAgICAgcGxheWVyMkJvYXJkLFxuICAgICAgICAgICAgICBkcmFnRXZlbnRPYmosXG4gICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uT2JqLFxuICAgICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgICBwbGF5ZXIyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgZXZlbnRzLi5cIik7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bkV2ZW50KTtcblxuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydEV2ZW50KTtcblxuICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnZW5kRXZlbnQpO1xuICAgIH0pO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ292ZXJFdmVudCk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wRXZlbnQpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBhZGRFdmVudHMgPSAoZHJhZ0V2ZW50T2JqZWN0LCBjaGFuZ2VQb3NpdGlvbk9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIGRyYWdFdmVudE9iaiA9IGRyYWdFdmVudE9iamVjdDtcbiAgICBjaGFuZ2VQb3NpdGlvbk9iaiA9IGNoYW5nZVBvc2l0aW9uT2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nRXZlbnRzLi4uXCIpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudCk7XG5cbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRFdmVudCk7XG5cbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ2VuZEV2ZW50KTtcbiAgICB9KTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdvdmVyRXZlbnQpO1xuICAgIH0pO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcEV2ZW50KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVjYWxsRHJhZ0V2ZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVFdmVudHMoKTtcbiAgICBhZGRFdmVudHMoKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRFdmVudHMsIHJlY2FsbERyYWdFdmVudHMsIHJlbW92ZUV2ZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhZ0V2ZW50O1xuIiwiaW1wb3J0IFVJIGZyb20gXCIuLi9VSS9VSVwiO1xuXG5jb25zdCB5ZXNCdG5FdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllc0J0blwiKTtcbiAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItbWFpblwiKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgVUkoXCJqXCIpO1xuICAgIHllc0J0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgfSk7XG59O1xuY29uc3Qgbm9CdG5FdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBub0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm9CdG5cIik7XG5cbiAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub0J0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUudGV4dENvbnRlbnQgPSBcIkdBTUUgT1ZFUlwiO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHllc0J0bkV2ZW50TGlzdGVuZXIsIG5vQnRuRXZlbnRMaXN0ZW5lciB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyU2hpcHNUb0JvYXJkIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9yZW5kZXJVSS9yZW5kZXJCb2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVyUGxheWVyMlNpZGUgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL3JlbmRlclVJL3JlbmRlclBsYXllclNpZGVzXCI7XG5pbXBvcnQgcGxheVJvdW5kIGZyb20gXCIuLi9wbGF5Um91bmQvcGxheVJvdW5kLmpzXCI7XG5yZW5kZXJTaGlwc1RvQm9hcmQ7XG5cbmNvbnN0IGdhbWVTdGFydEJ0bkV2ZW50TGlzdGVuZXIgPSAoXG4gIGdhbWVTdGFydEJ0bixcbiAgcGxheWVyMUJvYXJkLFxuICBwbGF5ZXIyQm9hcmQsXG4gIGRyYWdFdmVudE9iamVjdCxcbiAgY2hhbmdlUG9zaXRpb25PYmplY3QsXG4gIHBsYXllcjEsXG4gIHBsYXllcjJcbikgPT4ge1xuICBnYW1lU3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1wb3J0XCIpLnJlbW92ZSgpO1xuICAgIHBsYXllcjJCb2FyZC5hdXRvUGNCb2FyZCgpO1xuICAgIHJlbmRlclBsYXllcjJTaWRlKHBsYXllcjJCb2FyZCk7XG4gICAgLy8gY29uc29sZS5sb2coZHJhZ0V2ZW50T2JqZWN0KTtcbiAgICAvLyAvL2RyYWdFdmVudE9iamVjdC5yZW1vdmVFdmVudHMoKTtcblxuICAgIC8vY2hhbmdlUG9zaXRpb25PYmplY3QucmVtb3ZlRXZlbnRzKCk7XG4gICAgcGxheVJvdW5kKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICByZW5kZXJTaGlwc1RvQm9hcmQocGxheWVyMUJvYXJkKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZVN0YXJ0QnRuRXZlbnRMaXN0ZW5lcjtcbiIsImNvbnN0IHBvc2l0aW9uVXRpbGl0eSA9ICgpID0+IHtcbiAgY29uc3QgZGlzYWJsZUNlbGwgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwKSA9PiB7XG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgZGlzYWJsZVRvID1cbiAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZGlzYWJsZUZyb207IGkgPCBkaXNhYmxlVG87IGkrKykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBkaXNhYmxlRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgY29uc3QgZGlzYWJsZVRvID0gZGlzYWJsZUZyb20gKyBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGRpc2FibGVGcm9tOyBpIDwgZGlzYWJsZVRvOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVuYWJsZUNlbGwgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlbmFibGluZyBDZWxsLi4uLlwiKTtcbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgZW5hYmxlRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgIGNvbnN0IGVuYWJsZVRvID1cbiAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZW5hYmxlRnJvbTsgaSA8IGVuYWJsZVRvOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtpfVwiXVtkYXRhLXJvdz1cIiR7c3RhcnRpbmdDZWxsLmRhdGFzZXQucm93fVwiXWBcbiAgICAgICAgKS5kYXRhc2V0LmF2YWlsYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBkaXNhYmxlRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgY29uc3QgZGlzYWJsZVRvID0gZGlzYWJsZUZyb20gKyBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGRpc2FibGVGcm9tOyBpIDwgZGlzYWJsZVRvOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgIH1cIl1bZGF0YS1yb3c9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUoaSl9XCJdYFxuICAgICAgICApLmRhdGFzZXQuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tDZWxsQXZhaWxhYmlsaXR5ID0gKHN0YXJ0aW5nQ2VsbCwgdGFyZ2V0U2hpcCwgcG9zaXRpb25DaGFuZ2UpID0+IHtcbiAgICBpZiAoc3RhcnRpbmdDZWxsLmNsYXNzTmFtZSA9PT0gXCJzaGlwU3Vic2V0XCIpIHtcbiAgICAgIHN0YXJ0aW5nQ2VsbCA9IHN0YXJ0aW5nQ2VsbC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBsZXQgY2hlY2tGcm9tO1xuICAgICAgaWYgKHBvc2l0aW9uQ2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgIGNoZWNrRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbiArIDE7XG4gICAgICB9IGVsc2UgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgY2hlY2tUbyA9XG4gICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbikgK1xuICAgICAgICBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGNoZWNrRnJvbTsgaSA8IGNoZWNrVG87IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICAgICkuZGF0YXNldC5hdmFpbGFibGUgPT09IFwiZmFsc2VcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNlbGwgbm90IGF2YWlsYWJsZSBjaG9vc2UgYW5vdGhlclwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCBjaGVja0Zyb207XG4gICAgICBpZiAocG9zaXRpb25DaGFuZ2UgPT09IHRydWUpXG4gICAgICAgIGNoZWNrRnJvbSA9IHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LnJvdy5jaGFyQ29kZUF0KDApICsgMTtcbiAgICAgIGVsc2UgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQucm93LmNoYXJDb2RlQXQoMCk7XG4gICAgICBjb25zdCBjaGVja1RvID0gY2hlY2tGcm9tICsgcGFyc2VJbnQodGFyZ2V0U2hpcC5kYXRhc2V0Lmxlbmd0aCkgLSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gY2hlY2tGcm9tOyBpIDwgY2hlY2tUbzsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7XG4gICAgICAgICAgICAgIHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtblxuICAgICAgICAgICAgfVwiXVtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX1cIl1gXG4gICAgICAgICAgKS5kYXRhc2V0LmF2YWlsYWJsZSA9PT0gXCJmYWxzZVwiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2VsbCBub3QgYXZhaWxhYmxlIGNob29zZSBhbm90aGVyXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrQm91bmRhcnkgPSAoc3RhcnRpbmdDZWxsLCB0YXJnZXRTaGlwKSA9PiB7XG4gICAgaWYgKHN0YXJ0aW5nQ2VsbC5jbGFzc05hbWUgPT09IFwic2hpcFN1YnNldFwiKSB7XG4gICAgICBzdGFydGluZ0NlbGwgPSBzdGFydGluZ0NlbGwucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImRyb3BpbmcuLlwiKTtcbiAgICAvL3JldHVybiBjb25zb2xlLmxvZyh0YXJnZXRTaGlwKTtcbiAgICBpZiAodGFyZ2V0U2hpcC5kYXRhc2V0LnBvc2l0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgY2hlY2tGcm9tID0gc3RhcnRpbmdDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgY29uc3QgY2hlY2tUbyA9XG4gICAgICAgIHBhcnNlSW50KHN0YXJ0aW5nQ2VsbC5kYXRhc2V0LmNvbHVtbikgK1xuICAgICAgICBwYXJzZUludCh0YXJnZXRTaGlwLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IGNoZWNrRnJvbTsgaSA8IGNoZWNrVG87IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2l9XCJdW2RhdGEtcm93PVwiJHtzdGFydGluZ0NlbGwuZGF0YXNldC5yb3d9XCJdYFxuICAgICAgICAgICkgPT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJQbGFjZW1lbnQgb3V0b2Zib3VuZCwgcGljayBhbm90aGVyIHNwb3RcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldFNoaXAuZGF0YXNldC5wb3NpdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCBjaGVja0Zyb20gPSBzdGFydGluZ0NlbGwuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKTtcbiAgICAgIGNvbnN0IGNoZWNrVG8gPVxuICAgICAgICBzdGFydGluZ0NlbGwuZGF0YXNldC5yb3cuY2hhckNvZGVBdCgwKSArXG4gICAgICAgIHBhcnNlSW50KHRhcmdldFNoaXAuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gY2hlY2tGcm9tOyBpIDwgY2hlY2tUbzsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLXJvdz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKX1cIl1bZGF0YS1jb2x1bW49XCIke1xuICAgICAgICAgICAgICBzdGFydGluZ0NlbGwuZGF0YXNldC5jb2x1bW5cbiAgICAgICAgICAgIH1cIl1gXG4gICAgICAgICAgKSA9PT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYWNlbWVudCBvdXRvZmJvdW5kLCBwaWNrIGFub3RoZXIgc3BvdFwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRTaGlwLmRhdGFzZXQucG9zaXRpb24gPT09IFwiXCIpIHJldHVybiBcInBvc2l0aW9uIG5vdCBzZXRcIjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc2FibGVDZWxsLFxuICAgIGVuYWJsZUNlbGwsXG4gICAgY2hlY2tCb3VuZGFyeSxcbiAgICBjaGVja0NlbGxBdmFpbGFiaWxpdHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblV0aWxpdHk7XG4iLCJjb25zdCBzaGlwSWQgPSAoKSA9PiB7XG4gIHJldHVybiB7IGlkOiAwIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwSWQ7XG4iLCJpbXBvcnQgVUkgZnJvbSBcIi4uL2xvZ2ljL1VJL1VJLmpzXCI7XG5cbmNvbnN0IHJlbmRlclN0YXJ0ID0gKCkgPT4ge1xuICBjb25zdCBzdGFydFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdGFydFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHN5c3RlbU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZVNoaXBcIjtcbiAgcHJvbXB0LnRleHRDb250ZW50ID0gXCJFbnRlciB5b3VyIE5hbWVcIjtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCI7XG5cbiAgc3RhcnRQYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItc3RhcnRQYWdlXCIpO1xuICBzeXN0ZW1Nc2cuY2xhc3NMaXN0LmFkZChcInN0YXJ0U3lzdGVtTXNnXCIpO1xuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnRCdG5cIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJuYW1lSW5wdXRcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzdGFydFRpdGxlXCIpO1xuICBwcm9tcHQuY2xhc3NMaXN0LmFkZChcInN0YXJ0UHJvbXB0XCIpO1xuICBzdGFydFBhZ2UuY2xhc3NMaXN0LmFkZChcInN0YXJ0UGFnZVwiKTtcblxuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBzdGFydFBhZ2UuYXBwZW5kQ2hpbGQocHJvbXB0KTtcbiAgc3RhcnRQYWdlLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgc3RhcnRQYWdlLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbiAgc3RhcnRQYWdlLmFwcGVuZENoaWxkKHN5c3RlbU1zZyk7XG4gIHN0YXJ0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydFBhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXJ0UGFnZUNvbnRhaW5lcik7XG5cbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHN0YXJ0UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBzdGFydFBhZ2VDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBVSShpbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5c3RlbU1zZy50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIHlvdXIgZ2FtZSBuYW1lXCI7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclN0YXJ0O1xuIiwiY29uc3QgcmVuZGVyQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLUJvYXJkXCIpO1xuXG4gIGJvYXJkLmdldEJvYXJkKCkuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgci5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIHIuY2xhc3NMaXN0LmFkZChgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSl9YCk7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gYCR7Y29sdW1uLmNvbHVtbn1gO1xuICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGAke2NvbHVtbi5yb3d9YDtcbiAgICAgIGNlbGwuZGF0YXNldC5hbHBoYW51bWNvb3JkID0gYCR7Y29sdW1uLmNoYXJDb2RlfWA7XG4gICAgICBjZWxsLmRhdGFzZXQuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIC8vIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtjb2x1bW4uY29sdW1ufWApO1xuICAgICAgLy8gY2VsbC5jbGFzc0xpc3QuYWRkKGAke2NvbHVtbi5jaGFyQ29kZX1gKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGVcIik7XG4gICAgICByLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lckJvYXJkLmFwcGVuZENoaWxkKHIpO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyQm9hcmQ7XG59O1xuXG5jb25zdCByZW5kZXJTaGlwc1RvQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgLy8gYm9hcmQuZ2V0U2hpcHMoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gIC8vICAgY29uc3QgYWxwaGFOdW1Db29yZCA9IGJvYXJkLm51bUNvb3JkVG9BbHBoYU51bUNvb3JkKHNoaXAuZ2V0Q29vcmQoKSk7XG4gIC8vICAgLy9jb25zb2xlLmxvZyhhbHBoYU51bUNvb3JkKTtcbiAgLy8gICBjb25zdCBmcm9udENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgYC5jb250YWluZXItcGxheWVyMiBbZGF0YS1hbHBoYW51bWNvb3JkPScke2FscGhhTnVtQ29vcmR9J11gXG4gIC8vICAgKTtcbiAgLy8gICAvL1tkYXRhLWFscGhhbnVtY29vcmQ9JyR7YWxwaGFOdW1Db29yZH0nXVxuICAvLyAgIGNvbnNvbGUubG9nKFwicmVuZGVyU2hpcHNUb0JvYXJkXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKGZyb250Q2VsbCk7XG4gIC8vICAgLy9jb25zb2xlLmxvZyhib2FyZC5udW1Db29yZFRvQWxwaGFOdW1Db29yZChzaGlwLmdldENvb3JkKCkpKTtcbiAgLy8gICBmcm9udENlbGwuYXBwZW5kQ2hpbGQocmVuZGVyU2hpcChzaGlwKSk7XG4gIC8vIH0pO1xuICBib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4uY29udGFpbnMpIHtcbiAgICAgICAgY29uc3QgZnJvbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmNvbnRhaW5lci1wbGF5ZXIxIFtkYXRhLWFscGhhbnVtY29vcmQ9JyR7Y29sdW1uLmNoYXJDb2RlfSddYFxuICAgICAgICApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGZyb250Q2VsbCk7XG4gICAgICAgIGZyb250Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImFxdWFtYXJpbmVcIjtcbiAgICAgICAgZnJvbnRDZWxsLnRleHRDb250ZW50ID0gYCR7Y29sdW1uLmNvbnRhaW5zXG4gICAgICAgICAgLmdldE5hbWUoKVxuICAgICAgICAgIC5jaGFyQXQoMClcbiAgICAgICAgICAudG9VcHBlckNhc2UoKX1gO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJTaGlwc1RvQm9hcmQgfTtcbiIsImNvbnN0IHJlbmRlckdhbWVPdmVyVUkgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckdhbWVPdmVyVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBnYW1lT3ZlclVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWluZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXJHYW1lT3ZlclVJLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItZ2FtZU92ZXJVSVwiKTtcbiAgY29udGFpbmVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXRleHRcIik7XG4gIGNvbnRhaW5lckJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWJ0blwiKTtcbiAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ5ZXNCdG5cIik7XG4gIG5vQnRuLmNsYXNzTGlzdC5hZGQoXCJub0J0blwiKTtcbiAgcGxheUFnYWluLmNsYXNzTGlzdC5hZGQoXCJwbGF5QWdhaW5UeHRcIik7XG4gIGdhbWVPdmVyVUkuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyVUlcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiR09VSUhlYWRlclwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IFdvbiFgO1xuICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW4/XCI7XG4gIHllc0J0bi50ZXh0Q29udGVudCA9IFwiWVwiO1xuICBub0J0bi50ZXh0Q29udGVudCA9IFwiTlwiO1xuXG4gIGNvbnRhaW5lclRleHQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyVGV4dC5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuICBjb250YWluZXJCdG4uYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgY29udGFpbmVyQnRuLmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgZ2FtZU92ZXJVSS5hcHBlbmRDaGlsZChjb250YWluZXJUZXh0KTtcbiAgZ2FtZU92ZXJVSS5hcHBlbmRDaGlsZChjb250YWluZXJCdG4pO1xuICBjb250YWluZXJHYW1lT3ZlclVJLmFwcGVuZENoaWxkKGdhbWVPdmVyVUkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckdhbWVPdmVyVUkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZU92ZXJVSTtcbiIsImltcG9ydCBnYW1lU3RhcnRCdG5FdmVudExpc3RlbmVyIGZyb20gXCIuLi8uLi9sb2dpYy91dGlsaXR5L2dhbWVTdGFydEJ0bkV2ZW50TGlzdGVuZXJcIjtcblxuY29uc3QgcmVuZGVyR2FtZVN0YXJ0QnRuID0gKFxuICBwbGF5ZXIxQm9hcmQsXG4gIHBsYXllcjJCb2FyZCxcbiAgZHJhZ0V2ZW50T2JqZWN0LFxuICBjaGFuZ2VQb3NpdGlvbk9iaixcbiAgcGxheWVyMSxcbiAgcGxheWVyMlxuKSA9PiB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGdhbWVTdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiR2FtZSBTdGFydFwiO1xuICAgIGdhbWVTdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2FtZVN0YXJ0QnRuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXBvcnRcIikuYXBwZW5kQ2hpbGQoZ2FtZVN0YXJ0QnRuKTtcbiAgICBnYW1lU3RhcnRCdG5FdmVudExpc3RlbmVyKFxuICAgICAgZ2FtZVN0YXJ0QnRuLFxuICAgICAgcGxheWVyMUJvYXJkLFxuICAgICAgcGxheWVyMkJvYXJkLFxuICAgICAgZHJhZ0V2ZW50T2JqZWN0LFxuICAgICAgY2hhbmdlUG9zaXRpb25PYmosXG4gICAgICBwbGF5ZXIxLFxuICAgICAgcGxheWVyMlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVTdGFydEJ0bjtcbiIsImltcG9ydCB7IHJlbmRlckJvYXJkLCByZW5kZXJTaGlwc1RvQm9hcmQgfSBmcm9tIFwiLi9yZW5kZXJCb2FyZC5qc1wiO1xuXG5jb25zdCByZW5kZXJQbGF5ZXIxU2lkZSA9IChib2FyZCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXBsYXllcjFcIik7XG4gIHBsYXllcjFDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoYm9hcmQpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItbWFpblwiKS5hcHBlbmRDaGlsZChwbGF5ZXIxQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHJlbmRlclBsYXllcjJTaWRlID0gKGJvYXJkKSA9PiB7XG4gIGNvbnN0IHBsYXllcjJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXIyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItcGxheWVyMlwiKTtcbiAgcGxheWVyMkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZChib2FyZCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1tYWluXCIpLmFwcGVuZENoaWxkKHBsYXllcjJDb250YWluZXIpO1xuICAvL3JlbmRlclNoaXBzVG9Cb2FyZChib2FyZCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXIxU2lkZSwgcmVuZGVyUGxheWVyMlNpZGUgfTtcbiIsImltcG9ydCByZW5kZXJTaGlwIGZyb20gXCIuL3JlbmRlclNoaXAuanNcIjtcbmNvbnN0IHJlbmRlclBvcnQgPSAoc2hpcHMpID0+IHtcbiAgY29uc3QgcG9ydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHBvcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1wb3J0XCIpO1xuICBwb3J0LmNsYXNzTGlzdC5hZGQoXCJwb3J0XCIpO1xuXG4gIHNoaXBzLmZvckVhY2goKHNoaXAsIGkpID0+IHtcbiAgICBjb25zdCBzaGlwRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9hdCA9IHJlbmRlclNoaXAoc2hpcCk7XG4gICAgc2hpcERvY2suY2xhc3NMaXN0LmFkZChcImRvY2tcIik7XG4gICAgc2hpcERvY2suYXBwZW5kQ2hpbGQoYm9hdCk7XG4gICAgcG9ydC5hcHBlbmRDaGlsZChzaGlwRG9jayk7XG4gIH0pO1xuXG4gIHBvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQocG9ydCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW1haW5cIikuYXBwZW5kQ2hpbGQocG9ydENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyByZW5kZXJQb3J0IH07XG4iLCJjb25zdCByZW5kZXJTaGlwID0gKHNoaXApID0+IHtcbiAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXQuY2xhc3NMaXN0LmFkZChgc2hpcGApO1xuICBib2F0LmlkID0gYCR7c2hpcC5nZXROYW1lKCl9YDtcbiAgYm9hdC5kcmFnZ2FibGUgPSBcInRydWVcIjtcbiAgLy9ib2F0LmRhdGFzZXQubmFtZSA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG4gIGlmIChzaGlwLmdldFBvc2l0aW9uKCkgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwU3Vic2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBTdWJzZXQuY2xhc3NMaXN0LmFkZChcInNoaXBTdWJzZXRcIik7XG4gICAgICBzaGlwU3Vic2V0LmRhdGFzZXQuc3Vic2V0ID0gYCR7aX1gO1xuICAgICAgLy9zaGlwU3Vic2V0LmRhdGFzZXQubWFpbnNldCA9IGAke3NoaXAuZ2V0TmFtZSgpfWA7XG4gICAgICAvL3NoaXBTdWJzZXQuZGF0YXNldC5tYWluc2V0TGVuZ3RoID0gYCR7c2hpcC5nZXRMZW5ndGgoKX1gO1xuICAgICAgc2hpcFN1YnNldC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBoZWlnaHQ6MzVweDtcbiAgICAgICAgd2lkdGg6MzZweDtcbiAgICAgIGA7XG4gICAgICBib2F0LmFwcGVuZENoaWxkKHNoaXBTdWJzZXQpO1xuICAgIH1cblxuICAgIGJvYXQuY2xhc3NMaXN0LmFkZChcImhvcml6b250YWxcIik7XG4gICAgYm9hdC5zdHlsZS53aWR0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCkgKiAzNn1weGA7XG4gICAgYm9hdC5zdHlsZS5oZWlnaHQgPSBcIjM1cHhcIjtcbiAgICAvL2JvYXQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzaGlwTmFtZVwiPiR7c2hpcC5nZXROYW1lKCl9PC9kaXY+YDtcbiAgICAvL2JvYXQudGV4dENvbnRlbnQgPSBgJHtzaGlwLmdldE5hbWUoKX1gO1xuXG4gICAgYm9hdC5kYXRhc2V0Lmxlbmd0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCl9YDtcbiAgICBib2F0LmRhdGFzZXQucG9zaXRpb24gPSBgJHtzaGlwLmdldFBvc2l0aW9uKCl9YDtcbiAgfSBlbHNlIHtcbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBTdWJzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcFN1YnNldC5jbGFzc0xpc3QuYWRkKFwic2hpcFN1YnNldFwiKTtcbiAgICAgIHNoaXBTdWJzZXQuZGF0YXNldC5zdWJzZXQgPSBgJHtpfWA7XG4gICAgICAvL3NoaXBTdWJzZXQuZGF0YXNldC5tYWluc2V0ID0gYCR7c2hpcC5nZXROYW1lKCl9YDtcbiAgICAgIC8vc2hpcFN1YnNldC5kYXRhc2V0Lm1haW5zZXRMZW5ndGggPSBgJHtzaGlwLmdldExlbmd0aCgpfWA7XG4gICAgICBzaGlwU3Vic2V0LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIGhlaWdodDozNnB4O1xuICAgICAgICB3aWR0aDozN3B4O1xuICAgICAgYDtcbiAgICAgIGJvYXQuYXBwZW5kQ2hpbGQoc2hpcFN1YnNldCk7XG4gICAgfVxuICAgIGJvYXQuc3R5bGUud2lkdGggPSBcIjM1cHhcIjtcbiAgICBib2F0LnN0eWxlLmhlaWdodCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCkgKiAzNn1weGA7XG4gICAgYm9hdC5kYXRhc2V0Lmxlbmd0aCA9IGAke3NoaXAuZ2V0TGVuZ3RoKCl9YDtcblxuICAgIGJvYXQuZGF0YXNldC5wb3NpdGlvbiA9IGAke3NoaXAuZ2V0UG9zaXRpb24oKX1gO1xuICB9XG4gIHJldHVybiBib2F0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2hpcDtcbiIsImltcG9ydCB7IHJlbmRlclBsYXllcjFTaWRlIH0gZnJvbSBcIi4vcmVuZGVyUGxheWVyU2lkZXNcIjtcbmltcG9ydCB7IHJlbmRlclBvcnQgfSBmcm9tIFwiLi9yZW5kZXJQb3J0LmpzXCI7XG5pbXBvcnQgZHJhZ0V2ZW50IGZyb20gXCIuLi8uLi9sb2dpYy91dGlsaXR5L2RyYWdEcm9wLmpzXCI7XG5pbXBvcnQgY2hhbmdlUG9zaXRpb25MaXN0ZW5lciBmcm9tIFwiLi4vLi4vbG9naWMvdXRpbGl0eS9jaGFuZ2VQb3NpdGlvblwiO1xuXG5jb25zdCByZW5kZXJVSSA9IChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCwgcGxheWVyMSwgcGxheWVyMikgPT4ge1xuICByZW5kZXJQbGF5ZXIxU2lkZShwbGF5ZXIxQm9hcmQpO1xuICByZW5kZXJQb3J0KHBsYXllcjFCb2FyZC5nZXRTaGlwcygpKTtcbiAgY29uc3QgZHJhZ0V2ZW50T2JqID0gZHJhZ0V2ZW50KHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgY29uc3QgY2hhbmdlUG9zaXRpb25PYmplY3QgPSBjaGFuZ2VQb3NpdGlvbkxpc3RlbmVyKFxuICAgIHBsYXllcjFCb2FyZCxcbiAgICBkcmFnRXZlbnRPYmpcbiAgKTtcbiAgZHJhZ0V2ZW50T2JqLmFkZEV2ZW50cyhkcmFnRXZlbnRPYmosIGNoYW5nZVBvc2l0aW9uT2JqZWN0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclVJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyU3RhcnQgZnJvbSBcIi4vcmVuZGVyL3JlbmRlclN0YXJ0UGFnZS5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL2xvZ2ljL1VJL1VJLmpzXCI7XG5cbnJlbmRlclN0YXJ0KCk7XG5cbi8vVUkoXCJqXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9