import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 to-teal-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-sky-500/10 text-sky-600 rounded-full text-sm font-medium">
              🏥 Rumah Sakit Terpercaya
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Pelayanan Kesehatan
              <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                Terbaik untuk Anda
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Memberikan pelayanan kesehatan berkualitas tinggi dengan teknologi modern 
              dan tenaga medis profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Daftar Sekarang
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-sky-500 hover:text-sky-500 transition-all duration-300">
                Tonton Video
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-3xl p-8 text-white text-center">
            <div className="text-6xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-2">RS Sehat Sejahtera</h3>
            <p className="text-sky-100">
              Pelayanan kesehatan terbaik dengan teknologi modern
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 