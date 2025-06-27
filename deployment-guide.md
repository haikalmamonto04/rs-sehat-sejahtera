# 🚀 Deployment Guide - RS Sehat Sejahtera

## 📋 Prerequisites

Sebelum deploy, pastikan Anda memiliki:
- ✅ GitHub account
- ✅ Node.js & npm terinstall
- ✅ Git terinstall
- ✅ Repository GitHub sudah dibuat

## 🔧 Setup Repository

### 1. Buat Repository GitHub

1. Buka [GitHub.com](https://github.com)
2. Klik "New repository"
3. Isi detail:
   - **Repository name**: `rs-sehat-sejahtera`
   - **Description**: Website Rumah Sakit Sehat Sejahtera
   - **Visibility**: Public (untuk GitHub Pages gratis)
   - ✅ Add README file
   - ✅ Add .gitignore (Node)
   - ✅ Choose a license (MIT)

### 2. Clone Repository

```bash
git clone https://github.com/[username]/rs-sehat-sejahtera.git
cd rs-sehat-sejahtera
```

### 3. Setup Project

```bash
# Install dependencies
npm install

# Test development server
npm run dev

# Build project
npm run build
```

## 🌐 Deploy ke GitHub Pages

### Method 1: Manual Deploy

```bash
# Build project
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

### Method 2: GitHub Actions (Automatic)

1. Push code ke repository
2. GitHub Actions akan otomatis build dan deploy
3. Website akan tersedia di: `https://[username].github.io/rs-sehat-sejahtera`

### Method 3: Manual GitHub Pages Setup

1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `gh-pages` → `/ (root)`
5. Klik **Save**

## 🔧 Configuration

### Update package.json

Ganti `[username]` dengan username GitHub Anda:

```json
{
  "homepage": "https://[username].github.io/rs-sehat-sejahtera",
  "name": "rs-sehat-sejahtera"
}
```

### Update vite.config.ts

```typescript
export default defineConfig({
  base: '/rs-sehat-sejahtera/', // Sesuaikan dengan nama repository
  // ... other config
})
```

## 📱 Custom Domain (Optional)

Jika ingin menggunakan domain custom:

1. Beli domain (GoDaddy, Namecheap, dll)
2. Tambahkan file `CNAME` di folder `public/`:
   ```
   yourdomain.com
   ```
3. Setup DNS records:
   - **Type**: CNAME
   - **Name**: @
   - **Value**: [username].github.io
4. Update GitHub Pages settings:
   - **Custom domain**: yourdomain.com
   - ✅ Enforce HTTPS

## 🔍 Troubleshooting

### Common Issues:

1. **404 Error**
   - Pastikan base path di `vite.config.ts` benar
   - Pastikan repository name sesuai

2. **Build Failed**
   - Cek error di GitHub Actions
   - Pastikan semua dependencies terinstall

3. **Images Not Loading**
   - Pastikan path gambar relatif
   - Gunakan `import` untuk gambar di React

4. **Routing Issues**
   - Tambahkan `404.html` untuk SPA routing
   - Gunakan HashRouter untuk GitHub Pages

### Debug Commands:

```bash
# Check build output
npm run build
ls dist/

# Test locally
npm run preview

# Check for errors
npm run lint
```

## 📊 Performance Optimization

### Before Deploy:

1. **Optimize Images**
   ```bash
   # Install image optimization
   npm install -g imagemin-cli
   
   # Optimize images
   imagemin public/images/* --out-dir=public/images/optimized
   ```

2. **Bundle Analysis**
   ```bash
   # Install bundle analyzer
   npm install --save-dev rollup-plugin-visualizer
   ```

3. **Lighthouse Audit**
   - Buka Chrome DevTools
   - Klik **Lighthouse**
   - Run audit untuk Performance, Accessibility, SEO

## 🔒 Security

### Best Practices:

1. **Environment Variables**
   - Jangan commit `.env` files
   - Gunakan GitHub Secrets untuk sensitive data

2. **Dependencies**
   - Regular `npm audit`
   - Update dependencies secara berkala

3. **HTTPS**
   - GitHub Pages otomatis HTTPS
   - Enforce HTTPS di settings

## 📈 Analytics

### Google Analytics:

1. Buat Google Analytics account
2. Tambahkan tracking code di `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🎯 Post-Deployment Checklist

- ✅ Website accessible di GitHub Pages URL
- ✅ All pages working correctly
- ✅ Images loading properly
- ✅ Forms functional
- ✅ Mobile responsive
- ✅ Performance optimized
- ✅ SEO meta tags added
- ✅ Analytics tracking working
- ✅ Custom domain configured (if applicable)

## 📞 Support

Jika ada masalah:

1. Cek [GitHub Pages documentation](https://pages.github.com/)
2. Cek [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Cek GitHub Actions logs
4. Cek browser console untuk errors

---

**Status**: ✅ Ready for Deployment
**Last Updated**: June 2024 