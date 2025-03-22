import { motion } from 'framer-motion'

const stats = [
  { number: '2007', label: 'Įkurta' },
  { number: '30+', label: 'Darbuotojų' },
  { number: '6M+', label: 'EUR Projektų vertė' },
  { number: '100+', label: 'Įgyvendintų projektų' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const About = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Apie mus
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            UAB "STATYK LT" dirba iniciatyvūs ir nemažą patirtį turintys atestuoti specialistai. 
            Sukaupta patirtis, kokybiškų ir savalaikių darbų atlikimo tradicijos bei pagarba 
            klientams užtikrina kokybišką darbą viso projekto eigoje.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Mūsų patirtis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nuo įmonės veiklos pradžios mes pasirašėme statybos rangos sutarčių už daugiau nei 
              6 000 000 eurų daugiausia darbams Vilniuje. Mūsų projektų sėkmę užtikrina keletas 
              veiksnių: užsakovo lūkesčių įgyvendinimas, tinkama statomų objektų priežiūra ir 
              kvalifikuoti darbuotojai.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Kvalifikacija</h3>
            <p className="text-gray-600 dark:text-gray-300">
              2008 m. įmonė gavo Lietuvos Respublikos aplinkos ministerijos atestatą, suteikiantį 
              teisę vykdyti ypatingų statinių statybos darbus. Mūsų komandoje dirba kvalifikuoti 
              specialistai, turintys daugiametę patirtį vykdant įvairius projektus.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 