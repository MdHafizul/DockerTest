const express = require('express');
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Array of quotes
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success."
];

// API endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Express server running at http://0.0.0.0:${port}/`);
});