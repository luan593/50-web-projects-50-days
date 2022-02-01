const path = require('path');
const express = require('express');
require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
})

const PORT = process.env.PORT;
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.get('/day5', (req, res) => {
  res.sendFile('day5.html', {root: path.join(__dirname, 'html')});
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});