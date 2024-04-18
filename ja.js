document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // You can add your validation logic here
  
    // Example of displaying the values
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  });
  