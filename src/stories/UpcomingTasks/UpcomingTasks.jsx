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
                >
                  {Math.floor(task.timeToComplete/60)}:{Math.floor(task.timeToComplete % 60).toString().padStart(2, '0')}
                </span>
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
      {(tasks.length == 0) ? (
          <span
          style={{
            marginTop: 6.98,
            lineHeight: 1,
            fontFamily: 'Sarala, sans-serif',
            fontSize: '35px',
          }}
        >That's it for today!</span>
        ) : ''}
    </div>
  );
};

UpcomingTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      timeToComplete: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

UpcomingTasks.defaultProps = {
  tasks: [
    {
      timeToComplete: 300,
      title: 'Break'
    },
    {
      timeToComplete: 1500,
      title: 'Pre-Calculus'
    },
  ]
};
