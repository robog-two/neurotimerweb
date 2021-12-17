import React from 'react';
import PropTypes from 'prop-types';

export const UpcomingTasks = ({ dark, header, subheader, ...props }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        color: dark ? 'white' : 'black',
      }}
    >
      <h1
        style={{
          fontFamily: 'Sarala, sans-serif',
          fontWeight: 500,
          fontSize: '33pt',
          lineHeight: 0.8,
          color: dark ? 'white' : 'black',
          margin: 0,
          marginBottom: 9.30,
        }}
      >
        { header }
      </h1>
      <h2
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '10.66pt',
          lineHeight: 1.25,
          color: dark ? '#aba8a8' : '#464545',
          margin: 0,
        }}
      >
        { subheader }
      </h2>
    </div>
  );
};

UpcomingTasks.propTypes = {
  dark: PropTypes.bool,
  header: PropTypes.string,
  subheader: PropTypes.string,
};

UpcomingTasks.defaultProps = {
  dark: true,
  header: 'Pre-Calculus',
  subheader: '25 minute sprint',
};
