import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const PG_CREDENTIALS = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT) || 5432,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
};

// const connectDb = async () => {
//   try {
//     const db = new Pool(PG_CREDENTIALS);
//     await pool.connect();
//     console.log(
//       `Successfully connected to pg db at port: ${PG_CREDENTIALS.port}`
//     );
//     await pool.end();
//   } catch (error) {
//     console.log(`Failed to connect to PG database: ${error}`);
//   }
// };

const db = new Pool(PG_CREDENTIALS);

export default db;
