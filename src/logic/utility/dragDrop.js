const dragEvent = () => {
  let dragged = null;
  let shipSubset = null;

  const ships = document.querySelectorAll(".ship");
  const cells = document.querySelectorAll(".cell");

  ships.forEach((ship) => {
    ship.addEventListener("mousedown", (e) => {
      shipSubset = e.target.dataset.subset;
      console.log(e.target);
    });
    ship.addEventListener("dragstart", (e) => {
      console.log("dragstarting");
      console.log(e.target);
      return (dragged = e.target);
    });

    ship.addEventListener("dragend", (e) => {
      return "drag ending";
    });
    cells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        return e.preventDefault();
      });
    });
    cells.forEach((cell) => {
      cell.addEventListener("drop", (e) => {
        e.preventDefault();
        //console.log(e.target);
        if (e.target.classList.contains("droppable")) {
          dragged.parentNode.removeChild(dragged);
          return e.target.appendChild(dragged);
        }
      });
    });
  });
};

export default dragEvent;
