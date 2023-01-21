import express from 'express';
import { TimeTypeController } from '../controller/';

const TimeType = express.Router();

const { selectAllTimeTypes, selectTimeTypesById } = TimeTypeController;

TimeType.get('/', selectAllTimeTypes);
TimeType.get('/:id', selectTimeTypesById);

export default TimeType;
