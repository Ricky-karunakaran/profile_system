const { LoggerService } = require('../service/LoggerService');
const { MongoService } = require('../service/MongoService');
class RepositoryBase {
  constructor(collection) {
    try {
      this.dbService = new MongoService(collection);
    } catch (err) {
      console.log('fail to initialize database');
    }

    this.loggerService = new LoggerService();
  }
  getAll(filter) {
    return this.dbService.getAll(filter);
  }
  insert(data) {
    return this.dbService.insert(data);
  }
  insertOne(data) {
    return this.dbService.insertOne(data);
  }
  findOne(id) {
    return this.dbService.findOne(id);
  }
  parseSearchKey(searchKey) {
    // parse the search key into the database required format
    return this.dbService.parseSearchKey(searchKey);
  }
  parseSortKey(sortKey) {
    return this.dbService.parseSortKey(sortKey);
  }
}

module.exports = { RepositoryBase };
