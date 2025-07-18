// Simple Email Sender using EmailJS

// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your EmailJS public key
    emailjs.init("ppILEZJGvqwGzStcc");
    
    // Set up form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page reload
        
        // Send the email
        emailjs.sendForm('service_mw1xgx7', 'template_qz7xwd7', form)
        .then(function() {
            alert('Message sent successfully!');
            form.reset(); // Clear the form
        })
        .catch(function() {
            alert('Failed to send message. Please try again.');
        });
    });
});