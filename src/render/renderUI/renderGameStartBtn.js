import { renderPlayer2Side } from "./renderPlayerSides";
import autoPcBoard from "../../logic/utility/autoPcBoard";
const renderGameStartBtn = (player2Board) => {
  if (document.querySelector(".port")) {
    document.querySelector(".port").remove();

    const gameStartBtn = document.createElement("button");
    gameStartBtn.textContent = "Game Start";
    gameStartBtn.classList.add("gameStartBtn");
    document.querySelector(".container-port").appendChild(gameStartBtn);
    gameStartBtnEventListener(gameStartBtn, player2Board);
  }
};
const gameStartBtnEventListener = (gameStartBtn, player2Board) => {
  gameStartBtn.addEventListener("click", () => {
    document.querySelector(".container-port").remove();
    autoPcBoard(player2Board);
    renderPlayer2Side(player2Board);
  });
};
export default renderGameStartBtn;
