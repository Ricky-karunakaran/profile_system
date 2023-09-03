const statusCode = require('../properties.json');
const { LoggerService } = require('../service/LoggerService');

class ControllerBase {
  constructor() {
    this.loggerService = new LoggerService();
  }
}
module.exports = { ControllerBase };
