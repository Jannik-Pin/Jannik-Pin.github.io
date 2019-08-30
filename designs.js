var sizePicker = document.querySelector("#sizePicker");
var table = document.querySelector("#pixelCanvas");
var color = document.querySelector("#colorPicker");
var height = document.querySelector("#inputHeight").value;
var width = document.querySelector("#inputWidth").value;

makeGrid(height, width);

sizePicker.addEventListener("submit", (event) => {

  event.preventDefault();

  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
 
  table.firstElementChild.remove();

  makeGrid(height, width);

});


/**
*make Grid is creating a new grid 
*height and width stand for cells and rows of the new grid 
*we start with r=0. as for r being smaller than the figure of the height, increase r by one 
*let the row increase by the number of r (input into the height field ) 
*for cells the same as for rows (start at0, continue as long as width greater r and increase r by 1 
* cell increase by one for every cell (width input) 
*add an event listener for every cell when clicked the background color of this cell will be in the chosen color. 
*only that cell and only for that color
*/
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
