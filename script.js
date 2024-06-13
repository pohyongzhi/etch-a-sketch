// Query container element
const container = document.querySelector(".container");

let grids = 16;

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
// document.addEventListener("mouseover", );
