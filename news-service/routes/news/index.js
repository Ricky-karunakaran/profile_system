const get = async (req, res) => {
  const { NewsController } = require('../../controller/NewsController');
  const controller = new NewsController();
  return controller.getAllNews(req, res);
};

const post = async (req, res) => {
  // TO DO: authentication
  const { NewsController } = require('../../controller/NewsController');
  const controller = new NewsController();
  return controller.addNews(req, res);
};

module.exports = { get, post };
