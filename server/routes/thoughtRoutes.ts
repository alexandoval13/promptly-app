import express from 'express';
import { ThoughtController } from '../controller/';

const Thought = express.Router();

const { selectAllAlienThoughts, selectThoughtsByAlienId, selectThoughtById } =
  ThoughtController;

Thought.get('/', selectAllAlienThoughts);
Thought.get('/:id', selectThoughtById);
Thought.get('/alien/:user_id', selectThoughtsByAlienId);

export default Thought;
