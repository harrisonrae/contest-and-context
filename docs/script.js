// When the entire page is loaded, show the content
window.onload = function() {
    document.body.style.display = 'block';
}

// Get all the text boxes
const textBoxes = document.querySelectorAll('.text-box');
const textBoxFinal = document.querySelector('.text-box-final'); // Target the final text box before the end
const textBoxEnd = document.querySelector('.text-box-end'); // Target the final text box

// Hide text-box-final and text-box-end initially
textBoxFinal.classList.add('hidden');
textBoxEnd.classList.add('hidden');

// Track which boxes have been shown
let shownBoxes = new Set();
let currentStep = 0;

// Function to cycle through the text boxes
function cycleTextBoxes() {
    // If all text boxes have been shown
    if (shownBoxes.size === textBoxes.length) {
        // Hide all text boxes first
        textBoxes.forEach(box => box.classList.add('hidden'));

        // Show text-box-final
        textBoxFinal.classList.remove('hidden');

        // Wait for 3 seconds, then hide text-box-final and show text-box-end
        setTimeout(() => {
            textBoxFinal.classList.add('hidden'); // Hide final
            textBoxEnd.classList.remove('hidden'); // Show end box
        }, 3000); // Display final for 3 seconds
        
        // Disable further clicks
        document.removeEventListener('click', cycleTextBoxes); 
    } else {
        // Hide all text boxes
        textBoxes.forEach(box => box.classList.add('hidden'));

        // Randomly pick a box that hasn't been shown yet
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * textBoxes.length);
        } while (shownBoxes.has(randomIndex));

        // Show the randomly picked box
        textBoxes[randomIndex].classList.remove('hidden');
        shownBoxes.add(randomIndex);
    }

    // If it's the first step, show the first text box
    if (currentStep === 0) {
        textBoxes[0].classList.remove('hidden');
        shownBoxes.add(0);
    }

    currentStep++;
}

// Add an event listener to the document to change the text box on click
document.addEventListener('click', cycleTextBoxes);

// Initially show the first text box (Text Box 1)
cycleTextBoxes();
