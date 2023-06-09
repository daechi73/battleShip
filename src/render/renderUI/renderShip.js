const renderShip = (ship) => {
  const boat = document.createElement("div");
  boat.classList.add(`ship`);
  boat.id = `${ship.getName()}`;
  boat.draggable = "true";
  //boat.dataset.name = `${ship.getName()}`;
  if (ship.getPosition() === "horizontal") {
    for (let i = 1; i <= ship.getLength(); i++) {
      const shipSubset = document.createElement("div");
      shipSubset.classList.add("shipSubset");
      shipSubset.dataset.subset = `${i}`;
      //shipSubset.dataset.mainset = `${ship.getName()}`;
      //shipSubset.dataset.mainsetLength = `${ship.getLength()}`;
      shipSubset.style.cssText = `
        height:35px;
        width:36px;
      `;
      boat.appendChild(shipSubset);
    }

    boat.classList.add("horizontal");
    boat.style.width = `${ship.getLength() * 36}px`;
    boat.style.height = "35px";
    //boat.innerHTML = `<div class="shipName">${ship.getName()}</div>`;
    //boat.textContent = `${ship.getName()}`;

    boat.dataset.length = `${ship.getLength()}`;
    boat.dataset.position = `${ship.getPosition()}`;
  } else {
    boat.classList.add("vertical");
    for (let i = 1; i <= ship.getLength(); i++) {
      const shipSubset = document.createElement("div");
      shipSubset.classList.add("shipSubset");
      shipSubset.dataset.subset = `${i}`;
      //shipSubset.dataset.mainset = `${ship.getName()}`;
      //shipSubset.dataset.mainsetLength = `${ship.getLength()}`;
      shipSubset.style.cssText = `
        height:36px;
        width:37px;
      `;
      boat.appendChild(shipSubset);
    }
    boat.style.width = "35px";
    boat.style.height = `${ship.getLength() * 36}px`;
    boat.dataset.length = `${ship.getLength()}`;

    boat.dataset.position = `${ship.getPosition()}`;
  }
  return boat;
};

export default renderShip;
