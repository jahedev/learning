const Users = require('./models/users');

const dbFunctions = {
  async emailExists(email) {
    let result = await Users.findOne({ where: {email} });
    return result !== null;
  },
};

module.exports = dbFunctions;
