import playGame from "../logic/playGame/playGame";

const renderStart = () => {
  const startPage = document.createElement("div");
  const title = document.createElement("div");
  const prompt = document.createElement("div");
  const input = document.createElement("input");
  const startBtn = document.createElement("button");
  const systemMsg = document.createElement("div");

  title.textContent = "BattleShip";
  prompt.textContent = "Enter your Name";
  startBtn.textContent = "Start";

  systemMsg.classList.add("startSystemMsg");
  startBtn.classList.add("startBtn");
  input.classList.add("nameInput");
  title.classList.add("startTitle");
  prompt.classList.add("startPrompt");
  startPage.classList.add("startPage");

  startPage.appendChild(title);
  startPage.appendChild(prompt);
  startPage.appendChild(input);
  startPage.appendChild(startBtn);
  startPage.appendChild(systemMsg);
  document.body.appendChild(startPage);

  startBtn.addEventListener("click", () => {
    if (input.value !== "") {
      startPage.style.display = "none";
      playGame(input.value);
    } else {
      systemMsg.textContent = "Please enter your game name";
    }
  });
};

export default renderStart;
