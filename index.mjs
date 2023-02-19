import express from 'express';

import { router } from './routes/index.mjs';

const app = express();

const port = process.env.PORT;

app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
