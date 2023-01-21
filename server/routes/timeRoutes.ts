import express from 'express';
import { TimeController } from '../controller/';

const Time = express.Router();

const { selectAllAlienTimes, selectTimesByAlienId, selectTimeById } =
  TimeController;

Time.get('/', selectAllAlienTimes);
Time.get('/:id', selectTimeById);
Time.get('/alien/:id', selectTimesByAlienId);

export default Time;
