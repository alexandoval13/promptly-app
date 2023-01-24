import React from 'react';
import { getRandomInt } from '../../../helpers/getRandomInt';
import { Time } from '../../../types/time';

interface SpaceExplorationProps {
  times: Time[] | null;
}

const SpaceExploration = (props: SpaceExplorationProps) => {
  const { times } = props;

  if (times) {
    const randomIdx = getRandomInt(times.length);
    const time = times[randomIdx];
    return (
      <div>
        <header>SpaceExploration</header>
        <div>
          <p>*suggestion*</p>
          <div>
            <p>{time.ex_name}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No Times Yet</div>;
  }
};

export default SpaceExploration;
