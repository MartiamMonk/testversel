document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    console.log('Email:', email);
    console.log('Password:', password);

    // Example API endpoint (replace with your actual API endpoint)
    const apiEndpoint = 'https://example.com/api/login';

    // Send a POST request to the API
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Sign In Successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Sign In Failed: ' + error.message);
    });

    
    document.getElementById('signInForm').reset();
});


document.getElementById('signupLink').addEventListener('click', function() {

    window.location.href = 'signup.html'; 
});