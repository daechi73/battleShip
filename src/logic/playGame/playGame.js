import gameBoard from "../gameBoard/gameBoard";
import player from "../player/computer/player";
import computer from "../player/computer/computer";
import { choosingUI } from "../../render/renderUI";

const playGame = (playerName) => {
  const playerBoard = gameBoard();
  const player2Board = gameBoard();
  const player1 = player(playerName);
  const player2 = computer();

  choosingUI(playerBoard);
};

export default playGame;
