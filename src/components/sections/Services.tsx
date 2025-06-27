import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🩺',
      title: 'Poli Umum',
      description: 'Pelayanan kesehatan umum untuk semua usia.'
    },
    {
      icon: '🦷',
      title: 'Poli Gigi',
      description: 'Perawatan gigi dan mulut dengan teknologi modern.'
    },
    {
      icon: '👶',
      title: 'Poli Anak',
      description: 'Pelayanan kesehatan khusus anak.'
    },
    {
      icon: '👩‍⚕️',
      title: 'Poli Kebidanan',
      description: 'Pelayanan kesehatan ibu hamil dan kandungan.'
    },
    {
      icon: '🔬',
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium dengan peralatan modern.'
    },
    {
      icon: '🚑',
      title: 'IGD 24 Jam',
      description: 'Pelayanan gawat darurat 24 jam.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600">
            Berbagai layanan kesehatan berkualitas tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 