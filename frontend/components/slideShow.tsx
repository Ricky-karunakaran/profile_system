'use client';
import { useState } from 'react';

function SlideShow({ slides }) {
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    if (index !== slides.length - 1) setIndex(prev => prev + 1);
  };
  const previousSlide = () => {
    if (index !== 0) setIndex(prev => prev - 1);
  };

  return (
    <>
      <div className="slider-container">
        <div>
          <img className="slider-img" src={slides[index].img}></img>
          <div className="slider-previous" onClick={previousSlide}>
            {'<'}
          </div>
          <div className="slider-next" onClick={nextSlide}>
            {'>'}
          </div>
          <div className="slider-info-container">
            <div className="slider-info-title">{slides[index].name}</div>
            <div className="slider-info-description">{slides[index].info}</div>
          </div>
        </div>
        {/* {slides.map(slide => {
          return (
            <div>
              <img className="slider-img" src={slide.imgPath}></img>
              <div className="slider-previous" onClick={previousSlide}>
                {'<'}
              </div>
              <div className="slider-next" onClick={nextSlide}>
                {'>'}
              </div>
              <div className="slider-info-container">
                <div className="slider-info-title">{slide.name}</div>
                <div className="slider-info-description">{slide.info}</div>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
}
export default SlideShow;
