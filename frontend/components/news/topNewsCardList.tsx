import { Fragment } from 'react';
import TopNewsCard from './topNewsCard';

function TopNewsCardList() {
  return (
    <Fragment>
      <div className="top-card-list-background"></div>
      <div className="d-flex top-card-list-container flex-wrap justify-content-start p-5  gap-5 ">
        <TopNewsCard></TopNewsCard>
      </div>
    </Fragment>
  );
}
export default TopNewsCardList;
