'use client';
import { Fragment, useState, useEffect } from 'react';
import CardList from '@/components/news/cardList';
import NewsFilter from '@/components/news/filter';
import PageTitle from '@/components/pageTitle';
function Page() {
  const [filter, setFilter] = useState({});

  return (
    <Fragment>
      <PageTitle title={'News'}></PageTitle>
      <div className="d-flex flex-wrap justify-content-start px-5  mt-5 gap-5">
        <NewsFilter filterHandler={setFilter}></NewsFilter>
      </div>
      <div className="d-flex flex-wrap justify-content-start px-5  mt-5 gap-5">
        <CardList filter={filter}></CardList>
      </div>
    </Fragment>
  );
}

export default Page;
