// Get a reference to the element whose text you want to change
const changingText = document.getElementById('changingText');

// Define an array of texts to cycle through
const texts = [
    'github',
    'kaggle',
    'leetcode'
];

let currentIndex = 0;

// Function to change the text on an interval
function changeTextOnInterval() {
    changingText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

// Change the text immediately when the page loads
changeTextOnInterval();

// Set an interval to change the text every 2 seconds (2000 milliseconds)
setInterval(changeTextOnInterval, 2000);
