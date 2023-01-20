import App from './app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;

App.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
