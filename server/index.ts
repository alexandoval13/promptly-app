import express from 'express';
const PORT = process.env.PORT || 3001;
const app = express();

// Test routes
app.get('/api', (req, res) => {
  res.send({ message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// // User routes
// app.get('/user/:id', (req, res) => {
//   console.log({ req });
//   res.send({ user: `Your User is ${req.params ? req.params.id : 'unknown'}` });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
