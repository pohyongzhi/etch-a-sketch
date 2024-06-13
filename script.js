// Query container element
const container = document.querySelector(".container");

let grids = 100;

// Create 16 rows
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

// Mouse hover event
document.addEventListener("mouseover", (event) => {
    const colorCode = generateColorCode();
    const targetId = "#" + event.target.id;
    console.log(colorCode);

    let div = document.querySelector(targetId);
    div.style.backgroundColor = colorCode;
});

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
