// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") { // Add condition for right arrow key
      moveDodgerRight(); // Call moveDodgerRight() when right arrow key is pressed
    }
  });
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
    if (left < 360) { // Check if dodger has reached the right edge of the game field
      dodger.style.left = `${left + 1}px`; // Move dodger right by 1 pixel
    }
  }