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

// test("testing receiveAttack...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [0, 0]);
//   expect(newBoard.receiveAttack([0, 0])).toBe(
//     "You've hit battleShip at position [0,0]"
//   );
//   expect(newBoard.receiveAttack([0, 2])).toBe(
//     "you've missed at position [0,2]"
//   );
//   expect(newBoard.getBoard()[2][0].hit).toBe(true);
// });

// test("testing isSunk being implemented with receiveAttack with one ship...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [0, 0]);
//   expect(newBoard.receiveAttack([0, 0])).toBe(
//     "You've hit battleShip at position [0,0]"
//   );
//   expect(newBoard.receiveAttack([1, 0])).toBe(
//     "You've hit battleShip at position [1,0]"
//   );
//   expect(newBoard.receiveAttack([2, 0])).toBe(
//     "You've hit battleShip at position [2,0]"
//   );
//   expect(newBoard.receiveAttack([3, 0])).toBe("you've sunk a battleShip!");
// });

// test("testing isSunk being implemented with receiveAttack with two ships...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   const fishingBoat = ship("fishingBoat", 1);
//   newBoard.placeShip(battleShip, [0, 0]);
//   newBoard.placeShip(fishingBoat, [0, 1]);
//   expect(newBoard.receiveAttack([0, 0])).toBe(
//     "You've hit battleShip at position [0,0]"
//   );
//   expect(newBoard.receiveAttack([1, 0])).toBe(
//     "You've hit battleShip at position [1,0]"
//   );
//   expect(newBoard.receiveAttack([2, 0])).toBe(
//     "You've hit battleShip at position [2,0]"
//   );
//   expect(newBoard.receiveAttack([3, 0])).toBe("you've sunk a battleShip!");

//   expect(newBoard.receiveAttack([0, 1])).toBe(`
//           You've hit fishingBoat at position [0,1]
//           you've sunk a fishingBoat!
//           You've sunken all the ships`);
// });

// test("testing withinBoundary horizontal...", () => {
//   const newBoard = gameBoard();
//   expect(newBoard.withinBoundary(7, 0, 14, "horizontal")).toBe(true);
// });

// test("testing withinBoundary vertical...", () => {
//   const newBoard = gameBoard();
//   expect(newBoard.withinBoundary(0, 7, 15, "vertical")).toBe(false);
// });

// test("testing placing a ship thats out of boundary of board...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   expect(newBoard.placeShip(battleShip, [8, 0])).toBe("out of bounds");
// });

// test("testing removingShip(non public) method...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [0, 0]);
//   //expect(newBoard.getBoard()[0][0].contains).toBe(null);
//   newBoard.removeShip(0, 0, battleShip);
//   expect(newBoard.getBoard()[0][0].contains).toBe(null);
//   expect(newBoard.getBoard()[0][1].contains).toBe(null);
//   expect(newBoard.getBoard()[0][2].contains).toBe(null);
// });

// test("testing turnship method...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [0, 0]);
//   newBoard.turnShip("battleShip");
//   expect(newBoard.getBoard()[0][0].contains.getName()).toBe("battleShip");
//   expect(newBoard.getBoard()[1][0].contains.getName()).toBe("battleShip");
//   expect(newBoard.getBoard()[2][0].contains.getName()).toBe("battleShip");
// });

// test("testing turnship method when another ship is beside it...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   const cruiser = ship("cruiser", 3);
//   newBoard.placeShip(cruiser, [0, 1]);
//   newBoard.placeShip(battleShip, [4, 0]);
//   expect(newBoard.turnShip("battleShip")).toBe("cell not available");
//   //newBoard.turnShip("battleShip");
//   //expect(newBoard.getBoard()[3][0].contains.getName()).toBe("battleShip");
//   // expect(newBoard.getBoard()[1][0].contains.getName()).toBe("battleShip");
//   // expect(newBoard.getBoard()[2][0].contains.getName()).toBe("battleShip");
//   //passed all
// });
// test("testing turnship method with boundaries of board", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 4);
//   newBoard.placeShip(battleShip, [5, 7  ]);
//   expect(newBoard.turnShip("battleShip")).toBe("out of bounds");
//   //newBoard.turnShip("battleShip");
//   //expect(newBoard.getBoard()[3][0].contains.getName()).toBe("battleShip");
//   // expect(newBoard.getBoard()[1][0].contains.getName()).toBe("battleShip");
//   // expect(newBoard.getBoard()[2][0].contains.getName()).toBe("battleShip");
//   //passed all
// });

// test("testing printBoard...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 5);
//   const cruiser = ship("cruiser", 3, "vertical");
//   newBoard.placeShip(cruiser, [0, 1]);
//   newBoard.placeShip(battleShip, [0, 0]);
//   newBoard.printBoard();
//   //passed
// });

// test("testing placeship when it is already on board...", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 5);
//   const cruiser = ship("cruiser", 3, "vertical");
//   newBoard.placeShip(cruiser, [0, 1]);
//   newBoard.placeShip(battleShip, [0, 0]);
//   newBoard.placeShip(battleShip, [1, 1]);
//   newBoard.printBoard();
//   //passed
// });

// test("testing ship placement at the last column as vertical..", () => {
//   const newBoard = gameBoard();
//   const battleShip = ship("battleShip", 5);
//   const cruiser = ship("cruiser", 3, "vertical");
//   newBoard.placeShip(cruiser, [0, 1]);
//   newBoard.placeShip(battleShip, [0, 0]);
//   newBoard.placeShip(battleShip, [1, 1]);
//   newBoard.placeShip(cruiser, [9, 0]);
//   newBoard.printBoard();
// });

test("testing numCoordToAlphaNumCoord method..", () => {
  expect(gameBoard({ id: 0 }).numCoordToAlphaNumCoord([0, 0])).toBe("ja");
});
