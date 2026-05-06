/* script.js */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Form submission handler
function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you for your enquiry! We'll get back to you within 24 hours.");
  e.target.reset();
}
