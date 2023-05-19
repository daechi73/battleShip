const renderPlayerBoard = (board) => {
  const containerBoard = document.createElement("div");
  const containerPlayer = document.querySelector(".container-player1");
  containerPlayer.appendChild(containerBoard);
  containerBoard.classList.add("container-Board");

  board.getBoard().forEach((row, i) => {
    const r = document.createElement("div");
    r.classList.add("row");
    r.classList.add(`${String.fromCharCode(65 + i)}`);
    row.forEach((column) => {
      const cell = document.createElement("div");
      cell.classList.add(`${column.column}`);
      cell.classList.add(`${column.charCode}`);
      cell.classList.add("cell");
      r.appendChild(cell);
    });
    containerBoard.appendChild(r);
  });
};

const renderPlayer2Board = (board) => {
  const containerBoard = document.createElement("div");
  const containerPlayer2 = document.querySelector(".container-player2");
  containerPlayer2.appendChild(containerBoard);
  containerBoard.classList.add("container-Board");

  board.getBoard().forEach((row, i) => {
    const r = document.createElement("div");
    r.classList.add("row");
    r.classList.add(`${String.fromCharCode(65 + i)}`);
    row.forEach((column) => {
      const cell = document.createElement("div");
      cell.classList.add(`${column.column}`);
      cell.classList.add(`${column.charCode}`);
      cell.classList.add("cell");
      r.appendChild(cell);
    });
    containerBoard.appendChild(r);
  });
};

export { renderPlayerBoard, renderPlayer2Board };
