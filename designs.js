var sizePicker = document.querySelector("#sizePicker");

var h = document.querySelector('#inputHeight').value;

var w = document.querySelector('#inputWidth').value;

var canvas = document.querySelector('#pixelCanvas');

var color = document.querySelector('#colorPicker');

makeGrid(h, w);

sizePicker.addEventListener("click", function(e){

e.preventDefault();

let h = document.getElementById('inputHeight').value;

let w = document.getElementById('inputWeight').value;

clearCanvas();

makeGrid(h, w);

});

function fillCell() {

cell.style.backgroundColor = color.value;

};

function makeGrid(h, w) {

for (var r = 1; r <= h; r++) {

let row = canvas.insertRow(r);

for (var c = 1; c <= w; c++) {

let cell = row.insertCell(c);

cell.addEventListener('click', fillCell);

}

}

};

function clearCanvas() {

while (canvas.rows.length > 0) {

canvas.firstElementChild.remove();

};

};
