import express from 'express';
import { AlienController } from '../controller/';

const Alien = express.Router();

const { selectAllAliens, selectAlienById } = AlienController;

Alien.get('/', selectAllAliens);
Alien.get('/:id', selectAlienById);

export default Alien;
