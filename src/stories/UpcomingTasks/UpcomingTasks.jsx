import React from 'react';
import PropTypes from 'prop-types';

export const UpcomingTasks = ({ dark, ...props }) => {
  return (
    <div>
      <p>TODO: Implement UpcomingTasks</p>
    </div>
  );
};

UpcomingTasks.propTypes = {
  dark: PropTypes.bool,
};

UpcomingTasks.defaultProps = {
  dark: true,
};
