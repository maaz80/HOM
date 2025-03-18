// File: src/components/Services.jsx
import { Briefcase, Code, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Consulting',
    desc: 'Expert business analysis, growth strategies, and market positioning to elevate your brand.',
    icon: Briefcase
  },
  {
    title: 'Development',
    desc: 'High-performance websites, scalable backend systems, and mobile applications built to perform.',
    icon: Code
  },
  {
    title: 'Marketing',
    desc: '360° marketing plans including SEO, paid ads, content marketing, and branding campaigns.',
    icon: Megaphone
  }
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white overflow-hidden" id="services">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-ping -z-10"></div>

      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg px-8 py-10 text-center hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-20 h-20 flex items-center justify-center mx-auto bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full shadow-lg mb-6">
              <service.icon size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
