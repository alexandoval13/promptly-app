import db from '../db/postgres';

const selectAll = async (req: any, cb: Function) => {
  try {
    const data = await db.query(`SELECT * FROM thought_space;`);
    cb(data.rows);
  } catch (error) {
    console.log({ error });
  }
};

const selectById = async (req: any, cb: Function) => {
  try {
    const id = req.params['id'];
    console.log({ id });
    if (!id || typeof id === 'undefined') {
      cb('Invalid thought id provided');
      return;
    } else {
      const data = await db.query(
        `
        SELECT * FROM thought_space
        WHERE id = $1
        LIMIT 1
      `,
        [id]
      );
      const thoughts = data.rows;
      cb(thoughts);
    }
  } catch (error) {
    console.log({ error });
  }
};

const selectByUserId = async (req: any, cb: Function) => {
  try {
    const id = req.params['user_id'];
    console.log({ id });
    if (!id || typeof id === 'undefined') {
      cb('Invalid user id provided');
      return;
    } else {
      const data = await db.query(
        `
        SELECT * FROM thought_space
        WHERE user_id = $1
      `,
        [id]
      );
      const thoughts = data.rows;
      cb(thoughts);
    }
  } catch (error) {
    console.log({ error });
  }
};

export const ThoughtQuery = {
  selectAll,
  selectById,
  selectByUserId,
};
