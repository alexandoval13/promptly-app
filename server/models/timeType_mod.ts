import db from '../db/postgres';

const selectAll = async (req: any, cb: Function) => {
  try {
    const data = await db.query(`SELECT * FROM space_time_types;`);
    cb(data.rows);
  } catch (error) {
    console.log({ error });
  }
};

const selectById = async (req: any, cb: Function) => {
  try {
    const id = req.params['id'];
    if (!id || typeof id === 'undefined') {
      cb('Invalid type id provided');
      return;
    } else {
      const data = await db.query(
        `
        SELECT * FROM space_time_types
        WHERE id = $1
      `,
        [id]
      );
      const timeType = data.rows[0];
      cb(timeType);
    }
  } catch (error) {
    console.log({ error });
  }
};

export const TimeTypeQuery = {
  selectAll,
  selectById,
};
