import React from 'react';
import PropTypes from 'prop-types';

export const UpcomingTasks = ({ tasks, ...props }) => {
  return (
    <div
      style={{
        marginLeft: 46.17,
        marginTop: 41.12,
      }}
    >
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '10.67px',
          lineHeight: '13.33px',
        }}
      >
        Your Upcoming Tasks
      </span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
         style={{
           width: 29.77,
           marginRight: 9.19,
           marginTop: 6.98,
           lineHeight: '27.17px',
           fontFamily: 'Poppins, sans-serif',
           fontSize: '10.67px',
           fontWeight: 'light',
           verticalAlign: 'middle',
           textAlign: 'center',
         }}
        >
          {
            [...tasks].map((task) => (
                <span
                  style={{
                    display: 'block',
                  }}
                >{task.timeToComplete}</span>
            ))
          }
        </div>
        <div
          style={{
            borderLeft: '0.35px solid #838383',
            paddingLeft: 11.24,
            marginTop: 6.98,
            lineHeight: '27.17px',
            fontFamily: 'Sarala, sans-serif',
            fontSize: '21.33px',
            verticalAlign: 'middle',
          }}
        >
          {
            [...tasks].map((task) => (
                <span
                  style={{
                    display: 'block',
                  }}
                >{task.title}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

UpcomingTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      timeToComplete: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

UpcomingTasks.defaultProps = {
  tasks: [
    {
      timeToComplete: '5:00',
      title: 'Break'
    },
    {
      timeToComplete: '25:00',
      title: 'Pre-Calculus'
    },
  ]
};
