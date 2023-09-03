const get = async (req, res) => {
  const { NewsController } = require('../../controller/NewsController');
  const controller = new NewsController();
  return controller.getNews(req, res);
};

module.exports = { get };
