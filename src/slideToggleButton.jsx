import React from 'react';

export default function SlideToggleButton({
  forButtonsOnClick,
  isActive,
  backgroundColorButtons
}) {
  return (
    <button
      className={`slide_toggle_button${isActive ? ' active' : ''}`}
      onClick={forButtonsOnClick}
      style={{ backgroundColor: backgroundColorButtons }}
    ></button>
  );
}
