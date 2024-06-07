document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const tickets = parseInt(document.getElementById('tickets').value);
    const pricePerTicket = parseFloat(document.getElementById('price').value);

    let valid = true;

    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('fromError').textContent = '';
    document.getElementById('toError').textContent = '';
    document.getElementById('ticketsError').textContent = '';

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    // Validate phone number (simple pattern for demonstration)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number. Please enter a 10-digit phone number.';
        valid = false;
    }

    // Validate email (simple pattern for demonstration)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        valid = false;
    }

    // Validate date
    if (date === '') {
        document.getElementById('dateError').textContent = 'Date is required.';
        valid = false;
    }

    // Validate from
    if (from === '') {
        document.getElementById('fromError').textContent = 'Starting point is required.';
        valid = false;
    }

    // Validate to
    if (to === '') {
        document.getElementById('toError').textContent = 'Destination is required.';
        valid = false;
    }

    // Validate tickets
    if (tickets < 1 || tickets > 10) {
        document.getElementById('ticketsError').textContent = 'Number of tickets must be between 1 and 10.';
        valid = false;
    }

    if (valid) {
        const totalPrice = tickets * pricePerTicket;

        // Simulate reservation process (in real-world scenario, this would be sent to a server)
        setTimeout(() => {
            showMessage(`Reservation successful! Name: ${name}, Phone: ${phone}, Email: ${email}, Date: ${date}, From: ${from}, To: ${to}, Tickets: ${tickets}, Total Price: $${totalPrice}`, 'success');
        }, 1000);
    } else {
        showMessage('Please correct the errors in the form.', 'error');
    }
});

// Function to show message
function showMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type;
}
