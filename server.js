const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let orders = [];

app.post('/order', (req, res) => {
  const { name, table, order } = req.body;
  if (!name || !table || !order) {
    return res.status(400).json({ error: "All fields are required" });
  }
  orders.push({ name, table, order });
  res.json({ message: "Order placed successfully!", orders });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});