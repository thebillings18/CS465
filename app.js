
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const travelerRoutes = require('./app_server/routes/traveler');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register partials (optional but recommended)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', travelerRoutes);

module.exports = app;
