const { RepositoryBase } = require('../utils/RepositoryBase');
const fs = require('fs');
const collection = 'news';

class NewsRepository extends RepositoryBase {
  constructor() {
    super(collection);
  }
  async findOne(id) {
    try {
      const result = await super.findOne(id);
      if (result.img?.filename) {
        const file = fs.readFileSync(
          `${result.img.destination}/${result.img.filename}`
        );
        result['img'] = {
          mimetype: result.img.mimetype,
          file: Buffer.from(file).toString('base64'),
        };
      }
      return result;
    } catch (err) {
      throw err;
    }
  }
  async getAll({ filter, sort }) {
    try {
      const result = await super.getAll({ filter, sort });
      for (var i = 0; i < result.length; i++) {
        if (result[i].img?.filename) {
          const file = fs.readFileSync(
            `${result[i].img.destination}/${result[i].img.filename}`
          );
          result[i]['img'] = {
            mimetype: result[i].img.mimetype,
            file: Buffer.from(file).toString('base64'),
          };
        }
      }
      return result;
    } catch (err) {
      this.loggerService.error(err);
      throw err;
    }
  }
  insert(data) {
    try {
      super.insert(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  insertOne(data) {
    try {
      return super.insertOne(data);
    } catch (err) {
      this.loggerService.error(err);
      throw err;
    }
  }
}

module.exports = { NewsRepository };
