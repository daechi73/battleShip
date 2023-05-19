import gameBoard from "../gameBoard/gameBoard";
import player from "../player/computer/player";
import computer from "../player/computer/computer";
import ship from "../ship/ship";
import {
  renderPlayerBoard,
  renderPlayer2Board,
} from "../../render/renderBoard";

const playGame = (playerName) => {
  const playerBoard = gameBoard();
  const player2Board = gameBoard();
  const player1 = player(playerName);
  const player2 = computer();
  const carrier = ship("carrier", 5);
  const battleShip = ship("battleShip", 4);
  const cruiser = ship("cruiser", 3);
  const submarine = ship("submarine", 3);
  const destroyer = ship("destroyer", 2);
  const scout = ship("scout", 2);
};

export default playGame;