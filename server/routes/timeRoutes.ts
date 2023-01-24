import express from 'express';
import { TimeController } from '../controller/';

const Time = express.Router();

const {
  selectAllAlienTimes,
  selectTimesByAlienId,
  selectTimeById,
  addTimeByAlienId,
} = TimeController;

Time.get('/', selectAllAlienTimes);
Time.get('/:id', selectTimeById);
Time.get('/alien/:id', selectTimesByAlienId);
Time.post('/alien/:user_id', addTimeByAlienId);

export default Time;
