const { NewsModel } = require('../model/NewsModel');
const { NewsRepository } = require('../repository/NewsRepository');
const { ControllerBase } = require('../utils/ControllerBase');

class NewsController extends ControllerBase {
  constructor() {
    super();
    this.repository = new NewsRepository();
  }

  async getAllNews(req, res) {
    try {
      const filterQuery = {
        title: req.query.title,
        content: req.query.content,
        tag: req.query.tag,
      };
      const sortQuery = {
        created: req.query.created,
      };

      const filter = await this.repository.parseSearchKey(filterQuery);
      const sort = await this.repository.parseSortKey(sortQuery);
      const result = await this.repository.getAll({ filter, sort });
      if (result) {
        const response = {
          data: result,
        };
        return res.status(200).send(response);
      }
    } catch (err) {
      this.loggerService.error(err);
      return res.status(500).send({ message: 'Fail to get news' });
    }
  }

  async addNews(req, res) {
    try {
      const news = new NewsModel({ data: req.body });
      if (req.files.length >= 0) {
        const file = req.files[0];
        news['img'] = file;
      }
      delete news['filename'];
      const result = await this.repository.insertOne(news);
      return res.status(200).send({ result: result.insertedIds['0'] });
    } catch (err) {
      this.loggerService.error(err);
      return res.status(500).send({ message: 'Fail to create news' });
    }
  }

  async getNews(req, res) {
    try {
      const { id } = req.params;
      const result = await this.repository.findOne(id);
      const news = new NewsModel({ data: result });
      return res.status(200).send({ result: news });
    } catch (err) {
      this.loggerService.error(err);
      return res.status(500).send({ message: 'Fail to get news' });
    }
  }
}
module.exports = { NewsController };
