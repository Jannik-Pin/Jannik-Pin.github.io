var sizePicker = document.querySelector(#sizePicker);
var field = document.querySelector(#pixelCanvas);
var color = document.querySelector(#colorPicker);
var height = document.querySelector(#inputHeight).value;
let width = document.querySelector(#inputWidth).value;

makeGrid(height, width);

sizePicker.addEventListener("click", (event) => {

  event.preventDefault();

  let height = document.getElementbyID("input.height").value;
  let width = document.getElementbyID("input.width").value;
 
  canvas.firstElementChild.remove();

  makeGrid(height, width);

});

function makeGrid(height, width) {

for (let r = 0; r < height; r++) {
    let row = table.insertRow(r);
    for (let c = 0; c < width; c++) {
      let cell = row.insertCell(c);
      cell.addEventListener("click", (event) => {
        cell.style.backgroundColor = color.value;
      })
    }
  }
}
