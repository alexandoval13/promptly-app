import React from 'react';
import { Alien } from '../types/alien';

interface ControlBoardProps {
  alien: Alien;
}

const ControlBoard = (props: ControlBoardProps) => {
  const {
    alien: { settings },
  } = props;

  console.log({ settings });
  return (
    <div>
      <ul>
        <li>User Info/Edit</li>
        <li>User Data Bank: "Galaxy</li>
      </ul>
    </div>
  );
};

export default ControlBoard;
