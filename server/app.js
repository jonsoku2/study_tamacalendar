const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(fileupload());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());

app.get('/', (req, res) => res.send('API RUNNiNG ...'));

// @@ Routes

app.listen(PORT, () => {
  console.log(`Server is up on PORT ${PORT}`);
});
