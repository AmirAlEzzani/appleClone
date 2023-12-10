const navButton = document.getElementById('myButton');

// Add event listeners for mouseenter and mouseleave
navButton.addEventListener('mouseenter', function() {
  // Change the color when the mouse enters
  document.querySelector('.navButton').style.backgroundColor = '#e74c3c';
});

navButton.addEventListener('mouseleave', function() {
  // Change the color back when the mouse leaves
  document.querySelector('.navButton').style.backgroundColor = '#3498db';
});