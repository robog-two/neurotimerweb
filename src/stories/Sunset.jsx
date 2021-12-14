import React from 'react';
import { range } from 'airbnb-prop-types';
import './button.css';

const sunsetGradient = [
  [204, 255, 251], // 0%
  [248, 248, 248], // 20%
  [255, 248, 202], // 40%
  [255, 141, 62],  // 60%
  [51, 0, 103],    // 80%
  [0, 0, 0],       // 100%
]

export const Sunset = ({ daylight, children, ...props }) => {
  const index = Math.floor((100-daylight) / 20);
  const blend = ((100-daylight) % 20) / 20;

  let r1, g1, b1;
  if (blend === 0) {
    r1 = sunsetGradient[index][0];
    g1 = sunsetGradient[index][1];
    b1 = sunsetGradient[index][2];
  } else {
    r1 = (sunsetGradient[index][0] * (1-blend)) + (sunsetGradient[index + 1][0] * blend);
    g1 = (sunsetGradient[index][1] * (1-blend)) + (sunsetGradient[index + 1][1] * blend);
    b1 = (sunsetGradient[index][2] * (1-blend)) + (sunsetGradient[index + 1][2] * blend);
  }

  let r2, g2, b2;
  if ((100-daylight) >= 80) {
    r2 = 0;
    g2 = 0;
    b2 = 0;
  } else {
    if (blend === 0) {
      r2 = sunsetGradient[index + 1][0];
      g2 = sunsetGradient[index + 1][1];
      b2 = sunsetGradient[index + 1][2];
    } else {
      r2 = (sunsetGradient[index + 1][0] * (1-blend)) + (sunsetGradient[index + 2][0] * blend);
      g2 = (sunsetGradient[index + 1][1] * (1-blend)) + (sunsetGradient[index + 2][1] * blend);
      b2 = (sunsetGradient[index + 1][2] * (1-blend)) + (sunsetGradient[index + 2][2] * blend);
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: 40,
        background: `linear-gradient(
          rgb(${r1},${g1},${b1}),
          rgb(${r2},${g2},${b2})
          )`,
      }}
    >
      { children }
    </div>
  );
};

Sunset.argTypes = {
  daylight: {min: 0, max: 100},
};

Sunset.propTypes = {
  daylight: range(0, 100),
};

Sunset.defaultProps = {
  daylight: 100,
  children: undefined,
};
