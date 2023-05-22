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
      cell.dataset.coord = `${column.charCode}`;
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

export default renderBoard;
