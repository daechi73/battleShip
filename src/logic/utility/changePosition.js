import renderShip from "../../render/renderUI/renderShip";
import positionUtility from "./positionUtility";

const changePositionListener = (board, moveEventObject) => {
  const shipSubsets = document.querySelectorAll(".shipSubset");
  const changePositionFuncHolder = (e) => {
    changePosition(board, e, moveEventObject);
  };
  const addEvents = (() => {
    shipSubsets.forEach((shipSubset) => {
      shipSubset.addEventListener("dblclick", changePositionFuncHolder);
    });
  })();
  const removeEvents = () => {
    shipSubsets.forEach((shipSubset) => {
      shipSubset.removeEventListener("dblclick", changePositionFuncHolder);
    });
  };
  return { removeEvents };
};
const changePosition = (board, e, moveEventObject) => {
  const shipContainer = e.target.parentNode.parentNode;
  console.log(e.target.parentNode.parentNode);
  if (shipContainer.classList.contains("dock")) {
    // const ship = board.findShip(e.target.parentNode.id);
    // ship.changePosition();
    // e.target.parentNode.remove();
    // const newShip = renderShip(ship);
    // shipContainer.appendChild(newShip);
    // moveEventObject.recallDragEvents();
    // newShip.childNodes.forEach((child) => {
    //   child.addEventListener("dblclick", (event) => {
    //     changePosition(board, event, moveEventObject);
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
      }
    }
    //console.log(moveEventObject);
    moveEventObject.recallDragEvents();

    newShip.childNodes.forEach((child) => {
      child.addEventListener("dblclick", (event) => {
        changePosition(board, event, moveEventObject);
      });
    });
  }
};

export default changePositionListener;
