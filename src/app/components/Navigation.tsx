'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { InquiryPopup } from './client/InquiryPopup'

const navigation = [
  { name: 'Pradžia', href: '/' },
  { name: 'Apie mus', href: '/about' },
  { name: 'Paslaugos', href: '/services' },
  { name: 'Projektai', href: '/projects' },
  { name: 'Kontaktai', href: '/contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const navRef = useRef(null)
  const pathname = usePathname()
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

  // Initialize scroll state on first render
  useEffect(() => {
    // Check if page is scrolled on load
    const isScrolled = window.scrollY > 20
    setScrolled(isScrolled)
    
    // After a very short delay, mark initial load as complete
    const timer = setTimeout(() => {
      setInitialLoad(false)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  // Listen for scroll events after initial load
  useEffect(() => {
    if (initialLoad) return

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled, initialLoad])

  // Variants for navbar animation
  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
    immediate: {
      y: 0,
      transition: { duration: 0 }
    }
  }

  return (
    <>
      <motion.nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${
          scrolled 
            ? 'bg-white py-2 shadow-lg' 
            : 'bg-transparent py-4 md:py-6'
        }`}
        initial={initialLoad ? (scrolled ? "immediate" : "hidden") : false}
        animate="visible"
        variants={navVariants}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-16">
          {/* Left Section - Logo */}
          <Link href="/" className="flex-shrink-0 relative">
            <div className="relative w-[150px] md:w-[200px] h-[40px] md:h-[50px]">
              <Image
                src="/images/statyklt-logo.png"
                alt="STATYK LT"
                fill
                className={`object-contain transition-all duration-500 ${
                  scrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
                priority
              />
            </div>
          </Link>

          {/* Center Section - Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-2.5 text-[15px] font-medium transition-colors duration-500 ${
                    pathname === item.href
                      ? scrolled ? 'text-black' : 'text-white'
                      : scrolled ? 'text-black/80 hover:text-black' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {pathname === item.href && (
                    <motion.span
                      className={`absolute inset-0 border-b-2 transition-colors duration-500 ${scrolled ? 'border-black' : 'border-white'}`}
                      layoutId="navbar-active"
                      transition={{ 
                        type: "spring", 
                        bounce: 0.2, 
                        duration: 0.5
                      }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - CTA Button */}
          <div className="w-[180px] md:w-[250px] flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`hidden md:block px-8 py-2.5 border transition-all duration-500 text-[15px] font-medium ${
                scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-white text-white hover:bg-white/10'
              }`}
              onClick={() => setIsInquiryOpen(true)}
            >
              Siųsti užklausą
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 2 },
                  }}
                  className={`w-5 h-0.5 block absolute transition-colors duration-500 ${
                    scrolled ? 'bg-black' : 'bg-white'
                  }`}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className={`w-5 h-0.5 block transition-colors duration-500 ${
                    scrolled ? 'bg-black' : 'bg-white'
                  }`}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -2 },
                  }}
                  className={`w-5 h-0.5 block absolute transition-colors duration-500 ${
                    scrolled ? 'bg-black' : 'bg-white'
                  }`}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      <InquiryPopup 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="relative h-full flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-8 py-3 text-2xl font-light transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-12 py-3 border border-white text-white text-lg font-light transition-all duration-200 hover:bg-white/10"
                onClick={() => {
                  setIsOpen(false)
                  setIsInquiryOpen(true)
                }}
              >
                Siųsti užklausą
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 