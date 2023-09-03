const config = require('../properties.json');
const { MongoClient, ObjectId } = require('mongodb');

class MongoService {
  constructor(collection) {
    this.url = process.env.DATABASE_URL;
    this.client = new MongoClient(this.url);
    this.dbName = config.database.name;
    this.collection = collection;
  }

  async insert(data) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collection);
    const result = await collection.insertMany(data);
    return result;
  }

  async insertOne(data) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collection);
    const result = await collection.insertMany([data]);
    return result;
  }

  async getAll({ filter, sort, deleted = false }) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collection);
    if (!deleted) {
      filter['deleted'] = { $ne: null };
    }
    const result = await collection.find(filter).sort(sort).toArray();
    return result;
  }

  async findOne(id) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collection);
    const result = await collection.findOne({ _id: new ObjectId(id) });
    return result;
  }

  parseSearchKey(searchKey) {
    const parsedKey = {};
    for (const key of Object.keys(searchKey)) {
      if (searchKey[key]) parsedKey[key] = { $regex: `${searchKey[key]}` };
    }
    return parsedKey;
  }
  parseSortKey(sortKey) {
    const parsedKey = {};
    for (const key of Object.keys(sortKey)) {
      if (sortKey[key]) {
        parsedKey[key] = { key: 1 };
      }
    }
    return parsedKey;
  }
}

module.exports = { MongoService };
