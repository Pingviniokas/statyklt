import { motion } from 'framer-motion'

const services = [
  {
    title: 'Generalinio rangovo paslaugos',
    description: 'Pilnas statybos projekto valdymas nuo pradžios iki pabaigos.',
    icon: '🏗️',
  },
  {
    title: 'Bendrastatybiniai darbai',
    description: 'Aukštos kokybės statybos darbai, atitinkantys visus standartus.',
    icon: '🏢',
  },
  {
    title: 'Apdailos darbai',
    description: 'Profesionalūs vidaus ir išorės apdailos darbai.',
    icon: '🎨',
  },
  {
    title: 'Aplinkos tvarkymo darbai',
    description: 'Teritorijos planavimas ir aplinkos tvarkymas.',
    icon: '🌳',
  },
]

const subServices = [
  'Vidaus apdailos darbai',
  'Dažymas',
  'Tinkavimas',
  'Plytelių klijavimas',
  'Grindų dėjimas',
  'Elektros instaliacija',
  'Santechnikos darbai',
  'Stogų įrengimas',
  'Terasų įrengimas',
  'Lauko inžinerinių tinklų tiesimas',
]

export const Services = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Mūsų paslaugos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Teikiame platų paslaugų spektrą: nuo dalinių apdailos darbų iki generalinio rangovo funkcijų.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">
            Papildomos paslaugos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subServices.map((service, index) => (
              <motion.div
                key={service}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-red-50 dark:hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="text-gray-700 dark:text-gray-300">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 