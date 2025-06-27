import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Tentang Kami
            </h1>
            <p className="text-xl text-gray-600">
              RS Sehat Sejahtera - Rumah Sakit Terpercaya
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Visi Kami
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Menjadi rumah sakit terdepan dalam memberikan pelayanan kesehatan berkualitas tinggi 
                dengan teknologi modern dan tenaga medis profesional yang siap melayani masyarakat 
                Indonesia.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800">
                Misi Kami
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memberikan pelayanan kesehatan yang berkualitas dan terjangkau
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menggunakan teknologi medis terbaru untuk diagnosis dan pengobatan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memiliki tim dokter dan perawat yang kompeten dan berpengalaman
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memberikan pelayanan 24 jam untuk keadaan darurat
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-3xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">10+ Tahun Pengalaman</h3>
              <p className="text-sky-100">
                Melayani ribuan pasien dengan dedikasi tinggi dan komitmen untuk kesehatan masyarakat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 