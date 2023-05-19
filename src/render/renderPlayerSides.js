import renderBoard from "./renderBoard.js";

const renderPlayer1Side = (board) => {
  const player1Container = document.createElement("div");
  player1Container.classList.add("container-player1");
  player1Container.appendChild(renderBoard(board));
  document.querySelector(".container-main").appendChild(player1Container);
};

export { renderPlayer1Side };
