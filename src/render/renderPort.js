import renderShip from "./renderShip.js";
const renderPort = (ships) => {
  const portContainer = document.createElement("div");
  const port = document.createElement("div");
  portContainer.classList.add("container-port");
  port.classList.add("port");

  ships.forEach((ship) => {
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
