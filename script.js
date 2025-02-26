// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update a single counter
function updateCounter(counterId, targetNumber) {
    const counterElement = document.getElementById(counterId);
    let currentNumber = 0;

    function incrementCounter() {
        if (currentNumber < targetNumber) {
            currentNumber += getRandomNumber(1, 10); // Increment by a random number between 1 and 10
            if (currentNumber > targetNumber) {
                currentNumber = targetNumber; // Ensure it doesn't exceed the target
            }
            counterElement.textContent = currentNumber;
            setTimeout(incrementCounter, 50); // Adjust the speed of the countdown here
        }
    }

    incrementCounter();
}

// Start all counters when the page loads
window.onload = function () {
    updateCounter("counter1", 232); // Clients
    updateCounter("counter2", 521); // Projects
    updateCounter("counter3", 1453); // Hours of Support
    updateCounter("counter4", 32); // Workers
};