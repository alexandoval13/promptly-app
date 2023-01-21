import express from 'express';
// import bodyParser from 'body-parser';
const app = express();

import {
  alienRoutes,
  thoughtRoutes,
  timeRoutes,
  timeTypeRoutes,
  testRoutes,
} from './routes/router';

// app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/alien', alienRoutes);
app.use('/api/thought', thoughtRoutes);
app.use('/api/time', timeRoutes);
app.use('/api/timeType', timeTypeRoutes);
app.use('/api/test', testRoutes);

export default app;
