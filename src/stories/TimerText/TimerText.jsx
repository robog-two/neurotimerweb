import React from 'react';
import { range } from 'airbnb-prop-types';
import PropTypes from 'prop-types';

export const TimerText = ({ timeLeft, dark, ...props }) => {
  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '124px',
        textAlign: 'center',
        lineHeight: 0.8,
        marginBottom: 44.5,
        color: dark ? 'white' : 'black'
      }}
    >
      { Math.floor(timeLeft/60) }:{ Math.floor(timeLeft % 60).toString().padStart(2, '0') }
    </div>
  );
};

TimerText.argTypes = {
  timeLeft: {min: 0, max: 1500},
};

TimerText.propTypes = {
  timeLeft: range(0, 1500),
  dark: PropTypes.bool,
};

TimerText.defaultProps = {
  timeLeft: 1500,
  dark: false,
};
