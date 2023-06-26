import gameStartBtnEventListener from "../../logic/utility/gameStartBtnEventListener";

const renderGameStartBtn = (
  player1Board,
  player2Board,
  dragEventObject,
  changePositionObj,
  player1,
  player2
) => {
  if (document.querySelector(".port")) {
    document.querySelector(".port").remove();

    const gameStartBtn = document.createElement("button");
    gameStartBtn.textContent = "Game Start";
    gameStartBtn.classList.add("gameStartBtn");
    document.querySelector(".container-port").appendChild(gameStartBtn);
    gameStartBtnEventListener(
      gameStartBtn,
      player1Board,
      player2Board,
      dragEventObject,
      changePositionObj,
      player1,
      player2
    );
  }
};

export default renderGameStartBtn;
