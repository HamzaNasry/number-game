// Define minNum and maxNum globally
const minNum = 1;
const maxNum = 100;

// Generate the answer once when the page loads
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Define the game function
function game() {
    // Get user's guess from input field
    const userInput = parseInt(document.querySelector('.input').value);

    // Get input field and button elements
    const inputField = document.querySelector('.input');
    const button = document.querySelector('.button');

    // Check if user's guess is correct
    if (userInput === answer) {
        // Change input field border color to green
        inputField.style.border = '2px solid green';
        // Change button text to "Correct!"
        button.textContent = 'Correct!';

        // Reset styles and clear input field after 2.5 seconds
        setTimeout(function() {
            inputField.style.border = '';
            button.textContent = 'Guess!';
            inputField.value = ""; // Clear the input field
            // Show the alert after resetting styles
            alert("Play Again?");
            location.reload(); // Reload the page
        }, 1000);
    } else if (userInput < answer) {
        // Change input field border color to red
        inputField.style.border = '2px solid red';
        // Change button text to "Too Low!"
        button.textContent = 'Too Low!';

        // Reset styles after 2.5 seconds
        setTimeout(function() {
            inputField.style.border = '';
            button.textContent = 'Guess!';
            inputField.value = ""; // Clear the input field
        }, 1000);
    } else {
        // Change input field border color to red
        inputField.style.border = '2px solid red';
        // Change button text to "Too High!"
        button.textContent = 'Too High!';

        // Reset styles after 2.5 seconds
        setTimeout(function() {
            inputField.style.border = '';
            button.textContent = 'Guess!';
            inputField.value = ""; // Clear the input field
        }, 1000);
    }
}
