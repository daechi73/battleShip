const dragEvent = () => {
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
    console.log("dragStartEventHappening");
    if (e.target.classList.contains("ship")) {
      if (e.target.parentNode.classList.contains("cell"))
        enableCell(e.target.parentNode, e.target);
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
    if (checkBoundary(e.target, dragged)) {
      if (checkCellAvailability(e.target, dragged)) {
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
          disableCell(realCellToAppend, dragged);
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

  return { addEvents, recallDragEvents };
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

  if (draggedShip.dataset.position === "vertical") {
    const disableFrom = startingCell.dataset.row.charCodeAt(0);
    const disableTo = disableFrom + parseInt(draggedShip.dataset.length);

    for (let i = disableFrom; i < disableTo; i++) {
      document.querySelector(
        `[data-column="${
          startingCell.dataset.column
        }"][data-row="${String.fromCharCode(i)}"]`
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

  if (draggedShip.dataset.position === "vertical") {
    const disableFrom = startingCell.dataset.row.charCodeAt(0);
    const disableTo = disableFrom + parseInt(draggedShip.dataset.length);

    for (let i = disableFrom; i < disableTo; i++) {
      document.querySelector(
        `[data-column="${
          startingCell.dataset.column
        }"][data-row="${String.fromCharCode(i)}"]`
      ).dataset.available = true;
    }
  }
};

const checkCellAvailability = (startingCell, draggedShip) => {
  if (startingCell.className === "shipSubset") {
    startingCell = startingCell.parentNode.parentNode;
  }
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
    console.log("verticalcheck");
    console.log(startingCell);
    const checkFrom = startingCell.dataset.row.charCodeAt(0);
    const checkTo = checkFrom + parseInt(draggedShip.dataset.length);

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

const checkBoundary = (startingCell, draggedShip) => {
  if (startingCell.className === "shipSubset") {
    startingCell = startingCell.parentNode.parentNode;
  }
  console.log("droping..");
  //return console.log(draggedShip);
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
    console.log("vertical boundary check..");
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

export default dragEvent;
