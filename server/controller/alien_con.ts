import { AlienQuery } from '../models';

const selectAllAliens = (req: any, res: any) => {
  AlienQuery.selectAll(req, (data: any) => {
    res.send({ data });
  });
};

const selectAlienById = (req: any, res: any) => {
  console.log({ controller: 'alien con' });
  AlienQuery.selectByAlienId(req, (data: any) => {
    res.send({ data });
  });
};

export default { selectAllAliens, selectAlienById };
