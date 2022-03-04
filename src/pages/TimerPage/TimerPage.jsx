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
import { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function TimerPage(props) {
  const [state, setState] = useState({
    taskToAdd: '',
    currentTimeToAdd: 0,
    timeLeft: null,
    currentTask: 0,
    tasksToday: [],
    page: null,
  });

  const [timeLeft, setTimeLeft] = useState(999999)
  const [page, setPage] = useState('add-tasks')

  const { dark } = props;

  let progress, darkSun, daylight, currentTaskName, totalTime, tasksLeft, totalDayTime, currentTime;
  if (page !== 'add-tasks') {

    if (timeLeft === 0 && state.currentTask !== state.tasksToday.length) {
      setState({ ...state, currentTask: state.currentTask + 1})
      setTimeLeft(999999)
    }

    totalTime = state.tasksToday[state.currentTask].timeToComplete
    currentTaskName = state.tasksToday[state.currentTask].title
    if (timeLeft > totalTime) {
      setTimeLeft(totalTime)
    }
    daylight = (timeLeft / totalTime) * 100

    totalDayTime = 0
    currentTime = 0
    tasksLeft = []

    state.tasksToday.forEach((task, index) => { // Calculate our progress & what's left given today's schedule
      if (index < state.currentTask) currentTime += task.timeToComplete
      if (index === state.currentTask) currentTime += (totalTime - timeLeft)
      if (index > state.currentTask) tasksLeft.push(task)
      totalDayTime += task.timeToComplete
    })

    progress = Math.floor((currentTime / totalDayTime) * 100)

    darkSun = daylight < 40
  }

  const handle = useFullScreenHandle();

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft !== 0 && page === 'timer') {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>

      <FullScreen handle={handle}>
        <Sunset daylight={daylight}>
          {page === 'add-tasks' ? (
            <div>
              <Card dark={dark}>
                <div>
                  <UpcomingTasks title={'Today\'s Agenda'} tasks={state.tasksToday} dark={dark} />
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                  }}>
                    <label style={{
                      margin: 5,
                      fontFamily: 'Sarala, sans-serif',
                      display: 'inline'
                    }}>
                      Task
                      <input style={{
                        margin: 5,
                        fontFamily: 'Sarala, sans-serif',
                        display: 'inline',
                        backgroundColor: 'black',
                        color: 'white',
                        paddingLeft: 13,
                        border: '1px solid black',
                        width: '100px',
                        borderRadius: 30
                      }} onChange={(e) => { setState({ ...state, taskToAdd: e.target.value }) }} type="text" name="title" />
                    </label>
                    <label style={{
                      margin: 5,
                      fontFamily: 'Sarala, sans-serif',
                      display: 'inline'
                    }}>
                      Est. Minutes
                      <input style={{
                        margin: 5,
                        fontFamily: 'Sarala, sans-serif',
                        display: 'inline',
                        paddingLeft: 13,
                        backgroundColor: 'black',
                        width: '30px',
                        color: 'white',
                        border: '1px solid black',
                        borderRadius: 30
                      }} onChange={(e) => { setState({ ...state, currentTimeToAdd: e.target.value }) }} type="text" name="timeToComplete" />
                    </label>
                    <input style={{
                      fontFamily: 'Sarala, sans-serif',
                      display: 'block',
                      backgroundColor: 'black',
                      width: '22.5px',
                      height: '22.5px',
                      lineHeight: '6.25px',
                      color: 'white',
                      margin: 5,
                      border: '1px solid black',
                      borderRadius: '22.5px',
                      textAlign: 'center',
                      transform: 'translateY(6.5px)'
                    }} type="submit" value="+" onClick={() => {
                      if (state.taskToAdd && state.currentTimeToAdd) {
                        const newState = { ...state }
                        let time = state.currentTimeToAdd
                        while (time > 0) {
                          newState.tasksToday.push({
                            title: state.taskToAdd,
                            timeToComplete: Math.min(25 * 60, time * 60),
                          })
                          time -= 25;
                          if (time > 0) {
                            newState.tasksToday.push({
                              title: 'Short Break',
                              timeToComplete: 60 * 5,
                            })
                          }
                        }
                        newState.tasksToday.push({
                          title: 'Long Break',
                          timeToComplete: 60 * 15,
                        })
                        setState(newState)
                      }
                    }} />

                  </div>

                  <button style={{
                    fontFamily: 'Poppins, sans-serif',
                    display: 'block',
                    backgroundColor: 'black',
                    fontSize: 20,
                    color: 'white',
                    margin: 5,
                    border: '1px solid black',
                    borderRadius: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    transform: 'translateY(6.5px)'
                  }} type="submit" onClick={() => {
                    const tasksToday = [...state.tasksToday]
                    tasksToday.pop()
                    setState({
                      ...state,
                      tasksToday
                    })
                    setPage('timer')
                  }}>Get to Work!</button>
                </div>
              </Card>
            </div>
          ) : (
            <div>
              <Sun dark={darkSun} daylight={daylight} />
              <TimerText dark={darkSun} timeLeft={timeLeft} />
              <Card timer={true} dark={dark}>
                <div>
                  <HeaderSubheader header={currentTaskName} subheader={`${Math.floor(totalTime / 60)} minute sprint.`} dark={dark} />
                  <UpcomingTasks tasks={tasksLeft} dark={dark} />
                </div>
                <ProgressBar progress={progress} />
              </Card>
            </div>
          )}
        </Sunset>
      </FullScreen>
    </div>
  );
}

TimerPage.argTypes = {
  timeLeft: { control: { type: 'range', min: 0, max: 1500, step: 1 } },
  currentTask: { control: { type: 'range', min: 0, max: 6, step: 1 } },
  tasksToday: { control: 'none' },
};

TimerPage.propTypes = {
  dark: PropTypes.bool,
  timeLeft: range(0, 1500),
  currentTask: nonNegativeNumber(),
  page: PropTypes.string,
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
  page: 'add-tasks',
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
