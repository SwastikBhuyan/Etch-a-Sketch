const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const colorPicker = document.querySelector(".colorPicker");
let grids = +prompt("enter the number of grids you want");

while (grids > 100) {
    grids = +prompt("try again!")
};

if (grids <= 100) {
    for (let i = 0; i < grids; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "gridDiv";
        container.appendChild(gridDiv);
        for (let j = 0; j < grids ; j++) {
            const gridDivDiv = document.createElement("div");
            gridDivDiv.className = "gridDivDiv";
            gridDiv.appendChild(gridDivDiv);
        }
    }
}


const gridDivDivs = document.querySelectorAll(".gridDivDiv");
gridDivDivs.forEach(gridDivDiv => {
    gridDivDiv.addEventListener("mouseover",handleMouseOver);
});

function handleMouseOver(event) {
    const selectedColor = colorPicker.value;
    event.target.style.backgroundColor = selectedColor;
}

//reset functionality
reset.addEventListener("click", function() {
    gridDivDivs.forEach(gridDivDiv => {
        gridDivDiv.style.backgroundColor = "#FFFFFF"
    });
});