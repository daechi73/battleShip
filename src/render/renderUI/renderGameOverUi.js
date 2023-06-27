const renderGameOverUI = (player) => {
  const containerGameOverUI = document.createElement("div");
  const gameOverUI = document.createElement("div");
  const header = document.createElement("div");
  const playAgain = document.createElement("div");
  const yesBtn = document.createElement("button");
  const noBtn = document.createElement("button");
  const containerBtn = document.createElement("div");
  const containerText = document.createElement("div");

  containerGameOverUI.classList.add("container-gameOverUI");
  containerText.classList.add("container-text");
  containerBtn.classList.add("container-btn");
  yesBtn.classList.add("yesBtn");
  noBtn.classList.add("noBtn");
  playAgain.classList.add("playAgainTxt");
  gameOverUI.classList.add("gameOverUI");
  header.classList.add("GOUIHeader");
  header.textContent = `${player.name} Won!`;
  playAgain.textContent = "Play again?";
  yesBtn.textContent = "Y";
  noBtn.textContent = "N";

  containerText.appendChild(header);
  containerText.appendChild(playAgain);
  containerBtn.appendChild(yesBtn);
  containerBtn.appendChild(noBtn);
  gameOverUI.appendChild(containerText);
  gameOverUI.appendChild(containerBtn);
  containerGameOverUI.appendChild(gameOverUI);
  document.body.appendChild(containerGameOverUI);
};

export default renderGameOverUI;
