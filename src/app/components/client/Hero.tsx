'use client'

import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

const partners = [
  { name: 'Lemora', image: '/images/slider/lemora.png' },
  { name: 'IGIS', image: '/images/slider/igis.png' },
  { name: 'Merko', image: '/images/slider/merko.png' },
  { name: 'YIT', image: '/images/slider/yit.png' },
  { name: 'Mitnija', image: '/images/slider/mitnija.png' },
  { name: 'Hanner', image: '/images/slider/hanner.png' },
  { name: 'Varžtų Pasaulis', image: '/images/slider/varztu-pasaulis.png' },
]

export const Hero = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (!sliderRef.current) return
    
    const startSliderAnimation = () => {
      const scrollWidth = sliderRef.current?.scrollWidth || 0
      const width = scrollWidth / 3

      controls.start({
        opacity: 1,
        transition: { duration: 0.8 }
      }).then(() => {
        controls.start({
          x: -width,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }
        })
      })
    }

    // Delay slider animation until after main content has loaded
    const timer = setTimeout(startSliderAnimation, 1500)
    
    return () => clearTimeout(timer)
  }, [controls])

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/5.jpg"
          alt="Modern construction project by STATYK LT"
          fill
          className="object-cover"
          priority
          loading="eager"
          fetchPriority="high"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 w-full">
        <div className="text-white max-w-[90vw] md:max-w-[75vw] lg:max-w-[65vw] xl:max-w-[55vw] 2xl:max-w-[50vw] md:ml-12">
          <div className="relative w-fit">
            <motion.div 
              className="absolute inset-0 bg-black/10 backdrop-blur-sm"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="relative flex p-4 md:p-6"
              initial={{ opacity: 0.99, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-0.5 h-28 bg-white/20 mr-4 md:mr-8" />
              <div>
                <motion.h1 
                  className="text-[2rem] leading-[1.1] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] mb-3 md:mb-4 font-light"
                  initial={{ opacity: 0.99, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Profesionalios
                  <br />
                  <span className="whitespace-nowrap">statybų paslaugos</span>
                </motion.h1>

                <motion.p 
                  className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200"
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Įmonė, kuri stengiasi pateisinti visus Jūsų poreikius
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Slider */}
      <motion.div 
        className="absolute bottom-0 right-0 z-10 w-full md:w-1/2 bg-black/10 backdrop-blur-sm"
        initial={{ opacity: 0.9, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <div className="flex items-center h-24">
          <motion.div 
            className="text-white text-lg font-medium pl-12 pr-4 border-r border-white/20 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Partneriai:
          </motion.div>
          <div className="relative flex-1 overflow-hidden">
            <motion.div 
              ref={sliderRef}
              className="flex items-center space-x-12 px-8"
              initial={{ opacity: 0, x: 0 }}
              animate={controls}
              style={{ width: 'fit-content' }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 