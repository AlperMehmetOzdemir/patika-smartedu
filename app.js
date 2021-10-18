const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

const PORT = process.env.PORT || 5000;

// CONNECT DB
mongoose
  .connect('mongodb://localhost/smartedu-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected succesfully');
  });

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/', pageRoute);
app.use('/courses', courseRoute);

// LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
