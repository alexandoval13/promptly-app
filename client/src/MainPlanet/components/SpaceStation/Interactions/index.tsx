import React, { useState } from 'react';
import { DataForm } from './AddInteractionsForms/AddDataForm';
import { FormTypes } from '../../../constants/forms';
import { Thought } from '../../../types/thought';
import { Time } from '../../../types/time';
import SpaceExploration from './SpaceExploration';
import TimeTravelThoughts from './TimeTravelThoughts';
import { Dialog } from '../../../../design-system';

interface InteractionsProps {
  alienId: Number;
  thought: Thought | null;
  times: Time[] | null;
}

const Interactions = (props: InteractionsProps) => {
  const { alienId, thought, times } = props;

  const [addDataFormOpen, setAddDataFormOpen] = useState(false);
  const [formName, setFormName] = useState<FormTypes | null>(null);

  const handleOpenForm = (name: FormTypes) => {
    setAddDataFormOpen(true);
    setFormName(name);
  };

  const handleCloseForm = () => {
    setAddDataFormOpen(false);
    setFormName(null);
  };

  return (
    <div>
      {addDataFormOpen && formName && (
        <Dialog open={addDataFormOpen} onClose={handleCloseForm}>
          <DataForm
            alienId={alienId}
            formName={formName}
            handleCloseForm={handleCloseForm}
          />
        </Dialog>
      )}
      <TimeTravelThoughts thought={thought} handleOpenForm={handleOpenForm} />
      <SpaceExploration times={times} handleOpenForm={handleOpenForm} />
    </div>
  );
};

export default Interactions;
