const renderShip = (ship) => {
  const boat = document.createElement("div");
  boat.classList.add(`ship`);
  boat.dataset.name = `${ship.getName()}`;
  if (ship.getPosition() === "horizontal") {
    boat.style.width = `${ship.getLength() * 35}px`;
    boat.style.height = "35px";
  } else {
    boat.style.width = "35px";
    boat.style.height = `${ship.length * 35}px`;
  }
  return boat;
};

export default renderShip;
