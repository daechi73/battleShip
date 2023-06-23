import { renderPlayer2Side } from "../../render/renderUI/renderPlayerSides";

const gameStartBtnEventListener = (
  gameStartBtn,
  player2Board,
  dragEventObject
) => {
  gameStartBtn.addEventListener("click", () => {
    document.querySelector(".container-port").remove();
    player2Board.autoPcBoard();
    renderPlayer2Side(player2Board);
    dragEventObject.removeEvents();
  });
};
export default gameStartBtnEventListener;