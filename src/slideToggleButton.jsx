import React from 'react';
import PropTypes from 'prop-types';

export default function SlideToggleButton({ forButtonsOnClick, isActive, mainColor }) {
  return (
    <button
      type="button"
      className={`slide_toggle_button${isActive ? ' active' : ''}`}
      onClick={forButtonsOnClick}
    >
      <div style={{ backgroundColor: mainColor }} />
    </button>
  );
}

SlideToggleButton.propTypes = {
  forButtonsOnClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  mainColor: PropTypes.string.isRequired,
};
