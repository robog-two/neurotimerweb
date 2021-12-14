import React from 'react';
import { Card } from '../../stories/Card/Card';
import { HeaderSubheader } from '../../stories/HeaderSubheader/HeaderSubheader';
import { ProgressBar } from '../../stories/ProgressBar/ProgressBar';
import { Sunset } from '../../stories/Sunset/Sunset';

export const TimerPage = () => {
  return (
    <Sunset>
      <Card>
        <HeaderSubheader />
        <ProgressBar />
      </Card>
    </Sunset>
  );
};
