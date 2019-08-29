let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;

makeGrid(height, width);

sizePicker.addEventListener("click", (event) => {

  event.preventDefault();

  height;
  width;
  
  table.firstElementChild.remove();

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
