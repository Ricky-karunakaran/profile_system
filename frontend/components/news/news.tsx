'use client';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import NewsRepository from '@/services/news';
function News({ id }) {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const repository = new NewsRepository();
    const response = repository.getANews(id).then(res => {
      setNews(res.result);
    });
  }, [setNews]);
  return (
    <>
      <div className="d-flex justify-content-start">
        <span className="news-title ">{news?.title}</span>
      </div>

      <div className="d-flex justify-content-center">
        {news?.img ? (
          <img
            className="news-img"
            src={`data:${news?.img?.mimetype};base64,${news?.img?.file}`}
          ></img>
        ) : null}
      </div>

      <div className="news-content">
        {news?.content ? parse(news.content) : null}
      </div>
    </>
  );
}

export default News;
