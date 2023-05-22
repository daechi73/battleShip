const dragEvent = () => {
  let dragged = null;
  let shipSubset = null;

  const ships = document.querySelectorAll(".ship");
  const cells = document.querySelectorAll(".cell");
  //console.log(cells);
  ships.forEach((ship) => {
    ship.addEventListener("mousedown", (e) => {
      if (e.target.className === "shipSubset") {
        shipSubset = e.target.dataset.subset;
        console.log(e.target);
      }
    });
    ship.addEventListener("dragstart", (e) => {
      console.log("dragstarting");
      console.log(e.target);
      if (e.target.className === "ship") {
        if (e.target.parentNode.classList.contains("cell"))
          enableCell(e.target.parentNode, e.target);
        dragged = e.target;
      }
    });

    ship.addEventListener("dragend", (e) => {
      return "drag ending";
    });
  });
  cells.forEach((cell) => {
    cell.addEventListener("dragover", (e) => {
      return e.preventDefault();
    });
  });
  cells.forEach((cell) => {
    cell.addEventListener("drop", (e) => {
      e.preventDefault();
      console.log(e.target);

      if (checkCellAvailability(e.target) === true) {
        if (e.target.classList.contains("droppable")) {
          dragged.parentNode.removeChild(dragged);
          const realCellToAppend = document.querySelector(
            `[data-column="${
              e.target.dataset.column - (shipSubset - 1)
            }"][data-row="${e.target.dataset.row}"]`
          );
          realCellToAppend.appendChild(dragged);
          disableCell(realCellToAppend, dragged);
        }
      }
    });
  });
};

const disableCell = (startingCell, draggedShip) => {
  if (draggedShip.dataset.position === "horizontal") {
    const disableFrom = startingCell.dataset.column;
    const disableTo =
      parseInt(startingCell.dataset.column) +
      parseInt(draggedShip.dataset.length);

    for (let i = disableFrom; i < disableTo; i++) {
      document.querySelector(
        `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
      ).dataset.available = false;
    }
  }
};

const enableCell = (startingCell, draggedShip) => {
  if (draggedShip.dataset.position === "horizontal") {
    const disableFrom = startingCell.dataset.column;
    const disableTo =
      parseInt(startingCell.dataset.column) +
      parseInt(draggedShip.dataset.length);

    for (let i = disableFrom; i < disableTo; i++) {
      document.querySelector(
        `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
      ).dataset.available = true;
    }
  }
};

const checkCellAvailability = (selectedCell) => {
  if (selectedCell.dataset.available === "false") {
    console.log("cell not available choose another");
    return false;
  }
  return true;
};

export default dragEvent;