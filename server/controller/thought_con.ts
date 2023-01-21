import { ThoughtQuery } from '../models';

const selectAllAlienThoughts = (req: any, res: any) => {
  ThoughtQuery.selectAll(req, (data: any) => {
    res.send({ data });
  });
};

const selectThoughtsByAlienId = (req: any, res: any) => {
  ThoughtQuery.selectByUserId(req, (data: any) => {
    res.send({ data });
  });
};

const selectThoughtById = (req: any, res: any) => {
  console.log('selecting htought by id', { params: req.params });
  ThoughtQuery.selectById(req, (data: any) => {
    res.send({ data });
  });
};

export default {
  selectAllAlienThoughts,
  selectThoughtById,
  selectThoughtsByAlienId,
};
