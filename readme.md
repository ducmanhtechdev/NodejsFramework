# Backend Project - Node.js Framework

Dự án này là một khung (boilerplate) cho ứng dụng Backend sử dụng Node.js, được cấu hình sẵn với Express, Sequelize (MySQL), và View Engine EJS. Dự án hỗ trợ cú pháp ES6+ thông qua Babel.

## 🛠 Tech Stack

Dựa trên cấu hình `package.json` và mã nguồn:

* **Runtime:** Node.js
* **Framework:** Express.js (v4.17.2)
* **Database:** MySQL (sử dụng driver `mysql2`)
* **ORM:** Sequelize (v6.13.0) & Sequelize CLI
* **View Engine:** EJS
* **Transpiler:** Babel (Core, Node, Preset-env) để hỗ trợ ES6 imports/exports
* **Environment Variables:** Dotenv
* **Frontend Framework:** Bootstrap (được tích hợp sẵn trong `src/public`)

## 📂 Project Structure

Cấu trúc thư mục hiện tại của dự án:

```text
ROOT
├── .babelrc
├─] .env (ignored)
├── .env.example
├── .gitignore
├── .sequelizerc
├─] node_modules/ (ignored)
├─] package-lock.json (ignored)
├── package.json
├── readme.md
├── src/
│   ├── config/
│   │   ├── config.json
│   │   ├── configBodyParser.js
│   │   ├── connectDB.js
│   │   └── ViewEngine.js
│   ├── controllers/
│   │   └── HomeController.js
│   ├── migrations/
│   ├── models/
│   │   └── index.js
│   ├── public/
│   │   ├── assets/
│   │   │   └── bootstrap/
│   │   │       ├── css/
│   │   │       │   ├── bootstrap-grid.css
│   │   │       │   ├── bootstrap-grid.css.map
│   │   │       │   ├── bootstrap-grid.min.css
│   │   │       │   ├── bootstrap-grid.min.css.map
│   │   │       │   ├── bootstrap-grid.rtl.css
│   │   │       │   ├── bootstrap-grid.rtl.css.map
│   │   │       │   ├── bootstrap-grid.rtl.min.css
│   │   │       │   ├── bootstrap-grid.rtl.min.css.map
│   │   │       │   ├── bootstrap-reboot.css
│   │   │       │   ├── bootstrap-reboot.css.map
│   │   │       │   ├── bootstrap-reboot.min.css
│   │   │       │   ├── bootstrap-reboot.min.css.map
│   │   │       │   ├── bootstrap-reboot.rtl.css
│   │   │       │   ├── bootstrap-reboot.rtl.css.map
│   │   │       │   ├── bootstrap-reboot.rtl.min.css
│   │   │       │   ├── bootstrap-reboot.rtl.min.css.map
│   │   │       │   ├── bootstrap-utilities.css
│   │   │       │   ├── bootstrap-utilities.css.map
│   │   │       │   ├── bootstrap-utilities.min.css
│   │   │       │   ├── bootstrap-utilities.min.css.map
│   │   │       │   ├── bootstrap-utilities.rtl.css
│   │   │       │   ├── bootstrap-utilities.rtl.css.map
│   │   │       │   ├── bootstrap-utilities.rtl.min.css
│   │   │       │   ├── bootstrap-utilities.rtl.min.css.map
│   │   │       │   ├── bootstrap.css
│   │   │       │   ├── bootstrap.css.map
│   │   │       │   ├── bootstrap.min.css
│   │   │       │   ├── bootstrap.min.css.map
│   │   │       │   ├── bootstrap.rtl.css
│   │   │       │   ├── bootstrap.rtl.css.map
│   │   │       │   ├── bootstrap.rtl.min.css
│   │   │       │   └── bootstrap.rtl.min.css.map
│   │   │       └── js/
│   │   │           ├── bootstrap.bundle.js
│   │   │           ├── bootstrap.bundle.js.map
│   │   │           ├── bootstrap.bundle.min.js
│   │   │           ├── bootstrap.bundle.min.js.map
│   │   │           ├── bootstrap.esm.js
│   │   │           ├── bootstrap.esm.js.map
│   │   │           ├── bootstrap.esm.min.js
│   │   │           ├── bootstrap.esm.min.js.map
│   │   │           ├── bootstrap.js
│   │   │           ├── bootstrap.js.map
│   │   │           ├── bootstrap.min.js
│   │   │           └── bootstrap.min.js.map
│   │   ├── css/
│   │   └── js/
│   ├── routes/
│   │   ├── api.js
│   │   └── web.js
│   ├── seeders/
│   ├── server.js
│   ├── services/
│   └── views/
│       └── index.ejs
└── structproject.txt
```

## 🚀 Getting Started

