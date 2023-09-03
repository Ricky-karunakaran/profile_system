'use client';
import { Fragment } from 'react';
import Card from './card';
import { useRouter } from 'next/navigation';

function TopNewsCard() {
  const item = null;
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/news/${item.title}`);
  };
  return (
    <Fragment>
      <div className="top-card-container">
        <div className="top-card shadow p-3 mb-5 bg-white rounded">
          <img
            className="card-img-top top-card-image"
            src={item?.img}
            alt="Card image cap"
          />
          <div
            className="card-body"
            style={{
              minHeight: '15rem',
              maxHeight: '15rem',
            }}
          >
            <h5 className="card-title">{item?.title}</h5>
            <div className="top-card-text-overflow" onClick={onClickHandler}>
              {item?.content}
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between news-card-footer">
            <div className="card-body">
              {item?.create ? item.create.date : ''}
            </div>
            <div className="card-body text-align-right card-tag">
              {item?.tag}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopNewsCard;
