const express = require('express');
const app = express();
const db = require('./db');
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const cookieParser = require('cookie-parser');
const logger = require('./logger');

/* --- CONFIGURATION --- */
require('dotenv').config();
const { HOST, PORT } = process.env;

/* --- MIDDLEWARE --- */
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

/* --- VIEW ENGINE --- */
app.set('view engine', 'ejs');

/* --- DATABASE CONNECTION --- */
db.sync();
app.listen(PORT, () => {
  logger.message(`>> app is listening on ${HOST}:${PORT}`, 'app.js');
});

/* --- ROUTES --- */
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);
