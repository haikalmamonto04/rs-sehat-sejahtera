import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=48&h=48&fit=crop&crop=center" 
                  alt="RS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">RS Sehat Sejahtera</h3>
                <p className="text-sm text-gray-300">Rumah Sakit Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-300">
              Memberikan pelayanan kesehatan berkualitas tinggi dengan teknologi modern dan tenaga medis profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Dokter Umum</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Dokter Gigi</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Dokter Anak</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Dokter Kandungan</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Laboratorium</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">Tentang Kami</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Tim Dokter</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-white">Fasilitas</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white">Testimoni</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Kontak</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-sky-400" />
                <span className="text-gray-300">Jl. Kesehatan No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sky-400" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-sky-400" />
                <span className="text-gray-300">info@rssehatsejahtera.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 RS Sehat Sejahtera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 