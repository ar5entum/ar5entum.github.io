// Get references to the button and the element to change text
const changeTextButton = document.getElementById('changeTextButton');
const textToChange = document.getElementById('textToChange');

// Define a function to change the text
function changeText() {
    textToChange.textContent = 'Text has been changed!';
}

// Add a click event listener to the button
changeTextButton.addEventListener('click', changeText);
