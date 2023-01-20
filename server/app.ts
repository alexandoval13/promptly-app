import express from 'express';
const app = express();

import { alienRoutes, testRoutes } from './routes/router';

app.use('/api/alien', alienRoutes);
app.use('/api/test', testRoutes);

export default app;
