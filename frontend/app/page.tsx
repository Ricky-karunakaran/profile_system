import SlideShow from '@/components/slideShow';
import Location from '@/models/location';
import { Fragment } from 'react';
import BambooGrove from '@/public/assets/images/bamboo_grove.jpg';
import Antarctica from '@/public/assets/images/antarctica.jpg';
import Capri from '@/public/assets/images/capri.jpg';
export default function Page() {
  const slides = [
    new Location({
      name: 'Arashiyama Bamboo grove',
      img: BambooGrove.src,
      info: 'The Arashiyama Bamboo Grove is one of Kyoto’s top sights and for good reason: standing amid these soaring stalks of bamboo is like being in another world.',
    }),
    new Location({
      name: 'Antarctica',
      img: Antarctica.src,
      info: 'Antarctica is the fifth-largest continent in terms of total area. (It is larger than both Oceania and Europe.) Antarctica is a unique continent in that it does not have a native human population. There are no countries in Antarctica. Seven countries made defined claims to Antarctic territory prior to the Antarctic Treaty of 1959.',
    }),
    new Location({
      name: 'Capri',
      img: Capri.src,
      info: 'Capri is an island located in the Tyrrhenian Sea off the Sorrento Peninsula, on the south side of the Gulf of Naples in the Campania region of Italy. The main town of Capri that is located on the island shares the name. It has been a resort since the time of the Roman Republic.',
    }),
  ];
  return (
    <Fragment>
      <SlideShow slides={slides}></SlideShow>
    </Fragment>
  );
}
