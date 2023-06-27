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

export default positionUtility;
