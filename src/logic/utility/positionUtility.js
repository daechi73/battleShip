const positionUtility = () => {
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
  return { disableCell, enableCell, checkBoundary, checkCellAvailability };
};

export default positionUtility;
