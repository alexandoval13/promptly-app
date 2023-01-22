import { ThoughtQuery } from '../models';
import { getRandomInt } from '../helpers/getRandomInt';

const selectAllAlienThoughts = (req: any, res: any) => {
  ThoughtQuery.selectAll(req, (data: any) => {
    res.send({ data });
  });
};

const selectThoughtById = (req: any, res: any) => {
  ThoughtQuery.selectById(req, (data: any) => {
    res.send({ data });
  });
};

const selectThoughtsByAlienId = (req: any, res: any) => {
  ThoughtQuery.selectByUserId(req, (data: any) => {
    res.send({ data });
  });
};

const selectRandomThoughtByAlienId = (req: any, res: any) => {
  ThoughtQuery.selectByUserId(req, (data: any) => {
    console.log({ data });
    const length = data.length;

    const index = getRandomInt(length);

    res.send({ data: [data[index]] });
  });
};

export default {
  selectAllAlienThoughts,
  selectThoughtById,
  selectThoughtsByAlienId,
  selectRandomThoughtByAlienId,
};
