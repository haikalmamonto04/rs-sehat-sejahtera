# RSUD Bima - Website Rumah Sakit

Website resmi Rumah Sakit Umum Daerah (RSUD) Bima dengan sistem autentikasi lengkap.

## 🏥 Tentang Proyek

Website ini dibangun untuk RSUD Bima dengan fitur-fitur modern termasuk:
- **Sistem Autentikasi Lengkap** (Login, Register, Lupa Password, Reset Password)
- **Database Online** menggunakan Supabase
- **UI/UX Modern** dengan Tailwind CSS
- **Responsive Design** untuk semua perangkat
- **Deployment Otomatis** ke GitHub Pages

## 🚀 Fitur Utama

### 🔐 Sistem Autentikasi
- ✅ Login dengan email & password
- ✅ Register akun baru
- ✅ Lupa password dengan email reset
- ✅ Reset password dengan token
- ✅ User profile management
- ✅ Session management
- ✅ Social login (Google, Facebook)

### 🎨 UI/UX Modern
- ✅ Design system yang konsisten
- ✅ Animasi dan transisi smooth
- ✅ Form validation real-time
- ✅ Password strength indicator
- ✅ Loading states
- ✅ Error handling yang user-friendly

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet dan desktop optimized
- ✅ Touch-friendly interface
- ✅ Cross-browser compatibility

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 📋 Prerequisites

Sebelum menjalankan proyek ini, pastikan Anda memiliki:

- Node.js (versi 16 atau lebih baru)
- npm atau yarn
- Akun Supabase (gratis)

## ⚙️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/your-username/Projek1.git
cd Projek1
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Supabase Database

#### A. Buat Akun Supabase
1. Kunjungi [supabase.com](https://supabase.com)
2. Sign up dengan GitHub atau email
3. Buat project baru

#### B. Setup Database Tables
Jalankan SQL berikut di Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, phone)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'phone');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

#### C. Setup Authentication
1. Di Supabase Dashboard, buka **Authentication > Settings**
2. Aktifkan **Email confirmations**
3. Setup **Site URL** ke `https://your-username.github.io/Projek1`
4. Setup **Redirect URLs**:
   - `https://your-username.github.io/Projek1/login`
   - `https://your-username.github.io/Projek1/register`
   - `https://your-username.github.io/Projek1/reset-password`

### 4. Environment Variables
Buat file `.env.local` di root project:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APP_NAME=RSUD Bima
VITE_APP_URL=https://your-username.github.io/Projek1
```

### 5. Run Development Server
```bash
npm run dev
```

Website akan berjalan di `http://localhost:5173`

## 🚀 Deployment

### Deploy ke GitHub Pages

1. **Build Project**
```bash
npm run build
```

2. **Deploy**
```bash
npm run deploy
```

3. **Setup GitHub Pages**
- Buka repository di GitHub
- Settings > Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

Website akan live di: `https://your-username.github.io/Projek1`

## 📁 Struktur Project

```
src/
├── components/
│   ├── forms/          # Form components
│   ├── layout/         # Header, Footer
│   ├── sections/       # Page sections
│   └── ui/            # Reusable UI components
├── contexts/          # React contexts
├── hooks/             # Custom hooks
├── lib/               # External libraries config
├── pages/             # Page components
├── styles/            # Global styles
├── types/             # TypeScript types
└── utils/             # Utility functions
```

## 🔧 Konfigurasi Database

### Mengapa Tidak Menggunakan XAMPP?

**XAMPP hanya berjalan di laptop lokal** dan tidak bisa diakses dari internet. Untuk website yang di-deploy, kita membutuhkan database online.

### Keuntungan Supabase:
- ✅ **Gratis** untuk penggunaan dasar
- ✅ **Database online** - bisa diakses dari mana saja
- ✅ **Authentication built-in**
- ✅ **Real-time subscriptions**
- ✅ **Auto-scaling**
- ✅ **Backup otomatis**
- ✅ **Security features**

### Alternatif Database Online:
- **Firebase** (Google) - NoSQL
- **PlanetScale** - MySQL
- **Railway** - PostgreSQL/MySQL
- **Vercel** - PostgreSQL

## 🔐 Security Features

- ✅ **Row Level Security (RLS)** di Supabase
- ✅ **JWT tokens** untuk authentication
- ✅ **Password hashing** otomatis
- ✅ **Email verification**
- ✅ **Rate limiting**
- ✅ **CORS protection**

## 📱 Pages & Routes

- `/` - Homepage
- `/login` - Login page
- `/register` - Register page
- `/forgot-password` - Forgot password
- `/reset-password` - Reset password
- `/about` - About page
- `/services` - Services page
- `/doctors` - Doctors page
- `/facilities` - Facilities page
- `/contact` - Contact page
- `/appointment` - Appointment page

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Teal (#14b8a6)
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#eab308)
- **Error**: Red (#ef4444)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weight 700
- **Body**: Font weight 400

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

- **Email**: admin@rsudbima.com
- **Phone**: +62 123 456 789
- **Address**: Jl. Soekarno-Hatta, Bima, NTB

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) untuk database dan authentication
- [Tailwind CSS](https://tailwindcss.com) untuk styling
- [React](https://reactjs.org) untuk framework
- [Vite](https://vitejs.dev) untuk build tool

---

**RSUD Bima** - Melayani dengan Sepenuh Hati ❤️ 