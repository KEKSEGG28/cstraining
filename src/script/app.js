const circleNode = document.querySelector(".circle");
const textNode = document.querySelector(".text");
const btnNode = document.querySelector(".btn");
let arrTime = [];
let averageSum = [];
function clickHandler() {
  const max = 100;
  circleNode.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  circleNode.style.left = `${Math.floor(Math.random() * max + 1)}%`;
  const dateTime = new Date();
  let time = dateTime.getTime();
  arrTime.push(time);

  let lastKey = arrTime[arrTime.length - 1];
  let penultimate = arrTime[arrTime.length - 2];
  let summ = 0;
  if (!isNaN(lastKey) && !isNaN(penultimate)) {
    summ = lastKey - penultimate;
    averageSum.push(summ);
  }
  changeClass();
  renderText(summ);
}
function average(arrTime) {
  return arrTime.reduce((e, a) => e + a, 0) / arrTime.length;
}

function renderText(summ) {
  const subtitleNode = document.createElement("p");
  subtitleNode.className = "subtitle";
  textNode.append(subtitleNode);
  subtitleNode.textContent = `Время: ${summ} ms`;
  textNode.append(btnNode);
  if (average(averageSum) > summ) {
    subtitleNode.style.color = "green";
  } else {
    subtitleNode.style.color = "red";
  }
}
function changeClass() {
  btnNode.classList.remove("display");
}
function btnHandler() {
  averageSum = [];
  textNode.innerHTML = "";
  btnNode.classList.add("display");
}
btnNode.addEventListener("click", btnHandler);
circleNode.addEventListener("click", clickHandler);
