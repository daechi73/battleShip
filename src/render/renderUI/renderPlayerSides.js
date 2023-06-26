import { renderBoard, renderShipsToBoard } from "./renderBoard.js";

const renderPlayer1Side = (board) => {
  const player1Container = document.createElement("div");
  player1Container.classList.add("container-player1");
  player1Container.appendChild(renderBoard(board));
  document.querySelector(".container-main").appendChild(player1Container);
};

const renderPlayer2Side = (board) => {
  const player2Container = document.createElement("div");
  player2Container.classList.add("container-player2");
  player2Container.appendChild(renderBoard(board));
  document.querySelector(".container-main").appendChild(player2Container);
  //renderShipsToBoard(board);
};

export { renderPlayer1Side, renderPlayer2Side };
