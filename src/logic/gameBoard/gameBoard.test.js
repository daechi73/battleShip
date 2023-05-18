import gameBoard from "./gameBoard";
import ship from "../ship/ship";

// test("testing gameboard...", () => {
//   expect(gameBoard().getBoard()[0]).toContainEqual({
//     charCode: "A4",
//     column: 4,
//     row: "A",
//     contains: null,
//   });
// });

test("testing gameBoard.placeShip() horizontal...", () => {
  const newBoard = gameBoard();
  const battleShip = ship("battleShip", 4);
  newBoard.placeShip(battleShip, [0, 0]);
  //expect(newBoard.placeShip(battleShip, [0, 0])).toBe("ja");
  expect(newBoard.getBoard()[0][0].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[0][1].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[0][2].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[0][3].contains.getName()).toBe("battleShip");
});

test("testing gameboard.placeShip() vertical...", () => {
  const newBoard = gameBoard();
  const battleShip = ship("battleShip", 4);
  newBoard.placeShip(battleShip, [0, 0], "vertical");
  expect(newBoard.getBoard()[0][0].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[1][0].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[2][0].contains.getName()).toBe("battleShip");
});
