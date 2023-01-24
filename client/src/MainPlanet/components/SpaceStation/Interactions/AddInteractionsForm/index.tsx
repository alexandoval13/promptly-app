import axios from 'axios';
import React, { useState } from 'react';
import { Button, Dialog } from '../../../../../design-system';
import { Alien } from '../../../../types/alien';
import NewExplorationInput from './NewExplorationInput';
import NewThoughtInput from './NewThoughtInput';

interface ThoughtRecorderProps {
  alien: Alien;
}

const ThoughtRecorder = (props: ThoughtRecorderProps) => {
  const { alien } = props;
  const [addDataDialogOpen, setAddDataDialogOpen] = useState(false);

  const defaultValues = {
    type: 'thought',
    description: '',
    details: '',
    category: 'self-care',
    commitment: 'quick',
    difficulty: 'easy',
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleSelectAddData = () => {
    setAddDataDialogOpen(true);
  };
  const handleCloseAddDataDialog = () => {
    setAddDataDialogOpen(false);
  };

  const handleSubmitData = () => {
    const mutationType = formValues.type === 'thought' ? 'thought' : 'time';
    const path = `/${mutationType}/alien/${alien.id}`;
    console.log({ path, formValues });
    axios
      .post(path, formValues)
      .then((res) => {
        console.log({ res });
        // handleCloseAddDataDialog();
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <div>
      {addDataDialogOpen && (
        <Dialog
          open={addDataDialogOpen}
          onClose={handleCloseAddDataDialog}
          fullScreen={true}
        >
          <div>
            <div>Data Dialog is Open</div>
            <form onSubmit={handleSubmitData} onChange={handleChange}>
              <label>
                Type
                <select name="type" value={formValues.type}>
                  <option value="thought">Thoughts</option>
                  <option value="taking-space">Taking Space</option>
                </select>
              </label>
              <br />
              {formValues.type === 'thought' ? (
                <NewThoughtInput />
              ) : (
                <NewExplorationInput />
              )}
            </form>
            <Button onClick={handleSubmitData}>Submit</Button>
            <Button onClick={handleCloseAddDataDialog}>Close</Button>
          </div>
        </Dialog>
      )}
      <div>Thought Recorder</div>
      <Button onClick={handleSelectAddData}>Add Data</Button>
    </div>
  );
};

export default ThoughtRecorder;
