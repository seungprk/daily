const path = require('path');
const express = require('express');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const loginRoute = require('./login.js');
const usersRoute = require('./users.js');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(cookieSession({
  name: 'session',
  keys: ['testkeybecausefordevtesting324lkj234kl24j3kl'],
  maxAge: 24 * 60 * 60 * 1000,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/login', loginRoute);

app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
});
