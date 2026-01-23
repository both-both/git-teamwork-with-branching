const form = document.getElementById("contact-form");
const nameField = document.getElementById("name-input");
const emailField = document.getElementById("email-input");
const messageField = document.getElementById("message-input");

const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameField.value.trim().length < 2) {
    alert("Name must be at least 2 characters long.");
    return;
  }

  if (!emailregex.test(emailField.value.trim())) {
    alert("Please enter a valid email address.");
    return;
  }

  if (messageField.value.trim().length < 1) {
    alert("Message cannot be empty.");
    return;
  }

  alert("Tak for din besked!");
  form.reset();
});