import renderShip from "./renderShip";

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
  board.getShips().forEach((ship) => {
    const alphaNumCoord = board.numCoordToAlphaNumCoord(ship.getCoord());
    //console.log(alphaNumCoord);
    const frontCell = document.querySelector(
      `.container-player2 [data-alphanumcoord='${alphaNumCoord}']`
    );
    //[data-alphanumcoord='${alphaNumCoord}']
    console.log("renderShipsToBoard");
    console.log(frontCell);
    //console.log(board.numCoordToAlphaNumCoord(ship.getCoord()));
    frontCell.appendChild(renderShip(ship));
  });
};

export { renderBoard, renderShipsToBoard };
