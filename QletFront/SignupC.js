document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mobile = document.getElementById('mobile').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const signupData = {
        name,
        email,
        password,
        mobile
    };

    // Server 
    fetch('/api/signup', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Sign up successful!');
            
        } else {
            alert('Sign up failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error during signup:', error);
        alert('An error occurred during signup. Please try again.');
    });
});