'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  location: string
  image?: string
}

type ProjectsByYear = {
  [key: number]: Project[]
}

const projects: ProjectsByYear = {
  2020: [
    { title: 'Apdailos darbai', location: 'Ceikinių g. 15, Vilnius' },
    { title: 'Apdailos darbai', location: 'Raitininkų g. 4, Vilnius' },
    { title: 'Biurų įrengimas', location: 'verslo namai PAUPYS, Aukštaičių g. 2, Vilnius' },
    { title: 'Biurų įrengimas', location: 'verslo centras S7 3 etapas, Saltoniškių g. 7, Vilnius' },
  ],
  2019: [
    { title: 'Biurų įrengimas', location: 'verslo centras Dueto II, Spaudos g. 10, Vilnius' },
    { title: 'Apdailos darbai', location: 'Fizikų g. 18, Vilnius' },
    { title: 'Biurų įrengimas', location: 'verslo centras S7 2 etapas, Saltoniškių g. 7, Vilnius' },
    { title: 'Radison BLUE viešbučio patalpų įrengimas', location: 'Konstitucijos pr. 20, Vilnius' },
  ],
  2018: [
    { title: 'Biurų įrengimas', location: 'verslo centras 3 Burės, Giedraičių g. 3, Vilnius' },
    { title: 'IBIS viešbučio patalpų įrengimas', location: 'Ceikinių g. 3, Vilnius' },
    { title: 'Biurų įrengimas', location: 'verslo centras S7 1 etapas, Saltoniškių g. 7, Vilnius' },
    { title: 'Maxima biurų įrengimas', location: 'Naugarduko g. 84' },
  ],
  2017: [
    { title: 'Biurų įrengimas', location: 'verslo centre Narbutas, T. Narbuto g. 5, Vilnius' },
    { title: 'Sapiegos verslo centro įrengimas', location: 'Antakalnio g. 17, Vilnius', image: '/projects/Antakalnio-g.-17-Vilnius_1.jpg' },
    { title: 'Biurų įrengimas', location: 'verslo centre K11, Kareivių g. 11, Vilnius' },
    { title: 'LIDL parduotuvės įrengimas', location: 'K. Baršausko g. 66, Kaunas' },
  ],
  2016: [
    { title: 'Biurų įrengimas', location: 'verslo centre Ž135, Žalgirio g. 135, Vilnius' },
    { title: 'Biurų įrengimas', location: 'verslo centre Technopolis, J. Balčikonio g. 9, Vilnius' },
    { title: 'Apdailos darbai', location: 'Krokuvos g. 73, Vilnius' },
    { title: 'Biurų įrengimas', location: 'verslo centre Dueto I, Spaudos g. 8, Vilnius' },
    { title: 'IKI parduotuvės įrengimas', location: 'Žirmūnų g. 145, Vilnius' },
  ],
  2015: [
    { title: 'Biurų įrengimas', location: 'verslo centre L3, Laisvės pr. 3, Vilnius', image: '/projects/L3-Laisvės-pr.3-Vilnius.png' },
    { title: 'Biurų įrengimas', location: 'Pilies g. 16, Vilnius', image: '/projects/Pilies-g.16-Vilnius_1.jpg' },
    { title: 'Gyvenamųjų patalpų įrengimas', location: 'Žirmūnų g. 1K, Vilnius', image: '/projects/Žirmūnų-g.1K-Vilnius.jpg' },
    { title: 'Apdailos darbai', location: 'Kražių g. 9, Vilnius', image: '/projects/Kražių-g.9-Vilnius.jpg' },
    { title: 'Biurų įrengimas', location: 'Verslo centras Valančiaus g. 1A, Vilnius', image: '/projects/Valančiaus-g.-1A-Vilnius.jpg' },
    { title: 'Biurų įrengimas', location: 'buvusios Sapiegos ligoninės pastatuose, Antakalnio g. 17, Vilnius', image: '/projects/Antakalnio-g.-17-Vilnius_2.jpg' },
    { title: 'Gyvenamųjų patalpų įrengimas', location: 'Užupio g. 15, Vilnius' },
    { title: 'Lietuvos policijos antiteroristinių operacijų rinktinės "ARAS" patalpų įrengimas', location: 'M. K. Paco g. 4, Vilnius' },
  ],
  2014: [
    { title: 'Intermodalinis terminalas', location: 'Terminalo g. 8, Vilnius', image: '/projects/Terminalo-g.8-Vilnius.jpg' },
    { title: 'Biurų įrengimas', location: 'verslo centre L3, Laisvės pr. 3, Vilnius', image: '/projects/L3-Laisvės-pr.3-Vilnius.png' },
    { title: 'Biurų įrengimas', location: 'Smolensko g. 10, Vilnius', image: '/projects/Smolensko-g.10-Vilnius_1.jpg' },
    { title: 'Biuro įrengimas', location: 'Vingrių g. 19, Vilnius' },
    { title: 'Fasado remontas', location: 'Žygio g.48, Vilnius' },
  ],
  2013: [
    { title: 'Biurų įrengimas', location: 'Smolensko g. 10, Vilnius', image: '/projects/Smolensko-g.10-Vilnius_2.jpg' },
    { title: 'Biurų įrengimas', location: 'verslo centre L3, Laisvės pr. 3, Vilnius', image: '/projects/L3-Laisvės-pr.3-Vilnius.png' },
    { title: 'Vidaus bendrastatybiniai ir apdailos darbai', location: 'Paplaujos g. 3, Vilnius', image: '/projects/Paplaujo-g.3-Vilnius-_1.jpg' },
  ],
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Mūsų projektai
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Peržiūrėkite mūsų įgyvendintus projektus per pastaruosius metus
          </p>
        </motion.div>

        {Object.entries(projects).reverse().map(([year, yearProjects]) => (
          <div key={year} className="mb-16">
            <motion.h2
              className="text-3xl font-bold mb-8 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {year} metų stambiausi projektai
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yearProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {project.image ? (
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={`${project.title} ${project.location}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400 dark:text-gray-500">Nuotrauka ruošiama</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 