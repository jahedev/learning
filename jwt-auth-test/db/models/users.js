const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Users = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exists.',
      },
      field: 'email',
      validate: {
        is: { args: emailRegex, msg: 'Email is not valid.' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
      validate: {
        len: {
          args: [6, 20],
          msg: 'Password must be 6-20 characters long',
        },
      },
    },
  },
  {
    define: {
      freezeTableName: true,
    },
    hooks: {
      beforeCreate: async function (user) {
        user.email = user.email.toLowerCase();

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);

Users.login = async function (email, password) {
  const user = await this.findOne({ where: { email } });
  if (!user) throw Error('Error: email does not exist');

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) throw Error('Error: password is incorrect');

  return user;
};

module.exports = Users;
