import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ dark, children, ...props }) => {
  return (
    <div
      style={{
        minWidth: 18.11,
        minHeight: 18.11,
        borderRadius: 18.11,
        paddingTop: 27.47,
        paddingBottom: 26.01,
        paddingLeft: 40.81,
        paddingRight: 40.81,
        color: dark ? 'white' : 'black',
        background: `linear-gradient(
          157deg,
          ${dark ? '#2c2c2c' : '#ffffff'},
          ${dark ? '#1d1d1d' : '#ebebeb'}
          )`,
      }}
    >
      { children }
    </div>
  );
};

Card.propTypes = {
  dark: PropTypes.bool,
};

Card.defaultProps = {
  dark: true,
  children: undefined,
};
