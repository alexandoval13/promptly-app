import express from 'express';
const Test = express.Router();

Test.get('/', (req, res) => {
  console.log({ req });
  res.send({
    message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT',
  });
});

export default Test;
