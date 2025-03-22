'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { name: 'Patirtis nuo', value: '2007', prefix: '', suffix: '' },
  { name: 'Specialistų komanda', value: '30', prefix: '', suffix: '+' },
  { name: 'Įgyvendintų projektų', value: '300', prefix: '', suffix: '+' },
  { name: 'Projektų vertė', value: '8', prefix: '', suffix: 'M+' },
]

const Counter = ({ value, prefix, suffix }: { value: string, prefix: string, suffix: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      animate(count, parseInt(value), {
        duration: 2,
        ease: "easeOut",
      })
    }
  }, [count, value, isInView])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </div>
  )
}

export const About = () => {
  return (
    <section id="about" className="relative py-12 md:py-24 bg-white">
      <div className="relative z-10 px-4 md:px-24">
        <motion.div 
          className="relative flex flex-col md:flex-row"
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
              Mūsų Istorija
            </motion.h2>

            <motion.div 
              className="text-sm md:text-base lg:text-lg text-gray-600 space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                UAB „STATYK LT" įkurta 2007 m., siekiant suburti patikimą ir profesionalią statybų komandą. Per trumpą laiką tapome vertinamu rangovu, kurio stiprybė – kokybė, atsakomybė ir laiku atliekami darbai. Gavę ypatingų statinių statybos atestatą, įgyvendinome daugybę sudėtingų projektų, prisidėjome prie Vilniaus miesto plėtros ir užsitikrinome didžiųjų statybų bendrovių pasitikėjimą.
              </p>
              <p>
                Mūsų komandoje – daugiau nei 30 kvalifikuotų specialistų, kurių patirtis ir profesionalumas užtikrina kiekvieno projekto sėkmę. Esame pasirašę rangos sutarčių už daugiau nei 8 mln. eurų, o mūsų augimą lėmė ne tik techninės žinios, bet ir pagarba klientams bei ilgalaikiai partnerystės santykiai.
              </p>
              <p>
                Šiandien tęsiame savo misiją – statyti patikimai, atsakingai ir kokybiškai.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="text-center p-4 md:p-6 bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-sm md:text-base text-gray-600">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 