document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message, ' + document.getElementById('name').value + '! We will get back to you soon.');
    this.reset();
});
