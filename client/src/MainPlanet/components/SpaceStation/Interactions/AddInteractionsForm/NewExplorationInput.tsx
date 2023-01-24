import React from 'react';

const NewExplorationInput = (props: any) => {
  return (
    <div>
      <label>
        <div>Thing to remember to do</div>
        <input name="description" type="text" />
      </label>
      <br />
      <label>
        <div>Description</div>
        <input name="details" type="text" />
      </label>
      <br />
      <label>
        <div>Categorical</div>
        <select name="category">
          <option value="self-care">Self Care</option>
        </select>
      </label>
      <br />
      <label>
        <div>Time Commitment</div>
        <select name="commitment">
          <option value="quick">Quick</option>
          <option value="some-time">I've got some time</option>
          <option value="all-day">I have all day</option>
        </select>
      </label>
      <br />
      <label>
        <div>Difficulty</div>
        <select name="difficulty">
          <option value="easy">Easy Peasy</option>
          <option value="effort">Needs Some Effort</option>
          <option value="work">Takes Work</option>
        </select>
      </label>
    </div>
  );
};

export default NewExplorationInput;
