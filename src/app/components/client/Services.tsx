'use client'

import { motion, useTransform, useScroll, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const mainServices = [
  {
    title: 'Generalinio rangovo paslaugos',
    description: 'Pilnas statybos projekto valdymas nuo pradžios iki pabaigos.',
    image: '/images/services/daugiabutis-kranas-gipso-kelimas.jpg',
  },
  {
    title: 'Bendrastatybiniai darbai',
    description: 'Aukštos kokybės statybos darbai, atitinkantys visus standartus.',
    image: '/images/services/vaizdas-nuo-pastoliu-daugiabutis.jpg',
  },
  {
    title: 'Apdailos darbai',
    description: 'Profesionalūs vidaus ir išorės apdailos darbai.',
    image: '/images/services/gipso-apdaila.jpg',
  },
  {
    title: 'Griovimo darbai',
    description: 'Profesionalus senų konstrukcijų demontavimas ir atliekų tvarkymas.',
    image: '/images/services/buto-grindu-griovimas-parketo-atliekos.jpg',
  },
  {
    title: 'Vonios kambarių įrengimas',
    description: 'Modernių vonios kambarių įrengimas su didelio formato plytelėmis.',
    image: '/images/services/prabangus-vonios-kambarys-didelio-formato-plytelemis.jpg',
  },
  {
    title: 'Terasų įrengimas',
    description: 'Modernių terasų projektavimas ir įrengimas.',
    image: '/images/services/nuosavo-namo-terasa.jpg',
  },
  {
    title: 'Lubų įrengimas',
    description: 'Profesionalus lubų montavimas ir garso izoliacija.',
    image: '/images/services/ofiso-garso-izoliacija-lubose.jpg',
  },
  {
    title: 'Automatizuotas dažymas',
    description: 'Kokybiškas ir efektyvus dažymas su modernia įranga.',
    image: '/images/services/automatizuotas-dazymas.jpg',
  },
  {
    title: 'Sienų šlifavimas',
    description: 'Preciziškas sienų paruošimas dažymui.',
    image: '/images/services/sienos-slifavimas.jpg',
  },
  {
    title: 'Lubų šlifavimas',
    description: 'Kokybiškas lubų paruošimas tolimesniems darbams.',
    image: '/images/services/lubu-slifavimas.jpg',
  },
  {
    title: 'Statybos projektų vadyba',
    description: 'Profesionalus statybos darbų organizavimas ir priežiūra.',
    image: '/images/services/darbu-vadovas.jpg',
  },
  {
    title: 'Medžiagų tiekimas',
    description: 'Efektyvus statybinių medžiagų tiekimas į statybos objektus.',
    image: '/images/services/medziagu-kelimas-su-manitou-per-balkona.jpg',
  },
  {
    title: 'Komercinių patalpų įrengimas',
    description: 'Pilnas biurų ir komercinių patalpų įrengimas.',
    image: '/images/services/tuscias-ofiso-pastato-aukstas-apdaila.jpg',
  },
  {
    title: 'Atliekų tvarkymas',
    description: 'Operatyvus statybinių atliekų išvežimas ir utilizavimas.',
    image: '/images/services/statybiniu-atlieku-konteineris.jpg',
  }
]

export const Services = () => {
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const slideWidth = 400 // Width of each slide in pixels
  const slidesToShow = 3 // Number of slides to show at once
  const duplicatedServices = [...mainServices, ...mainServices, ...mainServices] // Triple duplicate for smoother infinite effect

  const sliderPosition = useMotionValue(0)

  useEffect(() => {
    let animationId: number
    let velocity = 1 // Pixels per frame
    
    const animate = () => {
      if (!isDragging) {
        const current = sliderPosition.get()
        const newPosition = current - velocity
        // Reset position when we've scrolled through all slides once
        if (Math.abs(newPosition) >= mainServices.length * slideWidth) {
          sliderPosition.set(0)
        } else {
          sliderPosition.set(newPosition)
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isDragging, mainServices.length, slideWidth])

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false)
    // Update slider position based on drag
    const current = sliderPosition.get()
    const newPosition = current + info.offset.x
    // Keep position within bounds
    if (newPosition > 0) {
      sliderPosition.set(0)
    } else if (Math.abs(newPosition) >= mainServices.length * slideWidth) {
      sliderPosition.set(0)
    } else {
      sliderPosition.set(newPosition)
    }
  }

  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="relative z-10 px-24">
        <motion.div 
          className="relative flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-0.5 h-28 bg-black/20 mr-12 shrink-0" />
          <div className="w-full">
            <motion.h2 
              className="text-4xl md:text-5xl mb-4 leading-tight font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Paslaugos
            </motion.h2>

            <motion.p 
              className="text-base md:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Teikiame platų paslaugų spektrą: nuo dalinių apdailos darbų iki generalinio rangovo funkcijų.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Slider */}
        <div className="mt-16 -mx-24 relative overflow-hidden">
          <motion.div 
            ref={containerRef}
            className="relative"
            style={{ x: sliderPosition }}
            drag="x"
            dragConstraints={{ left: -(mainServices.length * slideWidth), right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            transition={{
              type: "tween",
              ease: "linear"
            }}
          >
            <motion.div className="flex">
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="relative w-[400px] h-[300px] flex-shrink-0"
                  style={{ margin: '0 8px' }}
                >
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                        <div className="relative h-[100px] flex flex-col justify-between">
                          <h3 className="text-xl font-bold text-white px-6 pt-4 line-clamp-1">{service.title}</h3>
                          <p className="text-white/90 text-sm px-6 pb-4 line-clamp-2">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const current = sliderPosition.get()
              sliderPosition.set(Math.min(current + slideWidth, 0))
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/80 hover:bg-black rounded-full text-white transition-colors"
            aria-label="Previous slide"
          >
            <span className="text-3xl leading-none relative -top-[2px]">‹</span>
          </button>
          <button
            onClick={() => {
              const current = sliderPosition.get()
              const newPosition = current - slideWidth
              sliderPosition.set(Math.abs(newPosition) >= mainServices.length * slideWidth ? 0 : newPosition)
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/80 hover:bg-black rounded-full text-white transition-colors"
            aria-label="Next slide"
          >
            <span className="text-3xl leading-none relative -top-[2px]">›</span>
          </button>
        </div>

        {/* View All Services Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="px-12 py-4 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300">
            Visos paslaugos
          </button>
        </motion.div>
      </div>
    </section>
  )
} 