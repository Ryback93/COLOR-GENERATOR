document.getElementById("button").addEventListener("click", function() {
    const color = document.getElementById("colorPicker").value.slice(1);
    const mode = document.getElementById("harmonies").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            // Remove existing displays
            document.getElementById("color-display")?.remove();
            document.getElementById("hex-display").innerHTML = "";

            // Create color display
            const display = document.createElement("div");
            display.id = "color-display";
            display.style.display = "flex";
            display.style.flexWrap = "wrap";
            display.style.justifyContent = "center";
            display.style.gap = "0.5rem";
            display.style.width = "100%";

            // Create hex display container
            const hexRow = document.createElement("div");
            hexRow.style.display = "flex";
            hexRow.style.flexWrap = "wrap";
            hexRow.style.justifyContent = "center";
            hexRow.style.gap = "0.5rem";
            hexRow.style.width = "100%";

            data.colors.forEach(color => {
                // Color boxes
                const colorBox = document.createElement("div");
                colorBox.style.backgroundColor = color.hex.value;
                colorBox.style.width = "calc(50% - 0.5rem)"; // Two columns with gap
                colorBox.style.height = "6rem";
                colorBox.style.minHeight = "6rem";
                colorBox.style.borderRadius = "0.5rem";
                display.appendChild(colorBox);

                // Hex values
                const hex = document.createElement("div");
                hex.textContent = color.hex.value;
                hex.style.color = "#D5D4D8";
                hex.style.fontSize = "0.875rem";
                hex.style.width = "calc(50% - 0.5rem)"; // Match color boxes
                hex.style.textAlign = "center";
                hex.style.padding = "0.5rem 0";
                hexRow.appendChild(hex);
            });

            // Append to DOM
            document.getElementById("palette").innerHTML = "";
            document.getElementById("palette").appendChild(display);
            document.getElementById("hex-display").appendChild(hexRow);
        });
});