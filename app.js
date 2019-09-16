require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

// Auth Middleware
const checkAuth = require('./middleware/check-auth');

// Routes
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Routing
app.use('/users', usersRouter);

app.listen(process.env.PORT || 3000);
