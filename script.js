// Query container element
const container = document.querySelector(".container");

let grids = 16;
let opacity = 1;
let count = 0;

// Create 16 rows
function drawGrids(grids) {
    for (let row = 1; row < grids; row++) {
        // Create 16 column
        const tempRowDiv = document.createElement("div");
        tempRowDiv.className = "row";

        for (let col = 1; col < grids; col++) {
            const tempColDiv = document.createElement("div");
            tempColDiv.className = "col";
            tempColDiv.id = "r-" + row + "c-" + col;

            tempRowDiv.append(tempColDiv);
        }

        container.append(tempRowDiv);
    }
}

function generateColorCode() {
    const alphabets = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    const noOfIteration = 6;

    let colorCode = "#";

    for (let i = 0; i < noOfIteration; i++) {
        let index = Math.floor(Math.random() * alphabets.length);
        colorCode += alphabets[index];
    }

    return colorCode;
}

// Add button event
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    // Prompt user for no. of grids
    const userInput = prompt("Please enter a grid size between 1 - 100");

    if (userInput >= 1 && userInput <= 100) {
        // Amend the grid size to user input
        grids = userInput;

        // Remove elements in the container from the dom
        container.innerHTML = "";

        // Draw a new grid
        drawGrids(grids);
    }
});

// Mouse hover event
document.addEventListener("mouseover", (event) => {
    const colorCode = generateColorCode();
    const targetId = "#" + event.target.id;

    let div = document.querySelector(targetId);
    div.style.backgroundColor = colorCode;

    if (opacity != 0) {
        opacity -= 0.005;
    }

    div.style.opacity = opacity;
});

// Main function
drawGrids(grids);
