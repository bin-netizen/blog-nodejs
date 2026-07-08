🚀 Blog NodeJS
📌 Giới thiệu

Đây là dự án Blog cá nhân được xây dựng bằng Node.js và Express.
Ứng dụng cho phép tạo một server cơ bản và hiển thị nội dung khi người dùng truy cập.

🛠️ Công nghệ sử dụng
⚡ Node.js
🚀 Express.js
📄 Morgan (HTTP request logger)
📂 Cấu trúc thư mục
blog-nodejs/
│── node_modules/        (ignored)
│── index.js             (file chính)
│── package.json         (quản lý dependencies)
│── package-lock.json
│── .gitignore
│── README.md
⚙️ Cài đặt dự án
1. Clone project về máy
git clone https://github.com/your-username/blog-nodejs.git
2. Di chuyển vào thư mục
cd blog-nodejs
3. Cài đặt thư viện
npm install
▶️ Chạy ứng dụng
npm start

👉 Sau đó mở trình duyệt và truy cập:

http://localhost:3000
📸 Demo

Khi truy cập, bạn sẽ thấy:

Chào mừng đến với Blog cá nhân của tôi!
📊 Logging với Morgan

Dự án sử dụng Morgan để ghi log HTTP request.

Ví dụ log hiển thị trong terminal:

GET / 200 5.123 ms - 45
❗ Lưu ý
Thư mục node_modules đã được thêm vào .gitignore
Không push file nhạy cảm (.env) lên GitHub
📈 Hướng phát triển
✨ Thêm giao diện (Frontend)
📝 CRUD bài viết (Create, Read, Update, Delete)
🔐 Xác thực người dùng (Login/Register)
💾 Kết nối database (MongoDB)
👨‍💻 Tác giả
Trần Gia Bảo
⭐ Ghi chú

Nếu thấy project hữu ích, hãy ⭐ repo để ủng hộ nhé!
