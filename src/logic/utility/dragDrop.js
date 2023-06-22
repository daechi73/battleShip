import positionUtility from "./positionUtility";
import renderGameStartBtn from "../../render/renderUI/renderGameStartBtn";

const dragEvent = (player1Board, player2Board) => {
  let dragged = null;
  let shipSubset = null;

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
        positionUtility().enableCell(e.target.parentNode, e.target);
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
    if (positionUtility().checkBoundary(e.target, dragged)) {
      if (positionUtility().checkCellAvailability(e.target, dragged)) {
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
          positionUtility().disableCell(realCellToAppend, dragged);
          if (
            positionUtility().allShipsOnBoard(player1Board.getShips()) == true
          ) {
            console.log("allShipOnBoard");
            renderGameStartBtn(player2Board);
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
  const addEvents = () => {
    const ships = document.querySelectorAll(".ship");
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
  const getDropCount = () => {
    dropCount++;
  };
  return { addEvents, recallDragEvents, getDropCount };
};

export default dragEvent;
