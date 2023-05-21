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
      console.log(`shipSubset= ${shipSubset}`);
      if (e.target.className === "ship") return (dragged = e.target);
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

      console.log(cell);
      if (e.target.classList.contains("droppable")) {
        dragged.parentNode.removeChild(dragged);
        // console.log(
        //   document.querySelector(
        //     `[data-column="${e.target.dataset.column - (shipSubset - 1)}"]`
        //   )
        // );
        const realCellToAppend = document.querySelector(
          `[data-column="${
            e.target.dataset.column - (shipSubset - 1)
          }"][data-row="${e.target.dataset.row}"]`
        );
        return realCellToAppend.appendChild(dragged);
      }
    });
  });
};

export default dragEvent;
