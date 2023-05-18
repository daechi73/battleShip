import gameBoard from "./gameBoard";
import ship from "../ship/ship";

test("testing gameboard...", () => {
  // expect(gameBoard().getBoard()).toContainEqual({
  //   charCode: "A1",
  //   column: 1,
  //   row: "A",
  //   contains: null,
  // });

  const newBoard = gameBoard();
  const battleShip = ship("battleShip", 4);
  newBoard.placeShip(battleShip, [0, 0]);
  //expect(newBoard.placeShip(battleShip, [0, 0])).toBe("ja");
  expect(newBoard.getBoard()[0][0].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[0][1].contains.getName()).toBe("battleShip");
  expect(newBoard.getBoard()[0][2].contains.getName()).toBe("battleShip");
});
