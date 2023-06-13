import { renderPlayer1Side } from "./renderPlayerSides";
import { renderPort } from "./renderPort.js";
import dragEvent from "../logic/utility/dragDrop.js";
import changePositionListener from "../logic/utility/changePosition";

const choosingUI = (board, ships) => {
  renderPlayer1Side(board);
  renderPort(ships);
  //dragEvent();
  const dragEventActivate = dragEvent();
  changePositionListener(board, ships, dragEventActivate);

  // const btn = document.createElement("button");
  // btn.textContent = "btn";
  // btn.onclick = dragEventActivate.removeEvents;
  // document.body.appendChild(btn);
};

const gameUi = () => {};

export { choosingUI };
