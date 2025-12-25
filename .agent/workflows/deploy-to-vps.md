---
description: Hướng dẫn deploy React portfolio lên VPS
---

# Hướng dẫn Deploy React Portfolio lên VPS

Workflow này hướng dẫn bạn deploy dự án React portfolio lên VPS sử dụng Nginx làm web server.

## Yêu cầu trước khi bắt đầu

- VPS đã cài đặt Ubuntu/Debian (khuyến nghị Ubuntu 20.04 hoặc mới hơn)
- Có quyền truy cập SSH vào VPS
- Domain đã trỏ về IP của VPS (tùy chọn, có thể dùng IP)
- Đã có tài khoản sudo trên VPS

## Bước 1: Chuẩn bị VPS

### 1.1. Kết nối SSH vào VPS

```bash
ssh username@your-vps-ip
```

Thay `username` bằng tên user của bạn và `your-vps-ip` bằng IP của VPS.

### 1.2. Cập nhật hệ thống

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3. Cài đặt Nginx

```bash
sudo apt install nginx -y
```

### 1.4. Khởi động và enable Nginx

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

Kiểm tra trạng thái:

```bash
sudo systemctl status nginx
```

### 1.5. Cấu hình Firewall (nếu có)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

## Bước 2: Build dự án trên máy local

### 2.1. Build production

Trên máy local của bạn (Windows), mở terminal tại thư mục dự án:

```bash
npm run build
```

Lệnh này sẽ tạo thư mục `build` chứa các file tĩnh đã được tối ưu hóa.

### 2.2. Kiểm tra thư mục build

Đảm bảo thư mục `build` đã được tạo và chứa các file như `index.html`, `static/`, v.v.

## Bước 3: Upload file lên VPS

### Phương án A: Sử dụng SCP (từ Windows)

Mở PowerShell hoặc Command Prompt trên Windows:

```bash
scp -r c:\React\portfolio-project\build username@your-vps-ip:/tmp/
```

### Phương án B: Sử dụng FileZilla hoặc WinSCP

1. Tải và cài đặt [WinSCP](https://winscp.net/) hoặc [FileZilla](https://filezilla-project.org/)
2. Kết nối đến VPS qua SFTP
3. Upload toàn bộ thư mục `build` lên `/tmp/` trên VPS

### Phương án C: Sử dụng Git (khuyến nghị cho CI/CD)

Nếu code đã push lên GitHub:

```bash
# Trên VPS
cd /var/www
sudo git clone https://github.com/NguyenThai11103/portfolio_project.git
cd portfolio_project
sudo apt install nodejs npm -y
sudo npm install
sudo npm run build
```

## Bước 4: Cấu hình Nginx trên VPS

### 4.1. Di chuyển file build đến thư mục web

```bash
# Tạo thư mục cho website
sudo mkdir -p /var/www/portfolio

# Di chuyển file từ /tmp (nếu dùng SCP)
sudo mv /tmp/build/* /var/www/portfolio/

# Hoặc nếu dùng Git
sudo cp -r /var/www/portfolio_project/build/* /var/www/portfolio/

# Phân quyền
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### 4.2. Tạo file cấu hình Nginx

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Thêm nội dung sau (thay `your-domain.com` bằng domain của bạn hoặc IP):

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name your-domain.com www.your-domain.com;
    # Hoặc nếu dùng IP: server_name your-vps-ip;

    root /var/www/portfolio;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 4.3. Kích hoạt site

```bash
# Tạo symbolic link
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Kiểm tra cấu hình
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Bước 5: Cài đặt SSL với Let's Encrypt (Khuyến nghị)

### 5.1. Cài đặt Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 5.2. Lấy SSL certificate

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Làm theo hướng dẫn trên màn hình. Certbot sẽ tự động cấu hình Nginx để sử dụng HTTPS.

### 5.3. Kiểm tra auto-renewal

```bash
sudo certbot renew --dry-run
```

## Bước 6: Kiểm tra website

Mở trình duyệt và truy cập:

- `http://your-domain.com` hoặc `http://your-vps-ip`
- Nếu đã cài SSL: `https://your-domain.com`

## Bước 7: Tự động hóa deployment (Tùy chọn)

### Tạo script deploy tự động

Tạo file `deploy.sh` trên VPS:

```bash
sudo nano /var/www/deploy.sh
```

Nội dung:

```bash
#!/bin/bash

# Pull code mới nhất
cd /var/www/portfolio_project
git pull origin main

# Install dependencies và build
npm install
npm run build

# Copy file build
sudo cp -r build/* /var/www/portfolio/

# Phân quyền
sudo chown -R www-data:www-data /var/www/portfolio

# Reload Nginx
sudo systemctl reload nginx

echo "Deployment completed!"
```

Phân quyền thực thi:

```bash
sudo chmod +x /var/www/deploy.sh
```

Khi cần deploy phiên bản mới, chỉ cần chạy:

```bash
sudo /var/www/deploy.sh
```

## Xử lý sự cố thường gặp

### Lỗi 403 Forbidden

```bash
# Kiểm tra quyền
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### Lỗi 502 Bad Gateway

```bash
# Kiểm tra log
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### React Router không hoạt động (404 khi refresh)

Đảm bảo đã thêm `try_files $uri $uri/ /index.html;` trong cấu hình Nginx.

### Kiểm tra log Nginx

```bash
# Error log
sudo tail -f /var/log/nginx/error.log

# Access log
sudo tail -f /var/log/nginx/access.log
```

## Lưu ý quan trọng

1. **Backup thường xuyên**: Tạo backup cho thư mục `/var/www/portfolio` và cấu hình Nginx
2. **Cập nhật hệ thống**: Chạy `sudo apt update && sudo apt upgrade` định kỳ
3. **Monitor**: Theo dõi tài nguyên VPS (CPU, RAM, disk)
4. **Security**: Đổi port SSH mặc định, disable root login, sử dụng SSH key

## Tài nguyên tham khảo

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
