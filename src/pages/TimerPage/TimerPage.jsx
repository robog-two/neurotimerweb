import React from 'react';
import { Card } from '../../stories/Card/Card';
import { HeaderSubheader } from '../../stories/HeaderSubheader/HeaderSubheader';
import { ProgressBar } from '../../stories/ProgressBar/ProgressBar';
import { Sunset } from '../../stories/Sunset/Sunset';
import { PropTypes } from 'react';

export const TimerPage = ({ dark, ...props }) => {
  return (
    <Sunset>
      <Card timer={true} dark={dark}>
        <HeaderSubheader dark={dark}/>
        <ProgressBar />
      </Card>
    </Sunset>
  );
};

TimerPage.propTypes = {
  dark: PropTypes.bool,
};

TimerPage.defaultProps = {
  dark: true,
};
