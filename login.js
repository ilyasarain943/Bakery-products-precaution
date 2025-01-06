// Optionally handle the form submission or add extra animations
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo
    
    const button = document.querySelector('button');
    button.textContent = 'Logging in...';
    button.disabled = true;  // Disable the button while "logging in"
    
    setTimeout(() => {
        // Simulate successful login (you can redirect here)
        window.location.href = 'products.html';
    }, 2000); // Redirect after 2 seconds
});
