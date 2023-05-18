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

// test("testing gameBoard.placeShip() horizontal...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [0, 0]);
//   expect(newBoard.placeShip(battleShip, [0, 0])).toBe("ja");
//   expect(newBoard.getBoard()[0][0].contains.getName()).toBe("battleShipp");
//   expect(newBoard.getBoard()[0][1].contains.getName()).toBe("battleShip");
//   expect(newBoard.getBoard()[0][2].contains.getName()).toBe("battleShip");
//   expect(newBoard.getBoard()[0][3].contains.getName()).toBe("battleShip");
// });

// test("testing gameboard.placeShip() vertical...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   battleShip.changePosition();
//   newBoard.placeShip(battleShip, [0, 0], "vertical");
//   expect(newBoard.getBoard()[0][0].contains.getName()).toBe("battleShip");
//   expect(newBoard.getBoard()[1][0].contains.getName()).toBe("battleShip");
//   expect(newBoard.getBoard()[2][0].contains.getName()).toBe("battleShip");
// });

// test("testing gameBoard.checkCellOpen()...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [0, 0], "horizontal");
//   expect(newBoard.checkCellOpen(0, 0, 3, "horizontal")).toBe(false);
//   //expect(newBoard.getBoard()[0][3].contains.getName()).toBe("battleShip");
// });

// test(
//   "testing gameBoard.placeShip() with overlapping " +
//     "two ship objects that will return false on checkCellOpen()",
//   () => {
//     const newBoard = gameBoard();
//     const battleShip = ship("battleShip", 4);
//     const destroyer = ship("destroyer", 2);
//     newBoard.placeShip(battleShip, [0, 0]);

//     expect(newBoard.placeShip(destroyer, [0, 0], "horizontal")).toBe(
//       "position not open"
//     );
//   }
// );

test("testing receiveAttack...", () => {
  const newBoard = gameBoard();
  const battleShip = ship("battleShip", 4);
  newBoard.placeShip(battleShip, [0, 0]);
  expect(newBoard.receiveAttack([0, 0])).toBe(
    "You've hit battleShip at position [0,0]"
  );
  expect(newBoard.receiveAttack([0, 2])).toBe(
    "you've missed at position [0,2]"
  );
});
