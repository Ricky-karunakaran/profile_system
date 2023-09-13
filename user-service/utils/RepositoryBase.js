const { LoggerService } = require('../service/LoggerService');
const { MongoService } = require('../service/MongoService');
class RepositoryBase {
  // accept collection name from child repository
  // accept database service from container
  constructor({ collection, opts }) {
    this.collection = collection;
    this.databaseService = opts.database_service;
    this.loggerSservice = opts.logger_service;
  }
  getAll(filter) {
    return this.databaseService.getAll({ collection: this.collection, filter });
  }
  insert(data) {
    return this.databaseService.insert({ collection: this.collection, data });
  }
  insertOne(data) {
    return this.databaseService.insertOne({
      collection: this.collection,
      data,
    });
  }
  findOne(filter) {
    return this.databaseService.findOne({
      collection: this.collection,
      filter,
    });
  }
  findOneById(id) {
    return this.databaseService.findOne({
      collection: this.collection,
      id,
    });
  }
  parseSearchKey(searchKey) {
    // parse the search key into the database required format
    return this.databaseService.parseSearchKey(searchKey);
  }
  parseSortKey(sortKey) {
    return this.databaseService.parseSortKey(sortKey);
  }
}

module.exports = { RepositoryBase };
