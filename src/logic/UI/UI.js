import gameBoard from "../gameBoard/gameBoard";
import player from "../player/computer/player";
import computer from "../player/computer/computer";
import renderUI from "../../render/renderUI/renderUI";
import shipId from "../utility/shipId.js";
import dragEvent from "../utility/dragDrop";
import changePositionListener from "../utility/changePosition";
import clickDrop from "../utility/clickDrop";
import mobileCheck from "../utility/mobileCheck";

const UI = (playerName) => {
  const id = shipId();

  const player1 = player(playerName);
  const player2 = computer();
  const player1Board = gameBoard(id);
  const player2Board = gameBoard(id);

  renderUI(player1Board, player2Board, player1, player2);

  if (mobileCheck(400)) {
    const moveEventObj = clickDrop(
      player1Board,
      player2Board,
      player1,
      player2
    );
    const changePositionObject = changePositionListener(
      player1Board,
      moveEventObj
    );

    moveEventObj.addEvents(moveEventObj, changePositionObject);
  } else {
    const dragEventObj = dragEvent(
      player1Board,
      player2Board,
      player1,
      player2
    );
    const changePositionObject = changePositionListener(
      player1Board,
      dragEventObj
    );
    dragEventObj.addEvents(dragEventObj, changePositionObject);
  }
};

const devPreShipPosition = (player1Board) => {
  player1Board.getShips().forEach((ship) => {
    ship.setCoord([0, 0]);
  });
};

export default UI;
