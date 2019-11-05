const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(express.json({ extends: false }));

app.get('/', (req, res) => res.send('API RUNNiNG ...'));

// @@ Routes

app.listen(PORT, () => {
  console.log(`Server is up on PORT ${PORT}`);
});
