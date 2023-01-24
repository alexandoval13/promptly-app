import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Greetings from './Greetings';
import Interactions from './Interactions';
import { Alien } from '../../types/alien';
import { Thought } from '../../types/thought';
import { Time } from '../../types/time';
import ThoughtRecorder from './Interactions/AddInteractionsForm';

interface SpaceStationProps {
  alien: Alien;
}

function SpaceStation(props: SpaceStationProps) {
  const { alien } = props;
  const [thought, setThought] = useState<Thought | null>(null);
  const [times, setTimes] = useState<Time[] | null>(null);

  useEffect(() => {
    axios.get(`/thought/random/${alien.id}`).then((res) => {
      const { data } = res.data;
      const thought = data[0];
      setThought(thought);
    });

    axios.get(`/time/alien/${alien.id}`).then((res) => {
      const { data } = res.data;
      setTimes(data);
    });
  }, [alien.id]);

  return (
    <div>
      <div> Space Station</div>
      <Greetings name={alien['first_name']} />
      <Interactions thought={thought} times={times} />
      <ThoughtRecorder alien={alien} />
    </div>
  );
}

export default SpaceStation;
