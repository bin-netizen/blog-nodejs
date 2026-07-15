const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;
const { engine } = require('express-handlebars');

// Cấp quyền truy cập cho thư mục public
app.use(express.static(path.join(__dirname, 'public')));
// Cấu hình Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views'); // Chỉ định thư mục chứa giao diện

app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.render('home');
  });

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});