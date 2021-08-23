//Helper functions for modifying the DOM
export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};
//scene - day - night
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  //opposite of hidden - use !show
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  //opposite of hidden - use !show
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner> ${text}</div>`;
};
