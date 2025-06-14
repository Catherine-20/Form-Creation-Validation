document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation
        let isValid = true;
        let messages = [];

        // Username check
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        // Email check
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Enter a valid email address.");
        }

        // Password check
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // ✅ Green for success
            feedbackDiv.style.backgroundColor = "#d4edda"; // optional
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // ✅ Red for error
            feedbackDiv.style.backgroundColor = "#ffbaba"; // optional
        }
    });
});

