import React from 'react';

const Statistics: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Tahun Pengalaman' },
    { number: '50+', label: 'Dokter Spesialis' },
    { number: '1000+', label: 'Pasien Puas' },
    { number: '24/7', label: 'Pelayanan' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-sky-500 to-teal-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 