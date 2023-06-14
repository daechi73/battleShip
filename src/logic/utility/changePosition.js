import renderShip from "../../render/renderShip";
import positionUtility from "./positionUtility";

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
  if (shipContainer.classList.contains("cell")) {
    const ship = ships.find(
      (ship) => ship.getName() === e.target.parentNode.id
    );
    ship.changePosition();
    const newShip = renderShip(ship);
    if (positionUtility().checkBoundary(shipContainer, newShip)) {
      if (
        positionUtility().checkCellAvailability(shipContainer, newShip, true)
      ) {
        positionUtility().enableCell(shipContainer, e.target.parentNode);
        e.target.parentNode.remove();
        shipContainer.appendChild(newShip);
        positionUtility().disableCell(shipContainer, newShip);
      } else ship.changePosition;
    } else ship.changePosition();

    dragEventObject.recallDragEvents();

    newShip.childNodes.forEach((child) => {
      child.addEventListener("click", (event) => {
        changePosition(ships, event, dragEventObject);
      });
    });
  }
};

export default changePositionListener;
