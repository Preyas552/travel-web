document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('flight-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const from = document.getElementById('from-flight').value;
        const to = document.getElementById('to-flight').value;
        const date = document.getElementById('date-flight').value;

        // Assuming we have an endpoint to search for flights
        const response = await fetch('/api/searchFlights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from, to, date })
        });

        const results = await response.json();
        displayResults('flight-results', results);
    });

    document.getElementById('train-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const from = document.getElementById('from-train').value;
        const to = document.getElementById('to-train').value;
        const date = document.getElementById('date-train').value;

        // Assuming we have an endpoint to search for trains
        const response = await fetch('/api/searchTrains', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from, to, date })
        });

        const results = await response.json();
        displayResults('train-results', results);
    });

    document.getElementById('bus-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const from = document.getElementById('from-bus').value;
        const to = document.getElementById('to-bus').value;
        const date = document.getElementById('date-bus').value;

        // Assuming we have an endpoint to search for buses
        const response = await fetch('/api/searchBuses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from, to, date })
        });

        const results = await response.json();
        displayResults('bus-results', results);
    });

    document.getElementById('hotel-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const location = document.getElementById('location-hotel').value;
        const checkin = document.getElementById('checkin-hotel').value;
        const checkout = document.getElementById('checkout-hotel').value;

        // Assuming we have an endpoint to search for hotels
        const response = await fetch('/api/searchHotels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ location, checkin, checkout })
        });

        const results = await response.json();
        displayResults('hotel-results', results);
    });

    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Assuming we have an endpoint to handle login
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        document.getElementById('login-message').innerText = result.message;
    });
});

function displayResults(elementId, results) {
    const resultsContainer = document.getElementById(elementId);
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.textContent = JSON.stringify(result, null, 2);
        resultsContainer.appendChild(resultElement);
    });
}
