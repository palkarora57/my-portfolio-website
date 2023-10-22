document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const textToType = "This is a typing animation example.";
  let currentIndex = 0;

  function typeText() {
    if (currentIndex < textToType.length) {
      textElement.textContent += textToType.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
    }
  }

  // Start the typing animation when the page loads
  typeText();
});
