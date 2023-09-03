const get = async (req, res) => {
  const {
    NewsPrototypeController,
  } = require('../../../controller/NewsPrototypeController');
  const controller = new NewsPrototypeController();
  return controller.getNews(req, res);
};

module.exports = { get };
