import db from '../db/postgres';

const selectAll = async (req: any, cb: Function) => {
  try {
    const data = await db.query(`SELECT * FROM alien;`);
    cb(data.rows);
  } catch (error) {
    console.log({ error });
  }
};

const selectByAlienId = async (req: any, cb: Function) => {
  try {
    const id = req.params['id'];
    console.log({ id });
    if (!id || typeof id === 'undefined') {
      cb('Invalid login_id provided');
      return;
    } else {
      const data = await db.query(
        `
        SELECT * FROM alien
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

export const AlienQuery = {
  selectAll,
  selectByAlienId,
};
