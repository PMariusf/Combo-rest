document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        document.getElementById('formResult').innerText = "Please fill out all fields.";
        document.getElementById('formResult').style.color = "red";
        return;
    }

    // Save contact message in local storage
    let contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    contactMessages.push({ name, email, message, date: new Date().toLocaleString() });
    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

    document.getElementById('formResult').innerText = "Thank you! Your message has been sent.";
    document.getElementById('formResult').style.color = "#00bcd4";

    document.getElementById('contactForm').reset();
});

// Function to load contact messages from local storage
function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    console.log("Saved Messages:", messages);
}

document.addEventListener('DOMContentLoaded', loadMessages);