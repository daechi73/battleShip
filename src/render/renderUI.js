import { renderPlayer1Side } from "./renderPlayerSides";
import { renderPort } from "./renderPort.js";

const choosingUI = (board, ships) => {
  renderPlayer1Side(board);
  renderPort(ships);
};

const gameUi = () => {};

export { choosingUI };
