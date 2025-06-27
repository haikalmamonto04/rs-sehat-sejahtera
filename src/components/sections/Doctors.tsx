import React from 'react';

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Dokter Umum',
      experience: '10 tahun',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dokter Gigi',
      experience: '8 tahun',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dokter Anak',
      experience: '12 tahun',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Dokter Kandungan',
      experience: '15 tahun',
      image: '👨‍⚕️'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dokter Spesialis Kami
          </h2>
          <p className="text-xl text-gray-600">
            Tim dokter berpengalaman dan profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">{doctor.image}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {doctor.name}
              </h3>
              <p className="text-sky-500 font-medium mb-2">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 text-sm">
                {doctor.experience} pengalaman
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors; 