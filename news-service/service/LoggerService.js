const winston = require('winston');
class LoggerService {
  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.combine(winston.format.prettyPrint()),
      transports: [new winston.transports.Console()],
    });
  }

  error(msg) {
    this.logger.error(msg.stack);
  }
  info(msg) {
    this.logger.info(msg);
  }
}

module.exports = { LoggerService };
