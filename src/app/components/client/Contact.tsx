'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMapPin className="w-6 h-6" />,
    label: 'Adresas',
    value: 'Dunojaus g. 16, Vilnius'
  },
  {
    icon: <FiPhone className="w-6 h-6" />,
    label: 'Telefonas',
    value: '+370 600 00000'
  },
  {
    icon: <FiMail className="w-6 h-6" />,
    label: 'El. paštas',
    value: 'info@statyklt.lt'
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    label: 'Darbo laikas',
    value: 'I-V: 8:00 - 17:00'
  }
]

export const Contact = () => {
  return (
    <section id="contact" className="relative py-12 md:py-24 bg-white">
      <div className="relative z-10 px-4 md:px-24">
        <motion.div 
          className="relative flex flex-col md:flex-row mb-12 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:block w-0.5 h-28 bg-black/20 mr-12 shrink-0" />
          <div className="w-full">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Susisiekite
            </motion.h2>

            <motion.p 
              className="text-sm md:text-base lg:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turite klausimų? Susisiekite su mumis ir mes mielai į juos atsakysime.
            </motion.p>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-2 gap-3 md:gap-4 h-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="bg-gray-50 p-4 md:p-5 flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-gray-400 mt-0.5">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-1">
                    {info.label}
                  </h3>
                  <p className="text-sm md:text-base font-medium">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-medium text-gray-700 mb-1">
                    Vardas Pavardė
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors duration-200"
                    placeholder="Jūsų vardas ir pavardė"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-medium text-gray-700 mb-1">
                    El. paštas
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors duration-200"
                    placeholder="jusu@paštas.lt"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-medium text-gray-700 mb-1">
                  Žinutė
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors duration-200 resize-none"
                  placeholder="Jūsų žinutė..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full md:w-auto px-8 py-3 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Siųsti žinutę
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-8 md:mt-12 h-[300px] md:h-[400px] bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.8876011933244!2d25.2985583!3d54.6797799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941d3a17990d%3A0x2a0a0f0f0f0f0f0f!2sDunojaus%20g.%2016%2C%20Vilnius!5e0!3m2!1slt!2slt!4v1621436289012!5m2!1slt!2slt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
} 