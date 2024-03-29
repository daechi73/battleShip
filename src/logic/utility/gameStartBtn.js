import { renderShipsToBoard } from "../../render/renderUI/renderBoard";
import { renderPlayer2Side } from "../../render/renderUI/renderPlayerSides";
import playRound from "../playRound/playRound.js";
import renderGameStartBtn from "../../render/renderUI/renderGameStartBtn";

const gameStartBtnEvent = (player1Board, player2Board, player1, player2) => {
  renderGameStartBtn();

  document.querySelector(".gameStartBtn").addEventListener("click", () => {
    document.querySelector(".container-port").remove();
    player2Board.autoPcBoard();
    renderPlayer2Side(player2Board);
    // console.log(dragEventObject);
    // //dragEventObject.removeEvents();

    //changePositionObject.removeEvents();
    playRound(player1Board, player2Board, player1, player2);
    renderShipsToBoard(player1Board);
  });
};
export default gameStartBtnEvent;
