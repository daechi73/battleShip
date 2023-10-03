import positionUtility from "./positionUtility";
import gameStartBtnEvent from "./gameStartBtn";
const clickDrop = (player1Board, player2Board, player1, player2) => {
  let selected = null;
  let shipSubset = null;
  let moveEventObj;
  let changePositionObj;
  const cells = document.querySelectorAll(".cell");

  const selectShip = (e) => {
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
      if (positionUtility().checkBoundary(e.target, selected)) {
        if (positionUtility().checkCellAvailability(e.target, selected)) {
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
              positionUtility().enableCell(selected.parentNode, selected);

            selected.parentNode.removeChild(selected);
            realCellToAppend.appendChild(selected);

            player1Board.placeShip(
              player1Board.findShip(selected.id),
              realCellToAppend.dataset.alphanumcoord
            );
            player1Board.printBoard();
            positionUtility().disableCell(realCellToAppend, selected);
            selected = null;
            if (player1Board.allShipsOnBoard() == true) {
              console.log("allShipOnBoard");
              gameStartBtnEvent(player1Board, player2Board, player1, player2);
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

  return { recallDragEvents, addEvents };
};

export default clickDrop;
