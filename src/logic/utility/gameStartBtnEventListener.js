import { renderShipsToBoard } from "../../render/renderUI/renderBoard";
import { renderPlayer2Side } from "../../render/renderUI/renderPlayerSides";
import playRound from "./playRound.js";
renderShipsToBoard;

const gameStartBtnEventListener = (
  gameStartBtn,
  player1Board,
  player2Board,
  dragEventObject,
  changePositionObject,
  player1,
  player2
) => {
  gameStartBtn.addEventListener("click", () => {
    document.querySelector(".container-port").remove();
    player2Board.autoPcBoard();
    renderPlayer2Side(player2Board);
    dragEventObject.removeEvents();
    changePositionObject.removeEvents();
    playRound(player2Board, player1);
    renderShipsToBoard(player1Board);
  });
};
export default gameStartBtnEventListener;
