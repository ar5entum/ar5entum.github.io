// Define an array of texts to cycle through
const textArray = [
    "Text 1",
    "Text 2",
    "Text 3"
];

const textContainer = document.getElementById("changing-text");

let currentIndex = 0;

// Function to change the text on an interval
function changeText() {
    textContainer.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

// Change the text every 3 seconds (3000 milliseconds)
setInterval(changeText, 3000);
