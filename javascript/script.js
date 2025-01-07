document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", event => {
        let newSize = document.querySelector("input").value;
        (newSize <= 100) ? generateNewCanvas(newSize) 
        : document.querySelector("#warning").textContent = "Maximum size is 100";
        document.querySelector("input").value = 0;
    })
    generateNewCanvas(16)
})

function generateNewCanvas(size){
    let newCanvas = document.createElement("div");
    newCanvas.classList.add("canvas")
    for(let i = 0; i < size; i++){

        let row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < size; j++){

            let col = document.createElement("div");

            col.classList.add("col");
            col.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            col.style.opacity = 0;

            col.addEventListener("mouseover", changeColor)

            row.appendChild(col);
        }
        newCanvas.appendChild(row);
    }

    let canvas = document.querySelector(".canvas")
    canvas.remove()

    document.querySelector(".container").appendChild(newCanvas)
}

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function changeColor(event){
    let square = event.target;
    let newSquareOpacity = parseFloat(square.style.opacity);
    newSquareOpacity += 0.1;
    square.style.opacity = newSquareOpacity;
}