import React from 'react';

import { TimerText } from './TimerText';

export default {
  title: 'UI/TimeBased/TimerText',
  component: TimerText,
  argTypes: {
    timeLeft: { control: 'range' },
  },
};

const Template = (args) => <TimerText {...args} />;

export const TwentyFiveMinutes = Template.bind({});
TwentyFiveMinutes.args = {
  timeLeft: 1500,
};

export const TwentyMinutes = Template.bind({});
TwentyMinutes.args = {
  timeLeft: 1200,
};

export const FifteenMinutes = Template.bind({});
FifteenMinutes.args = {
  timeLeft: 900,
};

export const TenMinutes = Template.bind({});
TenMinutes.args = {
  timeLeft: 600,
};

export const FiveMinutes = Template.bind({});
FiveMinutes.args = {
  timeLeft: 300,
};

export const TimeUp = Template.bind({});
TimeUp.args = {
  timeLeft: 0,
};
