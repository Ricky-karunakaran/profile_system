const { MongoClient, ObjectId } = require('mongodb');

class MongoService {
  constructor() {
    this.url = process.env.DATABASE_URL;
    this.client = new MongoClient(this.url);
    this.dbName = process.env.DB_NAME;
  }

  async insert({ collection, data }) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const dbcollection = db.collection(collection);
    const result = await dbcollection.insertMany(data);
    return result;
  }

  async insertOne({ collection, data }) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const dbcollection = db.collection(collection);
    const result = await dbcollection.insertMany([data]);
    return result;
  }

  async getAll({ collection, filter, sort, deleted = false }) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const dbcollection = db.collection(collection);
    if (!deleted) {
      filter['deleted'] = { $eq: null };
    }
    const result = await dbcollection.find(filter).sort(sort).toArray();
    return result;
  }

  async findOne({ collection, filter }) {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    const dbcollection = db.collection(collection);
    const result = await dbcollection.findOne(filter);
    return result;
  }

  async findOneById({ collection, id }) {
    const dbcollection = db.collection(collection);
    return await dbcollection.findOne({ _id: new ObjectId(id) });
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
