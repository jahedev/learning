const jwt = require('jsonwebtoken');
const { Users } = require('../db/models');

require('dotenv').config();

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.JWT;

  if (!token) {
    res.redirect('/login');
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) res.redirect('/login');
    next();
  });
};

module.exports.checkUser = async (req, res, next) => {
  res.locals.user = null;

  const token = req.cookies.JWT;

  if (!token) return next();
  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) return next();

    let user = await Users.findByPk(decodedToken.id);
    console.log(user);
    res.locals.user = user;
    next();
  });
};
