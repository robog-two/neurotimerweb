import React from 'react';
import { range } from 'airbnb-prop-types';
import halfcircle from '../../images/halfcircle.svg';
import halfcirclewhite from '../../images/halfcirclewhite.svg';
import sunimage from '../../images/sun.png';
import { createRef } from 'react';
import PropTypes from 'prop-types';

export const Sun = ({ daylight, dark, ...props }) => {
  const theta = (1 - ((daylight / 100))) * Math.PI
  const container = createRef()
  return (
    <div
      style={{
        backgroundImage: dark ? `url(${halfcirclewhite})` : `url(${halfcircle})`,
        backgroundSize: '270px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'center',
        width: 'max-available',
        height: 155.5,
        marginTop: 20.4,
        overflow: 'hidden',
      }}
      ref={container}
    >
      <img src={sunimage} alt="sun" style={{
        width: 50,
        height: 50,
        transform: `translate(calc((50vw - 45px) - ${Math.cos(theta) * 130.5}px), ${(1-Math.sin(theta)) * 130.5}px)`,
      }}></img>
    </div>
  );
};

Sun.argTypes = {
  daylight: {min: 0, max: 100},
};

Sun.propTypes = {
  daylight: range(0, 100),
  dark: PropTypes.bool,
};

Sun.defaultProps = {
  daylight: 100,
  dark: false,
};
