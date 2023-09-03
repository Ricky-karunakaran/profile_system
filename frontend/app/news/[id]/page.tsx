import BackButton from '@/components/backButton';
import News from '@/components/news/news';

import { Fragment } from 'react';

function Page({ params }) {
  return (
    <Fragment>
      <div className="d-flex flex-column m-5 gap-5">
        <BackButton link="./"></BackButton>
        <News id={params.id}></News>
      </div>
    </Fragment>
  );
}

export default Page;
