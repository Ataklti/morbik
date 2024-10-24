
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const payload = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
    };

    fetch('https://script.google.com/macros/s/16N6M408C3RSorqzjTQBoF1SFuvLSSQZIJOOSez1Z2UeaK80naHkF5vis/exec', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-am]');
    
    elements.forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'am') {
            element.textContent = element.getAttribute('data-am');
        }
    });
}