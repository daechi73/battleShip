import renderShip from "../../render/renderShip";
import dragEvent from "./dragDrop";
const changePositionListener = (board, ships, dragEventObject) => {
  const shipSubsets = document.querySelectorAll(".shipSubset");
  console.log(dragEventObject);
  shipSubsets.forEach((shipSubset) => {
    shipSubset.addEventListener("click", (e) => {
      changePosition(ships, e);
    });
  });
};
const changePosition = (ships, e) => {
  const shipContainer = e.target.parentNode.parentNode;
  console.log(e.target.parentNode.parentNode);
  console.log("clicking");
  if (shipContainer.classList.contains("dock")) {
    console.log("changing position");
    console.log(e.target.parentNode.id);
    const ship = ships.find(
      (ship) => ship.getName() === e.target.parentNode.id
    );
    ship.changePosition();
    console.log(ship.getPosition());
    e.target.parentNode.remove();
    const newShip = renderShip(ship);
    shipContainer.appendChild(newShip);
    newShip.childNodes.forEach((child) => {
      child.addEventListener("click", (event) => {
        changePosition(ships, event);
      });
    });

    // if (dragEventObject) {
    //   dragEventObject.removeEvents();
    //   console.log("existing..");
    // } else newDragEvent.removeEvents();
    // const newDragEvent = dragEvent();
  }
};

export default changePositionListener;
