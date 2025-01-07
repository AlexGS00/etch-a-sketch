document.addEventListener("DOMContentLoaded", () => {
    console.log("MORR")
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
        }
        newCanvas.appendChild(row);
    }

    let canvas = document.querySelector(".canvas")
    canvas.remove()

    document.querySelector(".container").appendChild(newCanvas)
}

function randomColor(){
    return Math.floor(Math.random * 256);
}