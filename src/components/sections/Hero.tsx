import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 to-teal-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-sky-500/10 text-sky-600 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              🏥 Rumah Sakit Terpercaya
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Pelayanan Kesehatan
              <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                Terbaik untuk Anda
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Memberikan pelayanan kesehatan berkualitas tinggi dengan teknologi modern 
              dan tenaga medis profesional.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Daftar Sekarang
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-sky-500 hover:text-sky-500 transition-all duration-300">
                Tonton Video
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-3xl p-8 text-white text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop&crop=center" 
                  alt="RS Sehat Sejahtera Logo"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">RSUD Bima</h3>
              <p className="text-sky-100">
                Pelayanan kesehatan terbaik dengan teknologi modern
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 