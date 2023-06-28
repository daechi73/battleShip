import renderShip from "./renderShip.js";
const renderPort = (ships) => {
  const portContainer = document.createElement("div");
  const port = document.createElement("div");
  const direction = document.createElement("div");
  direction.textContent = "Position your ships";
  direction.classList.add("direction");

  portContainer.classList.add("container-port");
  port.classList.add("port");

  port.appendChild(direction);

  ships.forEach((ship, i) => {
    const shipDock = document.createElement("div");
    const boat = renderShip(ship);
    shipDock.classList.add("dock");
    shipDock.appendChild(boat);
    port.appendChild(shipDock);
  });

  portContainer.appendChild(port);
  document.querySelector(".container-main").appendChild(portContainer);
};

export { renderPort };
