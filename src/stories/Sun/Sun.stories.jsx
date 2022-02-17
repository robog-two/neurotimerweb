import React from 'react';

import { Sun } from './Sun';

export default {
  title: 'UI/TimeBased/Sun',
  component: Sun,
  argTypes: {
    daylight: { control: 'range' },
  },
};

const Template = (args) => <Sun {...args} />;

export const TwentyFiveMinutes = Template.bind({});
TwentyFiveMinutes.args = {
  daylight: 100,
};

export const TwentyMinutes = Template.bind({});
TwentyMinutes.args = {
  daylight: 80,
};

export const FifteenMinutes = Template.bind({});
FifteenMinutes.args = {
  daylight: 60,
};

export const TenMinutes = Template.bind({});
TenMinutes.args = {
  daylight: 40,
};

export const FiveMinutes = Template.bind({});
FiveMinutes.args = {
  daylight: 20,
};

export const TimeUp = Template.bind({});
TimeUp.args = {
  daylight: 0,
};
