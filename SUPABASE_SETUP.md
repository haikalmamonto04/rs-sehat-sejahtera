# 🚀 Setup Supabase untuk RSUD Bima

Panduan lengkap untuk setup database dan authentication menggunakan Supabase.

## 📋 Daftar Isi

1. [Membuat Akun Supabase](#membuat-akun-supabase)
2. [Setup Project](#setup-project)
3. [Setup Database](#setup-database)
4. [Setup Authentication](#setup-authentication)
5. [Setup Environment Variables](#setup-environment-variables)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

## 🆕 Membuat Akun Supabase

### Langkah 1: Sign Up
1. Kunjungi [supabase.com](https://supabase.com)
2. Klik **"Start your project"**
3. Sign up dengan:
   - **GitHub** (recommended)
   - **Email** (alternatif)

### Langkah 2: Verifikasi Email
- Cek email Anda dan klik link verifikasi
- Login ke Supabase Dashboard

## 🏗️ Setup Project

### Langkah 1: Buat Project Baru
1. Di Supabase Dashboard, klik **"New Project"**
2. Isi form:
   - **Name**: `rsud-bima`
   - **Database Password**: Buat password kuat (simpan!)
   - **Region**: `Southeast Asia (Singapore)` (terdekat)
3. Klik **"Create new project"**

### Langkah 2: Tunggu Setup
- Proses setup memakan waktu 2-3 menit
- Status akan berubah dari "Setting up" ke "Ready"

## 🗄️ Setup Database

### Langkah 1: Buka SQL Editor
1. Di project dashboard, klik **"SQL Editor"** di sidebar
2. Klik **"New query"**

### Langkah 2: Jalankan Script Database
1. Copy seluruh isi file `database-setup.sql`
2. Paste ke SQL Editor
3. Klik **"Run"**

### Langkah 3: Verifikasi Tables
1. Buka **"Table Editor"** di sidebar
2. Pastikan tables berikut sudah terbuat:
   - `profiles`
   - `appointments`
   - `services`
   - `doctors`
   - `facilities`
   - `testimonials`

## 🔐 Setup Authentication

### Langkah 1: Buka Authentication Settings
1. Di sidebar, klik **"Authentication"**
2. Klik **"Settings"**

### Langkah 2: Setup Site URL
1. Di **"Site URL"**, masukkan:
   ```
   https://your-username.github.io/Projek1
   ```
2. Ganti `your-username` dengan username GitHub Anda

### Langkah 3: Setup Redirect URLs
1. Di **"Redirect URLs"**, tambahkan:
   ```
   https://your-username.github.io/Projek1/login
   https://your-username.github.io/Projek1/register
   https://your-username.github.io/Projek1/reset-password
   https://your-username.github.io/Projek1
   ```

### Langkah 4: Email Settings
1. **Enable Email confirmations**: ✅ ON
2. **Enable Email change confirmations**: ✅ ON
3. **Enable Secure email change**: ✅ ON

### Langkah 5: Social Auth (Optional)
1. **Google OAuth**:
   - Klik **"Enable"**
   - Masukkan Google Client ID dan Secret
2. **Facebook OAuth**:
   - Klik **"Enable"**
   - Masukkan Facebook App ID dan Secret

## 🔧 Setup Environment Variables

### Langkah 1: Dapatkan API Keys
1. Di sidebar, klik **"Settings"**
2. Klik **"API"**
3. Copy:
   - **Project URL**
   - **anon public** key

### Langkah 2: Buat File .env.local
1. Di root project, buat file `.env.local`
2. Isi dengan:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APP_NAME=RSUD Bima
VITE_APP_URL=https://your-username.github.io/Projek1
```

### Langkah 3: Ganti Values
- Ganti `your-project-id` dengan Project ID dari Supabase
- Ganti `your-anon-key` dengan anon public key
- Ganti `your-username` dengan username GitHub Anda

## 🧪 Testing

### Langkah 1: Test Local Development
```bash
npm run dev
```

### Langkah 2: Test Registration
1. Buka `http://localhost:5173/register`
2. Isi form registrasi
3. Cek email untuk konfirmasi
4. Verifikasi di Supabase Dashboard

### Langkah 3: Test Login
1. Buka `http://localhost:5173/login`
2. Login dengan akun yang baru dibuat
3. Pastikan redirect ke homepage

### Langkah 4: Test Database
1. Di Supabase Dashboard, buka **"Table Editor"**
2. Buka table `profiles`
3. Pastikan data user baru muncul

## 🚀 Deployment

### Langkah 1: Build Project
```bash
npm run build
```

### Langkah 2: Deploy
```bash
npm run deploy
```

### Langkah 3: Update Supabase Settings
1. Di Supabase Dashboard, buka **"Authentication > Settings"**
2. Update **"Site URL"** ke URL GitHub Pages Anda
3. Update **"Redirect URLs"** dengan URL GitHub Pages

## 🔍 Troubleshooting

### Error: "Invalid API key"
- Pastikan `VITE_SUPABASE_ANON_KEY` benar
- Restart development server

### Error: "Email not confirmed"
- Cek folder spam
- Resend confirmation email
- Pastikan email settings di Supabase aktif

### Error: "Invalid redirect URL"
- Pastikan redirect URLs di Supabase sesuai dengan domain Anda
- Untuk local development: `http://localhost:5173`
- Untuk production: `https://your-username.github.io/Projek1`

### Database tidak ter-update
- Pastikan RLS policies sudah benar
- Cek console browser untuk error
- Pastikan user sudah login

### CORS Error
- Pastikan domain Anda sudah ditambahkan ke allowed origins di Supabase
- Untuk local: `http://localhost:5173`
- Untuk production: `https://your-username.github.io`

## 📊 Monitoring

### Supabase Dashboard
1. **Authentication > Users**: Lihat user yang terdaftar
2. **Table Editor**: Monitor data di database
3. **Logs**: Lihat error dan activity logs

### Browser Developer Tools
1. **Console**: Lihat error JavaScript
2. **Network**: Monitor API calls
3. **Application**: Cek localStorage untuk session

## 🔒 Security Best Practices

### Environment Variables
- ✅ Jangan commit `.env.local` ke Git
- ✅ Gunakan `.env.example` untuk template
- ✅ Rotate API keys secara berkala

### Database Security
- ✅ RLS (Row Level Security) sudah aktif
- ✅ Policies sudah dikonfigurasi
- ✅ User permissions sudah dibatasi

### Authentication
- ✅ Email verification aktif
- ✅ Password requirements kuat
- ✅ Session management aman

## 📞 Support

Jika mengalami masalah:

1. **Cek Documentation**: [supabase.com/docs](https://supabase.com/docs)
2. **Community**: [github.com/supabase/supabase/discussions](https://github.com/supabase/supabase/discussions)
3. **Discord**: [discord.supabase.com](https://discord.supabase.com)

## 🎉 Selamat!

Database dan authentication RSUD Bima sudah siap digunakan! 

**Next Steps:**
- Test semua fitur authentication
- Customize UI sesuai kebutuhan
- Deploy ke production
- Monitor performance dan security

---

**RSUD Bima** - Database Online Siap Pakai! 🏥✨ 