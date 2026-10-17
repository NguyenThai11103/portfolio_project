# Nguyễn Ngọc Duy Thái - Portfolio

Portfolio cá nhân song ngữ Việt/Anh của Nguyễn Ngọc Duy Thái, Fullstack Developer tập trung vào Web Architecture và Blockchain/Web3. Nội dung nghề nghiệp được đồng bộ từ CV, còn danh mục dự án được tuyển chọn và đối chiếu trực tiếp từ các repository GitHub công khai.

## Công nghệ

- React 19
- Vite 8
- Vitest + Testing Library
- CSS thuần với responsive layout, light/dark theme và reduced-motion support
- Locale context cho nội dung Việt/Anh, lưu lựa chọn vào local storage
- Project grid compact gồm 6 sản phẩm có liên kết source/demo
- GitHub Pages CI/CD

## Chạy local

Yêu cầu Node.js 22.12 trở lên.

```bash
npm install
npm run dev
```

## Kiểm tra

```bash
npm test
npm run build
npm audit
```

## Deploy

Workflow GitHub Actions tại `.github/workflows/deploy.yml` tự động build thư mục `dist` và phát hành lên GitHub Pages khi có thay đổi trên nhánh `master`.

Website: [nguyenthai11103.github.io/portfolio_project](https://nguyenthai11103.github.io/portfolio_project)

GitHub: [github.com/nguyenthai11103](https://github.com/nguyenthai11103)
