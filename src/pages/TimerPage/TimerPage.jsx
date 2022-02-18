import React from 'react';
import { Card } from '../../stories/Card/Card';
import { HeaderSubheader } from '../../stories/HeaderSubheader/HeaderSubheader';
import { ProgressBar } from '../../stories/ProgressBar/ProgressBar';
import { Sunset } from '../../stories/Sunset/Sunset';
import { PropTypes } from 'prop-types';
import { UpcomingTasks } from '../../stories/UpcomingTasks/UpcomingTasks';
import { TimerText } from '../../stories/TimerText/TimerText';
import { Sun } from '../../stories/Sun/Sun';
import { range, nonNegativeNumber } from 'airbnb-prop-types';

export const TimerPage = ({ dark, timeLeft, currentTask, tasksToday, ...props }) => {
  const totalTime = tasksToday[currentTask].timeToComplete
  const currentTaskName = tasksToday[currentTask].title
  if (timeLeft > totalTime) timeLeft = totalTime
  const daylight = (timeLeft / totalTime) * 100

  let totalDayTime = 0
  let currentTime = 0
  let tasksLeft = []

  tasksToday.forEach((task, index) => { // Calculate our progress & what's left given today's schedule
    if (index < currentTask) currentTime += task.timeToComplete
    if (index === currentTask) currentTime += (totalTime - timeLeft)
    if (index > currentTask) tasksLeft.push(task)
    totalDayTime += task.timeToComplete
  })

  const progress = Math.floor((currentTime / totalDayTime) * 100)

  const darkSun = daylight < 40

  return (
    <Sunset daylight={daylight}>
      <Sun dark={darkSun} daylight={daylight} />
      <TimerText dark={darkSun} timeLeft={timeLeft} />
      <Card timer={true} dark={dark}>
        <div>
          <HeaderSubheader header={currentTaskName} subheader={`${Math.floor(totalTime / 60)} minute sprint.`} dark={dark}/>
          <UpcomingTasks tasks={tasksLeft} dark={dark}/>
        </div>
        <ProgressBar progress={progress} />
      </Card>
    </Sunset>
  );
};

TimerPage.argTypes = {
  timeLeft: { control: { type: 'range', min: 0, max: 1500, step: 1 }},
  currentTask: { control: { type: 'range', min: 0, max: 6, step: 1 }},
  tasksToday: { control: 'none' },
};

TimerPage.propTypes = {
  dark: PropTypes.bool,
  timeLeft: range(0, 1500),
  currentTask: nonNegativeNumber(),
  tasksToday: PropTypes.arrayOf(
    PropTypes.shape({
      timeToComplete: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

TimerPage.defaultProps = {
  dark: true,
  timeLeft: 1432,
  currentTask: 4,
  tasksToday: [
    { timeToComplete: 1500, title: 'Timed Essay' },
    { timeToComplete: 300, title: 'Short Break' },
    { timeToComplete: 1500, title: 'Timed Essay' },
    { timeToComplete: 300, title: 'Short Break' },
    { timeToComplete: 1500, title: 'Pre-Calculus' },
    { timeToComplete: 900, title: 'Long Break' },
    { timeToComplete: 900, title: 'Pre-Calculus' },
  ]
};
