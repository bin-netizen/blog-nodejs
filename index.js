const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Blog cá nhân của tôi!');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});