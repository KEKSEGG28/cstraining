const circleNode = document.querySelector(".circle");
const textNode = document.querySelector(".text");
const btnNode = document.querySelector(".btn");
let arr = [];
let averageSum = [];
function clickHandler() {
  const max = 90;
  circleNode.style.top = `${Math.floor(Math.random() * (max + 1))}%`;
  circleNode.style.left = `${Math.floor(Math.random() * max + 1)}%`;
  const date = new Date();
  let keyId = date.getTime();
  arr.push(keyId);

  let lastKey = arr[arr.length - 1];
  let penultimate = arr[arr.length - 2];
  let summ = 0;
  if (!isNaN(lastKey) && !isNaN(penultimate)) {
    summ = lastKey - penultimate;
    averageSum.push(summ);
  }
  changeClass();
  renderText(summ);
}
function average(arr) {
  return arr.reduce((e, a) => e + a, 0) / arr.length;
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
  // return subtitle;
}
function changeClass() {
  btnNode.classList.remove("display");
}
function btnHandler() {
  textNode.innerHTML = "";
  btnNode.classList.add("display");
}
btnNode.addEventListener("click", btnHandler);
circleNode.addEventListener("click", clickHandler);
