import { selectAllAliens } from '../controller/alien_con';
import express from 'express';
const Alien = express.Router();

console.log('Alien route file');
Alien.get('/', selectAllAliens);

export default Alien;
