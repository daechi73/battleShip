import gameBoard from "../gameBoard/gameBoard";
import player from "../player/computer/player";
import computer from "../player/computer/computer";
import renderUI from "../../render/renderUI/renderUI";
import shipId from "../utility/shipId.js";
import dragEvent from "../utility/dragDrop";
import changePositionListener from "../utility/changePosition";

const UI = (playerName) => {
  const id = shipId();

  const player1 = player(playerName);
  const player2 = computer();
  const player1Board = gameBoard(id);
  const player2Board = gameBoard(id);

  //deleteThisafter(player1Board);
  //gameOverUI();

  renderUI(player1Board, player2Board, player1, player2);

  const dragEventObj = dragEvent(player1Board, player2Board, player1, player2);
  const changePositionObject = changePositionListener(
    player1Board,
    dragEventObj
  );

  dragEventObj.addEvents(dragEventObj, changePositionObject);
};

const deleteThisafter = (player1Board) => {
  player1Board.getShips().forEach((ship) => {
    ship.setCoord([0, 0]);
  });
};

export default UI;
