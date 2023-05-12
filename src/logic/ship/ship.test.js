import ship from "./ship.js";

test("testing ship hit function..", () => {
  const newShip = ship(5);
  newShip.hit();
  expect(newShip.getTimesHit()).toBe(1);
});
test("testing ship isSunk Function..", () => {
  const newShip = ship(5);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});
