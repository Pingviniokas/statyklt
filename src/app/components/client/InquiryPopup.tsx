'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

interface InquiryPopupProps {
  isOpen: boolean
  onClose: () => void
}

const projectTypes = [
  'Namo statyba',
  'Buto renovacija',
  'Komercinio objekto statyba',
  'Vidaus apdaila',
  'Fasado darbai',
  'Kita'
]

export const InquiryPopup = ({ isOpen, onClose }: InquiryPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-white shadow-lg z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="p-6 md:p-12">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-light mb-2">Statybos užklausa</h2>
                  <p className="text-sm md:text-base text-gray-600">Užpildykite formą ir mes susisieksime su jumis.</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 transition-colors duration-200 -mr-2"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-base md:text-lg font-medium border-b pb-2">Kontaktinė informacija</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Vardas Pavardė
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                        placeholder="Jūsų vardas ir pavardė"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono numeris
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                        placeholder="+370"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      El. paštas
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                      placeholder="jusu@paštas.lt"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-base md:text-lg font-medium border-b pb-2">Projekto detalės</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                        Projekto tipas
                      </label>
                      <select
                        id="type"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                      >
                        <option value="">Pasirinkite projekto tipą</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Projekto vieta
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                        placeholder="Adresas arba miestas"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                        Projekto plotas (m²)
                      </label>
                      <input
                        type="number"
                        id="area"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                        placeholder="Įveskite plotą"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Preliminarus biudžetas
                      </label>
                      <select
                        id="budget"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                      >
                        <option value="">Pasirinkite biudžeto intervalą</option>
                        <option value="10-30">10,000€ - 30,000€</option>
                        <option value="30-50">30,000€ - 50,000€</option>
                        <option value="50-100">50,000€ - 100,000€</option>
                        <option value="100+">Daugiau nei 100,000€</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Pageidaujamas projekto terminas
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200"
                    >
                      <option value="">Pasirinkite terminą</option>
                      <option value="1-3">1-3 mėnesiai</option>
                      <option value="3-6">3-6 mėnesiai</option>
                      <option value="6-12">6-12 mėnesių</option>
                      <option value="12+">Daugiau nei 12 mėnesių</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                      Papildoma informacija
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors duration-200 resize-none"
                      placeholder="Aprašykite savo projektą detaliau..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 py-4 text-center mt-8"
                >
                  Siųsti užklausą
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 