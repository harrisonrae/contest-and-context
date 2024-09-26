// When the entire page is loaded, show the content
window.onload = function() {
    document.body.style.display = 'block';
}

// Get all the text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Initialize a step counter
let currentStep = 0;

// Function to cycle through the text boxes in a specific order
function cycleTextBoxes() {
    // Hide all text boxes
    textBoxes.forEach(box => box.classList.add('hidden'));

    if (currentStep === 0) {
        // Show the first text box (Text Box 1)
        textBoxes[0].classList.remove('hidden');
    } else if (currentStep === textBoxes.length - 1) {
        // Show the last text box (Text Box 15)
        textBoxes[textBoxes.length - 1].classList.remove('hidden');
    } else {
        // Randomly pick a box from boxes 2 to 14
        const randomIndex = Math.floor(Math.random() * (textBoxes.length - 2)) + 1;
        textBoxes[randomIndex].classList.remove('hidden');
    }

    currentStep++;
    
    // Reset the step if the last box (15th) has been shown
    if (currentStep >= textBoxes.length) {
        currentStep = 0;
    }
}

// Add an event listener to the document to change the text box on click
document.addEventListener('click', cycleTextBoxes);

// Initially show the first text box (Text Box 1)
cycleTextBoxes();
