import computer from "./computer";
import player from "./player";
import gameBoard from "../../gameBoard/gameBoard";
import ship from "../../ship/ship";

// test("testing player makeMove missing...", () => {
//   const newgameBoard = gameBoard();
//   const player1 = player("J");
//   expect(player1.makeMove(newgameBoard, [0, 0])).toBe(
//     "you've missed at position [0,0]"
//   );
// });
// test("testing player makeMove hitting...", () => {
//   const newgameBoard = gameBoard();
//   const player1 = player("J");
//   const randomShip = ship("randomShip", 2);
//   newgameBoard.placeShip(randomShip, [0, 0]);
//   expect(player1.makeMove(newgameBoard, [0, 0])).toBe(
//     "You've hit randomShip at position [0,0]"
//   );
// });

test("testing computer makeMove...", () => {
  const newgameBoard = gameBoard();
  const computer1 = computer();
  const randomShip = ship("randomShip", 2);
  newgameBoard.placeShip(randomShip, [0, 0]);
  expect(computer1.makeMove(newgameBoard)).toBe("?");
});
