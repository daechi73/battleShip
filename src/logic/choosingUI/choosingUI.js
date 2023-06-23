import gameBoard from "../gameBoard/gameBoard";
import player from "../player/computer/player";
import computer from "../player/computer/computer";
import renderUI from "../../render/renderUI/renderUI";
import shipId from "../utility/shipId.js";

const choosingUI = (playerName) => {
  const id = shipId();

  const player1Board = gameBoard(id);
  const player2Board = gameBoard(id);
  const player1 = player(playerName);
  const player2 = computer();

  deleteThisafter(player1Board);

  renderUI(player1Board, player2Board);
};

const deleteThisafter = (player1Board) => {
  player1Board.getShips().forEach((ship) => {
    ship.setCoord([0, 0]);
  });
};

export default choosingUI;