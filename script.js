document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("responseMsg").textContent =
    "Thank you for reaching out! I'll get back to you soon.";
});