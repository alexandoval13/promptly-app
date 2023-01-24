import db from '../db/postgres';

const selectAll = async (req: any, cb: Function) => {
  try {
    const data = await db.query(`SELECT * FROM space_time;`);
    cb(data.rows);
  } catch (error) {
    console.log({ error });
  }
};

const selectById = async (req: any, cb: Function) => {
  try {
    const id = req.params['id'];
    console.log({ req, id });
    if (!id || typeof id === 'undefined') {
      cb('Invalid id provided');
      return;
    } else {
      const data = await db.query(
        `
        SELECT * FROM space_time
        WHERE id = $1
        LIMIT 1
      `,
        [id]
      );
      const user = data.rows[0];
      cb(user);
    }
  } catch (error) {
    console.log({ error });
  }
};

const selectByUserId = async (req: any, cb: Function) => {
  try {
    const id = req.params['id'];
    if (!id || typeof id === 'undefined') {
      cb('Invalid alien id provided');
      return;
    } else {
      const data = await db.query(
        `
        SELECT * FROM space_time
        WHERE user_id = $1
      `,
        [id]
      );
      const times = data.rows;
      cb(times);
    }
  } catch (error) {
    console.log({ error });
  }
};

const addNewTime = async (req: any, cb: Function) => {
  try {
    const userId = req.params['user_id'];
    const {
      body: { description, details, commitment, time, difficulty, type },
    } = req;
    if (type === 'taking-space' && description) {
      const data = await db.query(
        `
          INSERT INTO space_time(user_id, ex_name, ex_description, space_time_types, time_commitment, difficulty)
          VALUES($1, $2, $3, $4, $5, $6);
        `,
        [userId, description, details, 1, commitment, difficulty]
      );

      cb(data);
    }
  } catch (error) {
    console.log({ error });
  }
};

export const TimeQuery = {
  selectAll,
  selectById,
  selectByUserId,
  addNewTime,
};
