import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Paplaujo g. 3, Vilnius',
    category: 'Daugiabučiai namai',
    image: '/projects/paplaujis.jpg',
    description: 'Modernus daugiabutis namas su požemine automobilių stovėjimo aikštele.',
  },
  {
    title: 'Dunojaus g. 16, Vilnius',
    category: 'Komerciniai pastatai',
    image: '/projects/dunojus.jpg',
    description: 'Šiuolaikinis biurų pastatas su moderniais inžineriniais sprendimais.',
  },
  // Add more projects here
]

export const Projects = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Mūsų projektai
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Per ilgus metus sėkmingai įgyvendinti projektai, kurie atspindi mūsų profesionalumą ir patirtį.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-red-600 dark:text-red-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.05 }}
              >
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Plačiau
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
            Visi projektai
          </button>
        </motion.div>
      </div>
    </section>
  )
} 