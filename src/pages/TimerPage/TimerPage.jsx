import React from 'react';
import { Card } from '../../stories/Card/Card';
import { ProgressBar } from '../../stories/ProgressBar/ProgressBar';
import { Sunset } from '../../stories/Sunset/Sunset';

export const TimerPage = () => {
  return (
    <Sunset>
      <Card>
        <ProgressBar />
      </Card>
    </Sunset>
  );
};
