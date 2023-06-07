// Javascript for login page
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the username and password are correct
    if (username === "yourusername" && password === "yourpassword") {
      alert("Login successful!");
      // Redirect to another page or perform other actions
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered new username and password
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    
    // Perform signup process (you can replace this with your own implementation)
    alert("Signup successful! Username: " + newUsername + ", Password: " + newPassword);
  });


  // Comprehensive passage
  // script.js

// Function to check the user's answers
function checkAnswers() {
  var answer1 = document.getElementById('answer1').value;
  var answer2 = document.getElementById('answer2').value;
  var answer3 = document.getElementById('answer3').value;
  
  // Compare the answers with the expected solutions
  if (answer1.toLowerCase() === 'communication') {
    alert('Correct answer for question 1!');
  } else {
    alert('Incorrect answer for question 1. Try again!');
  }
  
  if (answer2.toLowerCase() === 'Lorem, ipsum, dolor') {
    alert('Correct answer for question 2!');
  } else {
    alert('Incorrect answer for question 2. Try again!');
  }
  
  if (answer3.toLowerCase() === 'the passage is about lorem ipsum

  