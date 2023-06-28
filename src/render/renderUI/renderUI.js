import { renderPlayer1Side } from "./renderPlayerSides";
import { renderPort } from "./renderPort.js";
import dragEvent from "../../logic/utility/dragDrop.js";
import changePositionListener from "../../logic/utility/changePosition";

const renderUI = (player1Board, player2Board, player1, player2) => {
  const gameTitle = document.createElement("div");
  gameTitle.textContent = "BattleShip";
  gameTitle.classList.add("gameTitle");
  document.body.insertBefore(
    gameTitle,
    document.querySelector(".container-main")
  );
  renderPlayer1Side(player1Board);
  renderPort(player1Board.getShips());
  const dragEventObj = dragEvent(player1Board, player2Board, player1, player2);
  const changePositionObject = changePositionListener(
    player1Board,
    dragEventObj
  );
  dragEventObj.addEvents(dragEventObj, changePositionObject);
};

export default renderUI;
