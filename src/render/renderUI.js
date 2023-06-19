import { renderPlayer1Side } from "./renderPlayerSides";
import { renderPort } from "./renderPort.js";
import dragEvent from "../logic/utility/dragDrop.js";
import changePositionListener from "../logic/utility/changePosition";

const choosingUI = (board) => {
  renderPlayer1Side(board);
  renderPort(board.getShips());
  const dragEventActivate = dragEvent(board);
  dragEventActivate.addEvents();
  changePositionListener(board, dragEventActivate);
};

const gameUi = () => {};

export { choosingUI };
