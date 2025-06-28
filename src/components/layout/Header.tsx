import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=48&h=48&fit=crop&crop=center" 
                alt="RS Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">RSUD Bima</h1>
              <p className="text-sm text-gray-600">Rumah Sakit Terpercaya</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-500">Beranda</Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-500">Tentang</Link>
            <Link to="/services" className="text-gray-700 hover:text-sky-500">Layanan</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-sky-500">Dokter</Link>
            <Link to="/contact" className="text-gray-700 hover:text-sky-500">Kontak</Link>
          </nav>
          
          <Link
            to="/appointment"
            className="bg-gradient-to-r from-sky-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 