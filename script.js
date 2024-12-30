// Predefined valid credentials
const validCredentials = {
    username: "Vadya",
    password: "0707"
};

// Attach event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  console.log("Submitted credentials:", username, password); // Debugging log

  // Validate credentials
  if (username === validCredentials.username && password === validCredentials.password) {
    console.log("Login successful"); // Debugging log

    // Redirect to the photo album page
    window.location.assign("al.html"); // Try using .assign() for redirection
  } else {
    console.log("Invalid credentials"); // Debugging log
    // Display error message
    alert("Invalid username or password."); // Or, show custom error message on the page
  }
});
