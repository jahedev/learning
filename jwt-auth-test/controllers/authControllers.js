const Users = require('../db/models/users');
const dbFunctions = require('../db/dbFunctions');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_EXPIRATION = 60 * 60 * 24 * 14; // 14 days

module.exports.signup_get = (req, res) => res.render('signup');
module.exports.login_get = (req, res) => res.render('login');
module.exports.logout_get = (req, res) => {
  res.cookie('JWT', 'DELETE', { maxAge: 1, httpOnly: true });
  res.redirect('/');
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  // Make sure they are not empty
  if (!email || !password) {
    res
      .status(400)
      .send({ result: 'error', message: 'Error: email or password is empty.' });
  }

  // Create new user
  try {
    let user = await Users.create({ email, password });
    const token = createToken(user.id);
    res.cookie('JWT', token, { httpOnly: true, maxAge: JWT_EXPIRATION * 1000 });
    res.status(201).json({ result: 'success', message: { user: user.id } });
  } catch (err) {
    res.status(409).json({ result: 'error', message: `${err.message}` });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  // Make sure they are not empty
  if (!email || !password) {
    res
      .status(400)
      .send({ result: 'error', message: 'Error: email or password is empty.' });
  }
  // Create new user
  try {
    const user = await Users.login(email, password);
    const token = createToken(user.id);
    res.cookie('JWT', token, { httpOnly: true, maxAge: JWT_EXPIRATION * 1000 });
    res.status(200).json({ result: 'success', message: { user: user.id } });
  } catch (err) {
    res.status(409).json({ result: 'error', message: err.message });
  }
};

const createToken = (id) => {
  const { JWT_SECRET } = process.env;

  return jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};
