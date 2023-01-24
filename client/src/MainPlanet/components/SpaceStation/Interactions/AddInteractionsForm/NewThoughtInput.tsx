import React from 'react';

const NewThoughtInput = (props: any) => {
  return (
    <div>
      <label>
        <div>What do you want to remember?</div>
        <input name="description" type="text" />
      </label>
    </div>
  );
};

export default NewThoughtInput;
