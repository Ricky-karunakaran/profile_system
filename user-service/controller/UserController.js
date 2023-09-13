const { ControllerBase } = require('../utils/ControllerBase');
const UserModel = require('../model/UserModel');
class UserController extends ControllerBase {
  constructor(opts) {
    super({ opts });
    this.userRepository = opts.user_repository;
  }

  async registerUser(req, res, next) {
    try {
      const { email, password, firstName, lastName } = req.body;
      if (!(email && password && firstName && lastName)) {
        return res.status(400).json({ message: 'Invalid input' });
      }

      const user = new UserModel(req.body);

      const existingUser = await this.userRepository.findOne({
        email: user.email,
      });

      if (existingUser) {
        return res.status(400).json({ message: 'User exist' });
      }

      await user.encryptPassword();
      const result = await this.userRepository.insertOne(user);

      const response = {
        id: result.insertedIds[0],
      };
      res.status(201).json({ result: response });
    } catch (err) {
      next(err);
    }
  }

  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        return res.status(400).json({ message: 'Invalid input' });
      }

      const found = await this.userRepository.findOne({ email: email });
      if (found) {
        const user = new UserModel(found);
        if (await user.validatePassword(password)) {
          await user.generateToken();
          const response = {
            token: user.token,
          };
          return res.status(200).json({ result: response });
        }
      }
      return res.status(400).json({ message: 'Invalid credentials' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
