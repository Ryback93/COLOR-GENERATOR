document.getElementById("button").addEventListener("click", function() {
    const color = document.getElementById("colorPicker").value.slice(1);
    const mode = document.getElementById("harmonies").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            // Remove existing color display if it exists
            document.getElementById("color-display")?.remove();

            // Create a new display for colors
            const display = document.createElement("div");
            display.id = "color-display";
            display.style.display = "flex";
            display.style.flexWrap = "wrap";  // Allow wrapping of color boxes

            data.colors.forEach(color => {
                const colorBox = document.createElement("div");
                colorBox.style.backgroundColor = color.hex.value;
                colorBox.style.width = "20vw";  // Set width to 20% of the viewport width
                colorBox.style.height = "25vw"; // Set height to 25% of the viewport width
                colorBox.style.maxWidth = "120px"; // Max width for larger screens
                colorBox.style.maxHeight = "150px"; // Max height for larger screens
                display.appendChild(colorBox);
            });

            // Clear existing palette and add the new display
            document.getElementById("palette").innerHTML = "";
            document.getElementById("palette").appendChild(display);

            // Clear existing hex display
            document.getElementById("hex-display").innerHTML = "";

            const hexRow = document.createElement("div");
            hexRow.style.display = "flex";
            hexRow.style.justifyContent = "center";
            hexRow.style.flexWrap = "wrap"; // Allow hex values to wrap

            data.colors.forEach(color => {
                const hex = document.createElement("div");
                hex.textContent = color.hex.value;
                hex.style.color = "#D5D4D8";
                hex.style.fontSize = "2rem";  // Responsive font size with rem units
                hex.style.display = "flex";
                hex.style.alignItems = "center";
                hex.style.justifyContent = "center";
                hex.style.width = "20vw";  // Similar to color box width
                hex.style.textAlign = "center";
                hex.style.margin = "0.5rem"; // Space between hex values
                hexRow.appendChild(hex);
            });

            // Append the hex values to the hex display
            document.getElementById("hex-display").appendChild(hexRow);
        });
});
