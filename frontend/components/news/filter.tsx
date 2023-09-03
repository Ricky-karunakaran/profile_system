import { Fragment, useState } from 'react';

function NewsFilter({ filterHandler }) {
  const [searchString, setSeacrhString] = useState('');
  const onSearch = searchKey => {
    filterHandler(searchKey);
  };
  return (
    <Fragment>
      <div className="d-flex input-group">
        <input
          type="search"
          placeholder="Search Title"
          className="form-control form-input"
          value={searchString}
          onChange={event => {
            setSeacrhString(event.target.value);
          }}
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              onSearch({ title: searchString });
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div
        className="px-5 filter-card"
        onClick={() => {
          onSearch({ sort: 'created' });
        }}
      >
        LATEST
      </div>
      <div
        className="px-5 filter-card"
        onClick={() => {
          onSearch({ tag: 'Event' });
        }}
      >
        EVENT
      </div>
    </Fragment>
  );
}

export default NewsFilter;
