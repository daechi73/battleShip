const renderShip = (ship) => {
  const boat = document.createElement("div");
  boat.classList.add(`ship`);
  boat.id = `${ship.getName()}`;
  boat.dataset.name = `${ship.getName()}`;

  if (ship.getPosition() === "horizontal") {
    boat.style.width = `${ship.getLength() * 38}px`;
    boat.style.height = "35px";
    //boat.innerHTML = `<div class="shipName">${ship.getName()}</div>`;
    boat.textContent = `${ship.getName()}`;
    boat.draggable = "true";
  } else {
    boat.style.width = "37px";
    boat.style.height = `${ship.length * 35}px`;
    boat.draggable = "true";
  }
  return boat;
};

export default renderShip;
