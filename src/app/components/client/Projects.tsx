'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
}

const projects: Project[] = [
  {
    title: 'Paplaujo g. 3, Vilnius',
    category: 'Daugiabučiai namai',
    image: '/images/services/vaizdas-nuo-pastoliu-daugiabutis.jpg',
    description: 'Modernus daugiabutis namas su požemine automobilių stovėjimo aikštele. Pilna vidaus apdaila, fasado darbai ir teritorijos sutvarkymas.',
    date: '2024'
  },
  {
    title: 'Dunojaus g. 16, Vilnius',
    category: 'Komercinės patalpos',
    image: '/images/services/ofiso-garso-izoliacija-lubose.jpg',
    description: 'Šiuolaikinis biurų pastatas su moderniais inžineriniais sprendimais. A+ energetinės klasės pastatas su išmaniais sprendimais.',
    date: '2023'
  },
  {
    title: 'Modernaus namo statyba',
    category: 'Statyba',
    image: '/images/services/nuosavo-namo-terasa.jpg',
    description: 'Šiuolaikiškas namas su moderniomis technologijomis ir ekologiškais sprendimais.',
    date: '2024'
  },
  {
    title: 'Biuro pastato renovacija',
    category: 'Renovacija',
    image: '/projects/project2.jpg',
    description: 'Kompleksinė biuro pastato renovacija, apimanti energetinį efektyvumą.',
    date: '2023'
  },
  {
    title: 'Pramoninis kompleksas',
    category: 'Pramonė',
    image: '/images/services/tuscias-ofiso-pastato-aukstas-apdaila.jpg',
    description: 'Didelio masto pramoninio komplekso projektavimas ir statyba.',
    date: '2023'
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="relative py-12 md:py-24 bg-white">
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
              Naujausi projektai
            </motion.h2>

            <motion.p 
              className="text-sm md:text-base lg:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mūsų įgyvendinti projektai atspindi kokybę, profesionalumą ir inovatyvius sprendimus.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left Project */}
          <motion.div
            className="relative h-[400px] md:h-[600px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <h3 className="text-xl md:text-2xl text-white font-medium mb-2">{projects[0].title}</h3>
              <p className="text-sm md:text-base text-white/80">{projects[0].description}</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm">
                  {projects[0].category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-8">
            {projects.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.title}
                className="relative h-[200px] md:h-[286px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl text-white font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.description}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="mt-8 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="w-full md:w-auto px-8 py-4 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300">
            Visi projektai
          </button>
        </motion.div>
      </div>
    </section>
  )
} 