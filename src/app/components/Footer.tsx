'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'

const footerLinks = {
  company: [
    { name: 'Apie mus', href: '/about' },
    { name: 'Karjera', href: '/career' },
    { name: 'Sertifikatai', href: '/certificates' },
    { name: 'Privatumo politika', href: '/privacy' },
  ],
  services: [
    { name: 'Generalinio rangovo paslaugos', href: '/services#general' },
    { name: 'Bendrastatybiniai darbai', href: '/services#construction' },
    { name: 'Apdailos darbai', href: '/services#finishing' },
    { name: 'Aplinkos tvarkymo darbai', href: '/services#landscaping' },
  ],
  contact: [
    { name: 'Dunojaus g. 16, Vilnius', href: 'https://goo.gl/maps/your-address' },
    { name: '+370 698 89673', href: 'tel:+37069889673' },
    { name: 'dalius@statyklt.lt', href: 'mailto:dalius@statyklt.lt' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
    { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
    { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  ]
}

export const Footer = () => {
  return (
    <footer className="relative bg-white">
      {/* Main Footer */}
      <div className="relative z-10 px-24 pt-24 pb-12 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="block">
              <h2 className="text-2xl font-bold text-gray-900">
                Statyk<span className="text-red-600">LT</span>
              </h2>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nuo 2007 m. teikiame aukštos kokybės statybos paslaugas, 
              užtikrindami profesionalumą ir patikimumą kiekviename projekte.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-current hover:bg-gray-50 transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Įmonė</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Paslaugos</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Kontaktai</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Statyk LT. Visos teisės saugomos.
            </p>
            <div className="flex items-center gap-4">
              <motion.div
                className="text-xs text-gray-500 flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Šiuo metu priimame užsakymus
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 