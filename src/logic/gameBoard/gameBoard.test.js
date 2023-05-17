import gameBoard from "./gameBoard";

test("testing gameboard...", () => {
  expect(gameBoard().createBoard()).toContainEqual({
    charCode: "A1",
    column: 1,
    row: "A",
  });
});
