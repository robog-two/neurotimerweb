import React from 'react';

import TimerPage from './TimerPage';

export default {
  title: 'UI/PageMockups/TimerPage',
  component: TimerPage,
  argTypes: {
    timeLeft: { control: { type: 'range', min: 0, max: 1500, step: 1 }},
    currentTask: { control: { type: 'range', min: 0, max: 6, step: 1 }},
    tasksToday: { control: 'none' },
  },
};

const Template = (args) => <TimerPage {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};

export const Light = Template.bind({});
Light.args = {
  dark: false,
};
