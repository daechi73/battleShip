import renderGameOverUI from "../../render/renderUI/renderGameOverUi";
import {
  noBtnEventListener,
  yesBtnEventListener,
} from "../utility/gameOverBtnHandler";

const gameOverUI = (player) => {
  //console.log(player);
  renderGameOverUI(player);
  noBtnEventListener();
  yesBtnEventListener();
};

export default gameOverUI;
