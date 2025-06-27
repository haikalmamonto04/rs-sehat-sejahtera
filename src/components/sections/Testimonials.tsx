import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Wilson',
      role: 'Pasien',
      content: 'Pelayanan sangat memuaskan, dokter ramah dan profesional.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Pasien',
      content: 'Fasilitas lengkap dan modern, sangat nyaman untuk berobat.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Pasien',
      content: 'Tim medis sangat kompeten dan memberikan perawatan terbaik.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Testimoni Pasien
          </h2>
          <p className="text-xl text-gray-600">
            Apa kata mereka tentang kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 