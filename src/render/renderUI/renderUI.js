import { renderPlayer1Side } from "./renderPlayerSides";
import { renderPort } from "./renderPort.js";
import dragEvent from "../../logic/utility/dragDrop.js";
import changePositionListener from "../../logic/utility/changePosition";

const renderUI = (player1Board, player2Board) => {
  renderPlayer1Side(player1Board);
  renderPort(player1Board.getShips());
  const dragEventActivate = dragEvent(player1Board, player2Board);
  dragEventActivate.addEvents();
  changePositionListener(player1Board, dragEventActivate);
};

export default renderUI;
