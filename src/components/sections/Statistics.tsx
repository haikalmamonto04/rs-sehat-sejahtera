import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Statistics: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: '10+', label: 'Tahun Pengalaman' },
    { number: '50+', label: 'Dokter Spesialis' },
    { number: '1000+', label: 'Pasien Puas' },
    { number: '24/7', label: 'Pelayanan' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-sky-500 to-teal-500" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-white"
              variants={itemVariants}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics; 