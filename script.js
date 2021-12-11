const screen = document.getElementById("screen");
function genGrid(e) {
  let GridSize = prompt("How big do you want the play area to be?");
  if (GridSize >= 100) {
    GridSize = 100;
  }
  const btn = document.getElementById("btn");
  screen.style.setProperty("--grid-rows", GridSize);
  screen.style.setProperty("--grid-cols", GridSize);
  for (i = 0; i < GridSize * GridSize + 43; i++) {
    let box = document.createElement("div");
    box.addEventListener("mouseover", draw);
    box.style.removeProperty.backgroundColor;
    box.classList = "box";
    screen.appendChild(box);
  }
}
function draw(e) {
  const randomRed = Math.floor(Math.random() * 200);
  const randomGreen = Math.floor(Math.random() * 200);
  const randomBlue = Math.floor(Math.random() * 200);
  e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
const clear = document.getElementById("btn");
clear.addEventListener("click", erase);
function erase(e) {
  screen.innerHTML = "";
  return genGrid();
}

genGrid();
