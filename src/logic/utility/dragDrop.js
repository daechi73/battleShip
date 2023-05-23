const dragEvent = () => {
  let dragged = null;
  let shipSubset = null;

  const ships = document.querySelectorAll(".ship");
  const cells = document.querySelectorAll(".cell");
  ships.forEach((ship) => {
    ship.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("shipSubset")) {
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
      if (checkBoundary(e.target, dragged)) {
        if (checkCellAvailability(e.target, dragged)) {
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
    const enableFrom = startingCell.dataset.column;
    const enableTo =
      parseInt(startingCell.dataset.column) +
      parseInt(draggedShip.dataset.length);

    for (let i = enableFrom; i < enableTo; i++) {
      document.querySelector(
        `[data-column="${i}"][data-row="${startingCell.dataset.row}"]`
      ).dataset.available = true;
    }
  }
};

const checkCellAvailability = (startingCell, draggedShip) => {
  if (draggedShip.dataset.position === "horizontal") {
    const checkFrom = startingCell.dataset.column;
    const checkTo =
      parseInt(startingCell.dataset.column) +
      parseInt(draggedShip.dataset.length);

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
  if (draggedShip.dataset.position === "vertical") {
    const checkFrom = startingCell.dataset.row.charCodeAt(0);
    const checkTo = checkFrom + parseInt(draggedShip.dataset.length);

    for (let i = checkFrom; i < checkTo; i++) {
      if (
        document.querySelector(
          `[data-column="${
            startingCell.dataset.row
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

const checkBoundary = (startingCell, draggedShip) => {
  if (draggedShip.dataset.position === "horizontal") {
    const checkFrom = startingCell.dataset.column;
    const checkTo =
      parseInt(startingCell.dataset.column) +
      parseInt(draggedShip.dataset.length);

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
  if (draggedShip.dataset.position === "vertical") {
    const checkFrom = startingCell.dataset.row.charCodeAt(0);
    const checkTo =
      startingCell.dataset.row.charCodeAt(0) +
      parseInt(draggedShip.dataset.length);

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
    if (draggedShip.dataset.position === "") return "position not set";
    return true;
  }
};
const getStartEndPosition = (startingCell, draggedShip) => {};

export default dragEvent;
