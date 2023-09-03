const moment = require('moment');
class NewsModel {
  constructor({ data }) {
    Object.assign(this, data);
    this.created =
      this.created === undefined ? new Date().toISOString() : this.created;
    this.deleted = this.deleted === undefined ? null : this.deleted;
  }
}
module.exports = { NewsModel };
