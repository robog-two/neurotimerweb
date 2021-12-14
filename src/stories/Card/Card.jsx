import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ dark, children, ...props }) => {
  return (
    <div
      style={{
        minWidth: 54.331,
        minHeight: 54.331,
        borderRadius: 54.331,
        paddingTop: 82.42,
        paddingBottom: 78.03,
        paddingLeft: 122.43,
        paddingRight: 122.43,
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
