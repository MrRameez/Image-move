const body = document.querySelector("body");
const myImg = document.querySelector("#balloon");

window.handleMyMouseMove = (event) => {
  myImg.style.top = `${event.clientY}px`;
  myImg.style.left = `${event.clientX}px`;
};