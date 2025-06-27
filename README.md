# 🏥 RS Sehat Sejahtera - Website Rumah Sakit

Website modern untuk Rumah Sakit Sehat Sejahtera dengan desain responsive dan fitur interaktif.

## 🌟 Fitur Utama

- **Responsive Design** - Optimal di semua device
- **Modern UI/UX** - Desain clean dan profesional
- **Interactive Forms** - Form pendaftaran dan booking
- **Smooth Animations** - Animasi scroll dan hover
- **Fast Loading** - Optimized performance
- **SEO Friendly** - Meta tags dan structured data

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion

## 📱 Pages

1. **Home** - Landing page dengan semua sections
2. **About** - Tentang rumah sakit
3. **Services** - Layanan medis detail
4. **Doctors** - Profil dokter
5. **Facilities** - Fasilitas rumah sakit
6. **Contact** - Informasi kontak & lokasi
7. **Appointment** - Booking jadwal

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/[username]/rs-sehat-sejahtera.git

# Masuk ke direktori
cd rs-sehat-sejahtera

# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## 📦 Scripts

- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run preview` - Preview build
- `npm run lint` - ESLint check
- `npm run deploy` - Deploy ke GitHub Pages

## 🎨 Design System

### Colors
- **Primary**: #0ea5e9 (Sky Blue)
- **Secondary**: #14b8a6 (Teal)
- **Accent**: #f59e0b (Amber)
- **Text**: #1f2937 (Gray 800)
- **Background**: #f8fafc (Gray 50)

### Typography
- **Font**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold dengan gradient effects
- **Body**: Regular dengan readable line-height

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

Website ini di-deploy menggunakan GitHub Pages.

**Live URL**: https://[username].github.io/rs-sehat-sejahtera

### Deploy Manual

```bash
# Build project
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── sections/        # Hero, Services, Doctors, etc.
│   ├── ui/              # Reusable UI components
│   └── forms/           # Form components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── data/                # Static data
└── styles/              # Global styles
```

## 🔧 Configuration

### Vite Config
- Base path: `/rs-sehat-sejahtera/`
- Build output: `dist/`
- Source maps enabled

### Tailwind Config
- Custom color palette
- Responsive breakpoints
- Component utilities

## 📝 Development Notes

- Menggunakan TypeScript untuk type safety
- ESLint untuk code quality
- Prettier untuk code formatting
- Git hooks untuk pre-commit checks

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@username](https://github.com/username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from modern healthcare websites
- Icons from Lucide React
- UI components built with Tailwind CSS

---

**Status**: ✅ Production Ready
**Last Updated**: June 2024
**Version**: 1.0.0 