import React from 'react';
import PropTypes from 'prop-types';

export const UpcomingTasks = ({ dark, ...props }) => {
  return (
    <div>
      TODO: Implement UpcomingTasks
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
