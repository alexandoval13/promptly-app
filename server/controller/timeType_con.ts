import { TimeTypeQuery } from '../models';

const selectAllTimeTypes = (req: any, res: any) => {
  TimeTypeQuery.selectAll(req, (data: any) => {
    res.send({ data });
  });
};

const selectTimeTypesById = (req: any, res: any) => {
  TimeTypeQuery.selectById(req, (data: any) => {
    res.send({ data });
  });
};

export default { selectAllTimeTypes, selectTimeTypesById };
