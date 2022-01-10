import React from 'react';
import { range } from 'airbnb-prop-types';

const leftGradient = [
  [131, 190, 245],
  [146, 130, 221],
  [159, 112, 211],
  [122, 70, 169],
  [87, 6, 73],
]

const rightGradient = [
  [169, 150, 231],
  [169, 144, 210],
  [131, 77, 189],
  [67, 25, 88],
  [124, 7, 68],
]

export const ProgressBar = ({ daylight, children, ...props }) => {
  const index = Math.floor((100-daylight) / (101/3));
  const blend = ((100-daylight) % (101/3)) / (101/3);

  let r1, g1, b1;
  if (blend === 0) {
    r1 = leftGradient[index][0];
    g1 = leftGradient[index][1];
    b1 = leftGradient[index][2];
  } else {
    r1 = (leftGradient[index][0] * (1-blend)) + (leftGradient[index + 1][0] * blend);
    g1 = (leftGradient[index][1] * (1-blend)) + (leftGradient[index + 1][1] * blend);
    b1 = (leftGradient[index][2] * (1-blend)) + (leftGradient[index + 1][2] * blend);
  }

  let r2, g2, b2;
  if (blend === 0) {
    r2 = rightGradient[index + 1][0];
    g2 = rightGradient[index + 1][1];
    b2 = rightGradient[index + 1][2];
  } else {
    r2 = (rightGradient[index + 1][0] * (1-blend)) + (rightGradient[index + 2][0] * blend);
    g2 = (rightGradient[index + 1][1] * (1-blend)) + (rightGradient[index + 2][1] * blend);
    b2 = (rightGradient[index + 1][2] * (1-blend)) + (rightGradient[index + 2][2] * blend);
  }

  return (
    <div>
      <p
        style={{
          lineHeight: 1.25,
          fontSize: 12.4,
          margin: 0,
          fontFamily: 'Sarala, sans-serif',
          textAlign: 'center',
        }}
      >
        You're {props.progress}% finished with your itinerary.
      </p>
      <div
        style={{
          height: 17.21,
          borderRadius: 17.21,
          marginLeft: 39.47,
          marginRight: 40.81,
          marginBottom: 0,
          marginTop: 6.90,
          backgroundColor: 'black',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${props.progress}%`,
            minWidth: 17.21,
            borderRadius: 17.21,
            background: `linear-gradient(
              to right,
              rgb(${r1},${g1},${b1}),
              rgb(${r2},${g2},${b2})
              )`,
          }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.argTypes = {
  daylight: {min: 0, max: 100},
  progress: {min: 0, max: 100},
};

ProgressBar.propTypes = {
  daylight: range(0, 100),
  progress: range(0, 100),
};

ProgressBar.defaultProps = {
  daylight: 100,
  progress: 27,
  children: undefined,
};
