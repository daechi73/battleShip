import renderStart from "../../render/renderStartPage";

const yesBtnEventListener = () => {
  const yesBtn = document.querySelector(".yesBtn");
  yesBtn.addEventListener("click", () => {
    document.querySelector(".container-main").textContent = "";
    document.querySelector(".gameTitle").remove();
    renderStart();
    yesBtn.parentNode.parentNode.parentNode.remove();
  });
};
const noBtnEventListener = () => {
  const noBtn = document.querySelector(".noBtn");

  noBtn.addEventListener("click", () => {
    noBtn.parentNode.parentNode.innerHTML =
      "<div class='finalMsg'>GAME OVER</div>";
  });
};

export { yesBtnEventListener, noBtnEventListener };
