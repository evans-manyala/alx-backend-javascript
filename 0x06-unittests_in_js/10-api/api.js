const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Existing root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route for cart with validation for :id
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!Number.isInteger(parseInt(id, 10))) {
    return res.status(404).send('Not Found');
  }
  res.send(`Payment methods for cart ${id}`);
});

// New route for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New route for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Missing userName');
  }
  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
