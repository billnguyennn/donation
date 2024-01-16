import express from 'express';
import {donationRegistrationHandler} from "./controllers/registration";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.post('/donations/new', donationRegistrationHandler);
