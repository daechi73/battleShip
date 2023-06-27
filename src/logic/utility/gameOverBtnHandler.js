import renderStart from "../../render/renderStartPage";

const yesBtnEventListener = () => {
  const yesBtn = document.querySelector(".yesBtn");
  yesBtn.addEventListener("click", () => {
    document.querySelector(".container-main").textContent = "";
    renderStart();
    yesBtn.parentNode.parentNode.parentNode.remove();
  });
};
const noBtnEventListener = () => {
  const noBtn = document.querySelector(".noBtn");

  noBtn.addEventListener("click", () => {
    noBtn.parentNode.parentNode.textContent = "GAME OVER";
  });
};

export { yesBtnEventListener, noBtnEventListener };
