import React from 'react';
import PropTypes from 'prop-types';
import slide1 from './img/slide_1.jpg';
import slide2 from './img/slide_2.jpg';
import slide3 from './img/slide_3.jpg';
import slide4 from './img/slide_4.jpg';
import slide5 from './img/slide_5.jpg';
import chandelier1 from './img/chandelier_1.png';
import chandelier2 from './img/chandelier_2.png';
import SlideToggleButton from './slideToggleButton';

export default function BannerSlide({ slidePosition, forButtonsOnClick, active }) {
  let mainColor;
  switch (slidePosition) {
    case 0:
    case 200:
    case 400:
      mainColor = '#49134c';
      break;
    default:
      mainColor = '#ffffff';
  }
  function isActive(position) {
    return slidePosition === position ? active : '';
  }
  return (
    <div className="banner_container">
      <ul className="banner_slide" style={{ transform: `translateX(-${slidePosition}%)` }}>
        <li className="slide">
          <img className="slide_img" src={slide1} alt="Banner slide" />
          <p className={`title_slide${isActive(0)}`}>Line by Maytoni</p>
          <p className={`description_slide${isActive(0)}`}>
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button type="button" className={`button_more${isActive(0)}`}>
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide2} alt="Banner slide" />
          <img src={chandelier1} className={`chandelier${isActive(100)}`} alt="Chandelier" />
          <p className={`title_slide${isActive(100)}`}>Line by Maytoni</p>
          <p className={`description_slide${isActive(100)}`}>
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button type="button" className={`button_more${isActive(100)}`}>
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide3} alt="Banner slide" />
          <p className={`title_slide${isActive(200)}`}>Line by Maytoni</p>
          <p className={`description_slide${isActive(200)}`}>
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button type="button" className={`button_more${isActive(200)}`}>
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide4} alt="Banner slide" />
          <img src={chandelier2} className={`chandelier${isActive(300)}`} alt="Chandelier" />
          <p className={`title_slide${isActive(300)}`}>Line by Maytoni</p>
          <p className={`description_slide${isActive(300)}`}>
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button type="button" className={`button_more${isActive(300)}`}>
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide5} alt="Banner slide" />
          <p className={`title_slide${isActive(400)}`}>Line by Maytoni</p>
          <p className={`description_slide${isActive(400)}`}>
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button type="button" className={`button_more${isActive(400)}`}>
            Подробнее
          </button>
        </li>
      </ul>
      <div className="banners_buttons_container">
        {[0, 100, 200, 300, 400].map(buttonPosition => (
          <SlideToggleButton
            key={buttonPosition}
            isActive={buttonPosition === slidePosition}
            forButtonsOnClick={forButtonsOnClick(buttonPosition)}
            mainColor={mainColor}
          />
        ))}
      </div>
    </div>
  );
}

BannerSlide.propTypes = {
  slidePosition: PropTypes.number.isRequired,
  forButtonsOnClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
