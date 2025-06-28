import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  service: z.string().min(1, 'Pilih layanan'),
  date: z.string().min(1, 'Pilih tanggal'),
  time: z.string().min(1, 'Pilih waktu'),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const AppointmentForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const services = [
    { value: '', label: 'Pilih layanan' },
    { value: 'poli-umum', label: 'Poli Umum' },
    { value: 'poli-gigi', label: 'Poli Gigi' },
    { value: 'poli-anak', label: 'Poli Anak' },
    { value: 'poli-kebidanan', label: 'Poli Kebidanan' },
    { value: 'laboratorium', label: 'Laboratorium' },
    { value: 'igd', label: 'IGD 24 Jam' },
  ];

  const timeSlots = [
    { value: '', label: 'Pilih waktu' },
    { value: '08:00', label: '08:00' },
    { value: '09:00', label: '09:00' },
    { value: '10:00', label: '10:00' },
    { value: '11:00', label: '11:00' },
    { value: '13:00', label: '13:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
  ];

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Pendaftaran Berhasil!
        </h3>
        <p className="text-green-600 mb-4">
          Terima kasih telah mendaftar. Tim kami akan menghubungi Anda segera.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Daftar Lagi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline w-4 h-4 mr-2" />
            Nama Lengkap
          </label>
          <input
            {...register('name')}
            type="text"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Masukkan nama lengkap"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline w-4 h-4 mr-2" />
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Masukkan email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Telepon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline w-4 h-4 mr-2" />
            Nomor Telepon
          </label>
          <input
            {...register('phone')}
            type="tel"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Masukkan nomor telepon"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Layanan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            🏥 Layanan
          </label>
          <select
            {...register('service')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Tanggal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline w-4 h-4 mr-2" />
            Tanggal Janji
          </label>
          <input
            {...register('date')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Waktu */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="inline w-4 h-4 mr-2" />
            Waktu Janji
          </label>
          <select
            {...register('time')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Pesan */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MessageSquare className="inline w-4 h-4 mr-2" />
          Pesan (Opsional)
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          placeholder="Tulis pesan atau keluhan Anda"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-sky-500 to-teal-500 hover:shadow-lg hover:-translate-y-1'
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Mengirim...
          </div>
        ) : (
          'Kirim Pendaftaran'
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        * Tim kami akan menghubungi Anda untuk konfirmasi janji temu
      </p>
    </form>
  );
};

export default AppointmentForm; 