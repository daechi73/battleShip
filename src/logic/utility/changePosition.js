import renderShip from "../../render/renderUI/renderShip";
import positionUtility from "./positionUtility";

const changePositionListener = (board, dragEventObject) => {
  const shipSubsets = document.querySelectorAll(".shipSubset");
  shipSubsets.forEach((shipSubset) => {
    shipSubset.addEventListener("click", (e) => {
      changePosition(board, e, dragEventObject);
    });
  });
};
const changePosition = (board, e, dragEventObject) => {
  const shipContainer = e.target.parentNode.parentNode;
  console.log(e.target.parentNode.parentNode);
  if (shipContainer.classList.contains("dock")) {
    // const ship = board.findShip(e.target.parentNode.id);
    // ship.changePosition();
    // e.target.parentNode.remove();
    // const newShip = renderShip(ship);
    // shipContainer.appendChild(newShip);
    // dragEventObject.recallDragEvents();
    // newShip.childNodes.forEach((child) => {
    //   child.addEventListener("click", (event) => {
    //     changePosition(board, event, dragEventObject);
    //   });
    // });
  }
  if (shipContainer.classList.contains("cell")) {
    const ship = board.findShip(e.target.parentNode.id);
    board.turnShip(ship.getName());
    board.printBoard();
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
        changePosition(board, event, dragEventObject);
      });
    });
  }
};

export default changePositionListener;
