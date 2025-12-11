// Content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Get references to the color box and button
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random hex color
    function getRandomColor() {
        // Generate a random number , then convert to hex
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // When the button is clicked, change the box's background color
    changeColorBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
});


