import { TimeQuery } from '../models';

const selectAllAlienTimes = (req: any, res: any) => {
  TimeQuery.selectAll(req, (data: any) => {
    res.send({ data });
  });
};

const selectTimeById = (req: any, res: any) => {
  TimeQuery.selectById(req, (data: any) => {
    res.send({ data });
  });
};

const selectTimesByAlienId = (req: any, res: any) => {
  TimeQuery.selectByUserId(req, (data: any) => {
    res.send({ data });
  });
};

const addTimeByAlienId = (req: any, res: any) => {
  TimeQuery.addNewTime(req, (data: any) => {
    res.send({ data });
  });
};

export default {
  selectAllAlienTimes,
  selectTimesByAlienId,
  selectTimeById,
  addTimeByAlienId,
};
