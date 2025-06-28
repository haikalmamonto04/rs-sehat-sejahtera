import React from 'react';
import AppointmentForm from '../components/forms/AppointmentForm';

const Appointment: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Daftar Sekarang
            </h1>
            <p className="text-xl text-gray-600">
              Buat janji temu dengan dokter kami
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment; 