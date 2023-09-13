const { RepositoryBase } = require('../utils/RepositoryBase');

class UserRepository extends RepositoryBase {
  constructor(opts) {
    super({ collection: 'user', opts });
  }
}

module.exports = UserRepository;
