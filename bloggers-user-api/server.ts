import express from 'express';

const app = express();
const port = 3000;

app.listen(`${port}/api/user`, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});