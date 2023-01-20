import db from '../db/postgres';

const selectAll = async (req: any, cb: Function) => {
  try {
    const data = await db.query(`SELECT * FROM alien;`);
    console.log({ data: data.rows });
    cb(data.rows);
  } catch (error) {
    console.log({ error });
  }
};

export default {
  selectAll,
};
