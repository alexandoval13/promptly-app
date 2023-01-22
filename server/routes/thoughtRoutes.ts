import express from 'express';
import { ThoughtController } from '../controller/';

const Thought = express.Router();

const {
  selectAllAlienThoughts,
  selectThoughtById,
  selectThoughtsByAlienId,
  selectRandomThoughtByAlienId,
} = ThoughtController;

Thought.get('/', selectAllAlienThoughts);
Thought.get('/:id', selectThoughtById);
Thought.get('/alien/:user_id', selectThoughtsByAlienId);
Thought.get('/random/:user_id', selectRandomThoughtByAlienId);

export default Thought;
