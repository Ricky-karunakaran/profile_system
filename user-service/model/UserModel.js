const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class UserModel {
  constructor({ email, password, firstName, lastName }) {
    this.email = email.toLowerCase();
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;

    this.created =
      this.created === undefined ? new Date().toISOString() : this.created;
    this.deleted = this.deleted === undefined ? null : this.deleted;
  }

  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
  async generateToken() {
    // jwt.sign(payload, secretKey, [options,callback])
    const token = jwt.sign(
      {
        email: this.email,
      },
      process.env.JWT_KEY,
      {
        expiresIn: '1h',
      }
    );
    this.token = token;
  }

  async validatePassword(password) {
    const result = await bcrypt.compare(password, this.password);
    return result;
  }
}

module.exports = UserModel;
