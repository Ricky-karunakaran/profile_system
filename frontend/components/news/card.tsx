import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import parse from 'html-react-parser';
import moment from 'moment';
function Card({ item }) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/news/${item._id}`);
  };
  const parseDate = date => {
    return moment(date).format('YYYY-MM-DD');
  };
  return (
    <Fragment>
      <div className="card ">
        <div className="card-img-container">
          <img
            className="card-img-top card-image"
            src={`data:${item.img?.mimetype};base64,${item.img?.file}`}
            alt="Card image cap"
          />
        </div>

        <div
          className="card-body"
          style={{
            minHeight: '20rem',
            maxHeight: '20rem',
          }}
        >
          <h5 className="card-title">{item?.title}</h5>
          <div className="card-text-overflow" onClick={onClickHandler}>
            {parse(`${item?.content}`)}
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between news-card-footer">
          <div className="card-body">
            {item?.created ? parseDate(item.created) : ''}
          </div>
          <div className="card-body text-align-right card-tag text-capitalize">
            {item?.tag}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
