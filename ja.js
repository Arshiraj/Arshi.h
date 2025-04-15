document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get all input values
  const fullname = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Remove previous messages
  const oldMsg = document.querySelector('.error-message, .success-message');
  if (oldMsg) oldMsg.remove();

  let error = "";

  // Validation
  if (!fullname || !username || !email || !phone || !course || !gender || !password || !confirmPassword) {
    error = "Please fill in all fields.";
  } else if (!validateEmail(email)) {
    error = "Please enter a valid email address.";
  } else if (password !== confirmPassword) {
    error = "Passwords do not match.";
  }

  if (error) {
    showMessage(error, "error");
    return;
  }

  // If valid, show success
  console.log("Full Name:", fullname);
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Course:", course);
  console.log("Gender:", gender.value);
  console.log("Password:", password);

  showMessage("Registration Successful!", "success");
});

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Display message
function showMessage(message, type) {
  const msgDiv = document.createElement("div");
  msgDiv.className = type === "error" ? "error-message" : "success-message";
  msgDiv.textContent = message;
  document.querySelector("form").appendChild(msgDiv);
}
