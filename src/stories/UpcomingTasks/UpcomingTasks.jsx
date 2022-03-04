import React from 'react';
import PropTypes from 'prop-types';

export const UpcomingTasks = ({ tasks, title, ...props }) => {
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
        {title}
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
            verticalAlign: 'middle',
          }}
        >
          {
            [...tasks].map((task) => (
                <span
                  style={{
                    display: 'block',
                    color: task.title.includes('Break') ? 'gray' : 'white',
                    fontSize: task.title.includes('Break') ? '10.67px' : '21.33px'
                  }}
                >{task.title}</span>
            ))
          }
        </div>
      </div>
      {(tasks.length === 0) ? (
          <span
          style={{
            marginTop: 6.98,
            lineHeight: 1,
            fontFamily: 'Sarala, sans-serif',
            fontSize: '35px',
          }}
        >{title === 'Up Next' ? "That's it for today!" : "Add a task below."}</span>
        ) : ''}
    </div>
  );
};

UpcomingTasks.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      timeToComplete: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

UpcomingTasks.defaultProps = {
  title: 'Up Next',
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
