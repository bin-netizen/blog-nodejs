const express = require('express');
const morgan = require('morgan');
const path = require('path');

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
  // Route xử lý cho trang About
app.get('/about', (req, res) => {
    res.render('about');
});

// Route xử lý cho trang Liên hệ
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route hiển thị trang Tìm kiếm
app.get('/search', (req, res) => {
    // req.query chứa toàn bộ các parameters trên URL
    console.log("Từ khóa tìm kiếm:", req.query.q);

    res.render('search');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});