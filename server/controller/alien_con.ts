import { Alien } from '../models';

const selectAllAliens = (req, res) => {
  console.log('Selecting all aliens');
  Alien.selectAll(req, (data) => {
    console.log({ data });
    res.send({ data });
  });
};

export { selectAllAliens };
