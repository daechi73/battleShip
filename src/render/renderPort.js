import renderShip from "./renderShip.js";
const renderPort = (ships) => {
  const portContainer = document.createElement("div");
  const port = document.createElement("div");

  portContainer.classList.add("container-port");
  port.classList.add("port");

  //
  // const randomDiv = document.createElement("div");
  // const randomDIvDiv = document.createElement("div");
  // randomDiv.classList.add("randomDiv");
  // randomDiv.textContent = "randomDiv";
  // randomDiv.draggable = "true";
  // randomDiv.style.cssText = `
  //   height: 35px;
  //   width: 76px;
  //   background-color:black;
  // `;
  // randomDIvDiv.appendChild(randomDiv);
  // port.appendChild(randomDIvDiv);
  //

  // main
  //
  ships.forEach((ship, i) => {
    const shipDock = document.createElement("div");
    const boat = renderShip(ship);
    shipDock.classList.add("dock");
    shipDock.classList.add("droppable");
    shipDock.appendChild(boat);
    port.appendChild(shipDock);
  });

  portContainer.appendChild(port);
  document.querySelector(".container-main").appendChild(portContainer);
  //

  // const boat = renderShip(ships[0]);
  // //boat.draggable = "true";
  // port.appendChild(boat);

  // portContainer.appendChild(port);
  // document.querySelector(".container-main").appendChild(portContainer);
};

export { renderPort };
