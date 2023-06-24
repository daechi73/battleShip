import { renderPlayer2Side } from "../../render/renderUI/renderPlayerSides";
import cellRecieveAttackListener from "./cellRecieveAttack";

const gameStartBtnEventListener = (
  gameStartBtn,
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
    cellRecieveAttackListener(player2Board, player1);
  });
};
export default gameStartBtnEventListener;
