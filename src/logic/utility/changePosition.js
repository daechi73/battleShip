import renderShip from "../../render/renderShip";
import dragEvent from "./dragDrop";
const changePositionListener = (board, ships, dragEventObject) => {
  const shipSubsets = document.querySelectorAll(".shipSubset");
  shipSubsets.forEach((shipSubset) => {
    shipSubset.addEventListener("click", (e) => {
      changePosition(ships, e, dragEventObject);
    });
  });
};
const changePosition = (ships, e, dragEventObject) => {
  const shipContainer = e.target.parentNode.parentNode;
  console.log(e.target.parentNode.parentNode);
  if (shipContainer.classList.contains("dock")) {
    const ship = ships.find(
      (ship) => ship.getName() === e.target.parentNode.id
    );
    ship.changePosition();
    e.target.parentNode.remove();
    const newShip = renderShip(ship);
    shipContainer.appendChild(newShip);

    dragEventObject.recallDragEvents();

    newShip.childNodes.forEach((child) => {
      child.addEventListener("click", (event) => {
        changePosition(ships, event, dragEventObject);
      });
    });
  }
};

export default changePositionListener;
