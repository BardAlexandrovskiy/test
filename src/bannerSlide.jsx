import React from 'react';
import slide1 from './img/slide_1.jpg';
import slide2 from './img/slide_2.jpg';
import slide3 from './img/slide_3.jpg';
import slide4 from './img/slide_4.jpg';
import slide5 from './img/slide_5.jpg';
import chandelier1 from './img/chandelier_1.png';
import chandelier2 from './img/chandelier_2.png';
import SlideToggleButton from './slideToggleButton';

export default function BannerSlide({
  slidePosition,
  forButtonsOnClick,
  active
}) {
  let backgroundColorButtons;
  switch (slidePosition) {
    case 0:
    case 200:
    case 400:
      backgroundColorButtons = '#49134c';
      break;
    case 100:
    case 300:
      backgroundColorButtons = '#ffffff';
      break;
  }
  return (
    <div className="banner_container">
      <ul
        className="banner_slide"
        style={{ transform: `translateX(-${slidePosition}%)` }}
      >
        <li className="slide">
          <img className="slide_img" src={slide1} />
          <button
            className={`button_slide_link${slidePosition === 0 ? active : ''}`}
          >
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide2} />
          <img
            src={chandelier1}
            className={`chandelier_1${slidePosition === 100 ? active : ''}`}
          />
          <p className={`title_slide${slidePosition === 100 ? active : ''}`}>
            Line by Maytoni
          </p>
          <p
            className={`description_slide${
              slidePosition === 100 ? active : ''
            }`}
          >
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button
            className={`button_slide_standart${
              slidePosition === 100 ? active : ''
            }`}
          >
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide3} />
          <p className={`title_slide${slidePosition === 200 ? active : ''}`}>
            Line by Maytoni
          </p>
          <p
            className={`description_slide${
              slidePosition === 200 ? active : ''
            }`}
          >
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button
            className={`button_slide_standart${
              slidePosition === 200 ? active : ''
            }`}
          >
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide4} />
          <img
            src={chandelier2}
            className={`chandelier_1${slidePosition === 300 ? active : ''}`}
          />
          <p className={`title_slide${slidePosition === 300 ? active : ''}`}>
            Line by Maytoni
          </p>
          <p
            className={`description_slide${
              slidePosition === 300 ? active : ''
            }`}
          >
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button
            className={`button_slide_standart${
              slidePosition === 300 ? active : ''
            }`}
          >
            Подробнее
          </button>
        </li>
        <li className="slide">
          <img className="slide_img" src={slide5} />
          <p className={`title_slide${slidePosition === 400 ? active : ''}`}>
            Line by Maytoni
          </p>
          <p
            className={`description_slide${
              slidePosition === 400 ? active : ''
            }`}
          >
            Встречайте эффектную новинку в коллекции Maytoni Technical
          </p>
          <button
            className={`button_slide_standart${
              slidePosition === 400 ? active : ''
            }`}
          >
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
            backgroundColorButtons={backgroundColorButtons}
          />
        ))}
      </div>
    </div>
  );
}
