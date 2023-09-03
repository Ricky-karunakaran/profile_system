'use client';
import { Fragment } from 'react';
import Card from '@/components/news/card';
import { useEffect, useState } from 'react';
import NewsRepository from '@/services/news';
import Loading from '@/components/loading';
import EmptyData from '../emptyData';

function CardList({ filter }) {
  const [news, setNews] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const repository = new NewsRepository();
    const response = repository
      .getNews({ filter })
      .then(res => {
        if (res) {
          setNews({ data: res.data });
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        alert(err);
      });
  }, [filter, setNews, setLoading]);

  return (
    <Fragment>
      {loading ? (
        <Loading></Loading>
      ) : news.data?.length > 0 ? (
        news.data.map(item => {
          return (
            <div className="card-container" key={item._id}>
              <Card item={item}></Card>
            </div>
          );
        })
      ) : (
        <EmptyData></EmptyData>
      )}
    </Fragment>
  );
}

export default CardList;