### 1. Prerequisites (Yêu cầu)
1. Nodejs 14.17.1: Link tải [tại đây](https://nodejs.org/download/release/v14.17.1) chọn file msi để tải về.
2. Xampp Link tải [tại đây](https://www.apachefriends.org/download.html)

### 2. Installation (Cài đặt)
Cài đặt các thư viện cần thiết:
```bash
npm install 
```

### 3. Configuration (Cấu hình)
Tạo file .env tại thư mục gốc và điền thông tin kết nối Database (tương ứng với src/config/connectDB.js):

```bash
PORT=4000
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

### 4. Running the App (Chạy dự án)
Dự án sử dụng nodemon và babel-node để chạy môi trường development:
```bash
npm start
```

Lệnh thực thi: nodemon --exec babel-node src/server.js

Server sẽ khởi động tại: http://localhost:3000 (hoặc port trong .env)

## Giải thích: 

```text
📂 1. Thư mục gốc (Root Directory)
Đây là nơi chứa các file cấu hình môi trường và quản lý dự án.

package.json:
Tác dụng: Là "căn cước công dân" của dự án. Nó chứa thông tin dự án, danh sách các thư viện (dependencies như express, sequelize, ejs...) và các câu lệnh chạy dự án (scripts như npm start).

.env: (File bạn cần tạo thủ công, khai báo các biến môi trường)
Tác dụng: Chứa các biến môi trường nhạy cảm như thông tin kết nối Database, Port server. Giúp bảo mật thông tin, không hardcode password vào code.

.babelrc:
Tác dụng: File cấu hình cho Babel. Nó bảo Babel biết cần dùng preset nào (ở đây là @babel/preset-env) để dịch code JavaScript mới (ES6+) sang code cũ hơn để Node.js hiểu được.

.sequelizerc:
Tác dụng: File cấu hình đường dẫn cho Sequelize CLI. Nó chỉ định nơi chứa thư mục config, models, seeders, và migrations. Nhờ file này mà lệnh sequelize init biết sinh file vào đâu.

.gitignore:
Tác dụng: Liệt kê các file/thư mục mà Git cần bỏ qua, không đưa lên kho lưu trữ (ví dụ: node_modules, .env).

📂 2. Thư mục src (Source Code)
Nơi chứa toàn bộ mã nguồn logic của ứng dụng.

📄 src/server.js
Tác dụng: Đây là Entry Point (cửa ngõ chính) của ứng dụng.

Nhiệm vụ:
Khởi tạo ứng dụng Express (app).
Cấu hình các middleware (BodyParser, ViewEngine).
Kết nối Database.
Nạp các Routes (tuyến đường).
Lắng nghe request tại PORT đã định.
📂 src/config/ (Cấu hình hệ thống)
connectDB.js:

Kết nối tới MySQL bằng Sequelize. Nó kiểm tra xem kết nối có thành công hay không và log ra console.

ViewEngine.js:

Cấu hình Express sử dụng EJS làm template engine và định nghĩa thư mục chứa file giao diện (./src/views). Cấu hình thư mục chứa file tĩnh (public).

config.json:

Chứa thông tin đăng nhập Database dành riêng cho Sequelize CLI (khi chạy lệnh migration/seed). Lưu ý: File này độc lập với .env dùng trong connectDB.js.

configBodyParser.js:

Cấu hình thư viện body-parser để server đọc được dữ liệu JSON hoặc form data gửi lên từ client.

📂 src/controllers/ (Điều hướng & Logic)
HomeController.js:

Chứa các hàm xử lý logic khi người dùng vào các trang cụ thể (ví dụ: hàm getHomePage render ra file index.ejs, hàm postCRUD xử lý form tạo mới). Đóng vai trò trung gian giữa Route và Model/View.

📂 src/models/ (Cấu trúc dữ liệu)
models/user.js:

Định nghĩa cấu trúc bảng Users trong database (gồm các cột: firstName, lastName, email,...). Ánh xạ dữ liệu từ SQL thành Object trong code JS.

models/index.js:

File khởi tạo của Sequelize. Nó tự động đọc tất cả các file model trong thư mục này và nạp vào hệ thống để sử dụng.

📂 src/routes/ (Tuyến đường)
web.js:

Định nghĩa các đường dẫn URL (ví dụ: /, /crud, /post-crud). Nó quyết định xem khi người dùng vào URL nào thì gọi đến hàm nào trong Controller.

📂 src/migration/ (Quản lý phiên bản DB)
migrations/xxxx-create-user.js:

File lịch sử thay đổi cấu trúc database. Dùng để tạo bảng Users trong MySQL thông qua lệnh sequelize db:migrate. Giúp đồng bộ cấu trúc DB giữa các máy dev khác nhau.

📂 src/views/ (Giao diện)
index.ejs:

File giao diện HTML (có nhúng code JS của EJS). Đây là những gì người dùng nhìn thấy trên trình duyệt.

📂 src/public/ (File tĩnh)
Chứa CSS, JS, hình ảnh công khai. Trong dự án này có thư mục bootstrap để dùng framework CSS Bootstrap.
```
