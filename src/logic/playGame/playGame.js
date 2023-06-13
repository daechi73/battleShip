import gameBoard from "../gameBoard/gameBoard";
import player from "../player/computer/player";
import computer from "../player/computer/computer";
import ship from "../ship/ship";
import { choosingUI } from "../../render/renderUI";

const gamePieces = () => {
  const carrier = ship("carrier", 5);
  const battleShip = ship("battleShip", 4);
  const cruiser = ship("cruiser", 3);
  const submarine = ship("submarine", 3);
  const destroyer = ship("destroyer", 2);
  const scout = ship("scout", 2, "vertical");
  return [carrier, battleShip, cruiser, submarine, destroyer, scout];
};

const playGame = (playerName) => {
  const playerBoard = gameBoard();
  const player2Board = gameBoard();
  const player1 = player(playerName);
  const player2 = computer();
  const ships = gamePieces();

  choosingUI(playerBoard, ships);
};

export default playGame;
