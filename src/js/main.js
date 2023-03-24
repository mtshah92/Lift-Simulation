const floor = document.querySelector("#floors");
const lift = document.querySelector("#lifts");
const checkBtn = document.querySelector(".btnCheck");
const inputCard = document.querySelector(".inputCard");
const liftVisual = document.querySelector(".liftVisual");

const liftStimulation = () => {
  inputCard.style.display = "none";

  for (let i = floor.value; i > 0; i--) {
    liftVisual.innerHTML += `<div ><hr width="40%" align="left"> Floor ${i}</div>`;
  }
};
checkBtn.addEventListener("click", liftStimulation);
