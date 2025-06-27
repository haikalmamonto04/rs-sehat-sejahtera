import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Kontak Kami
            </h1>
            <p className="text-xl text-gray-600">
              Hubungi kami untuk informasi lebih lanjut
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-600 text-center">
              Halaman kontak detail akan ditampilkan di sini.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 