const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;
const { engine } = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));

// GET: hiển thị trang login
app.get('/login', (req, res) => {
    res.render('login');
});

// POST: xử lý đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '123456') {
        console.log('Đăng nhập thành công');

        // 👉 chuyển sang trang mới
        res.render('success'); 
    } else {
        console.log('Sai tài khoản hoặc mật khẩu');

        // 👉 quay lại login + báo lỗi
        res.render('login', {
            error: 'Sai tài khoản hoặc mật khẩu, vui lòng nhập lại!'
        });
    }
});

// Cấp quyền truy cập cho thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware xử lý dữ liệu từ form HTML
app.use(express.urlencoded({
    extended: true
}));

// Middleware JSON
app.use(express.json());

// Route POST create blog (giữ nguyên)
app.post('/blogs/create', (req, res) => {
    console.log("Dữ liệu nhận được từ Form:", req.body);
    res.json(req.body);
});


// Cấu hình Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(morgan('combined'));

// ===== ROUTES =====

// Trang chủ
app.get('/', function (req, res) {
    res.render('home');
});

// About
app.get('/about', (req, res) => {
    res.render('about');
});

// Contact
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Search
app.get('/search', (req, res) => {
    console.log("Từ khóa tìm kiếm:", req.query.q);
    res.render('search');
});

// Create blog
app.get('/blogs/create', (req, res) => {
    res.render('create');
});


// Chạy server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
