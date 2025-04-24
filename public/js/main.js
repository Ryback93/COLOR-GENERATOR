document.getElementById("button").addEventListener("click", function() {
    const color = document.getElementById("colorPicker").value.slice(1)
    const mode = document.getElementById("harmonies").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then (res => res.json())
        .then (data => {
            document.getElementById("color-display")?.remove()

            const display = document.createElement("div")
            display.id = "color-display"
            display.style.display = "flex"

            data.colors.forEach(color => {
                const colorBox = document.createElement("div")
                colorBox.style.backgroundColor = color.hex.value
                colorBox.style.width = "110px"
                colorBox.style.height = "460px"
                display.appendChild(colorBox)
            })
            
            document.getElementById("palette").innerHTML = ""
            document.getElementById("palette").appendChild(display)

            document.getElementById("hex-display").innerHTML = ""

            const hexRow = document.createElement("div")
            hexRow.style.display = "flex"
            hexRow.style.justifyContent = "center"

            data.colors.forEach(color => {
                const hex = document.createElement("div")
                hex.textContent = color.hex.value
                hex.style.color = "#D5D4D8"
                hex.style.fontSize = "12px"
                hex.style.display = "flex"
                hex.style.alignItems = "center"
                hex.style.justifyContent = "center"
                hex.style.width = "110px"
                hex.style.textAlign = "center"
                hexRow.appendChild(hex)
            })

            document.getElementById("hex-display").appendChild(hexRow)
        })
})