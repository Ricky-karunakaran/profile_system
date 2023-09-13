class ControllerBase {
  constructor({ opts }) {
    this.loggerService = opts.logger_service;
  }
}
module.exports = { ControllerBase };
