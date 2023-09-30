document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let successMessage = document.getElementById('successMessage');

    if (validateEmail(email)) {
        successMessage.innerText = 'Email ' + email + ' subscribed successfully!';
        successMessage.style.display = 'block';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
