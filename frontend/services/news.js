// connect to backend service
class NewsRepository {
  constructor() {}

  async getNews({ filter }) {
    const queryParams = new URLSearchParams(filter).toString();
    try {
      const response = await fetch(
        `http://localhost:3101/news?${queryParams}`,
        {
          method: 'GET',
        }
      );
      if (response.status === 200) {
        const news = await response.json();
        return news;
      } else {
        throw Error('Internal server error. Trying to get prototype data');
      }
    } catch (err) {
      //try get prototype data
      alert('Fetching prototype data');
      const response = await fetch(
        `http://localhost:3101/prototype/news?${queryParams}`,
        {
          method: 'GET',
        }
      );
      if (response.status === 200) {
        const news = await response.json();
        return news;
      } else {
        throw Error('Internal Server Error. Fail to get prototype data');
      }
    }
  }
  async getANews(id) {
    try {
      // const news = await this.http.get('news');
      const response = await fetch(`http://localhost:3101/news/${id}`, {
        method: 'GET',
      });
      if (response.status === 200) {
        const news = await response.json();
        return news;
      } else {
        throw Error('Internal server error. Trying to get prototype data');
      }
    } catch (err) {
      alert('Fetching prototype data');
      const response = await fetch(
        `http://localhost:3101/prototype/news/${id}`,
        {
          method: 'GET',
        }
      );
      if (response.status === 200) {
        const news = await response.json();
        return news;
      }
    }
  }
}

export default NewsRepository;
