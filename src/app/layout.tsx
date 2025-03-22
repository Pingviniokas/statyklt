import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'STATYK LT - Statybos ir remonto darbai',
  description: 'Profesionalios statybos ir remonto paslaugos Vilniuje ir visoje Lietuvoje. Biurų įrengimas, apdailos darbai, renovacija.',
  keywords: 'construction, renovation, Vilnius, Lithuania, building services, commercial construction, residential construction',
  openGraph: {
    title: 'STATYK LT - Modern Construction Solutions',
    description: 'Professional construction and renovation services in Vilnius. Specializing in residential and commercial projects since 2007.',
    url: 'https://statyklt.lt',
    siteName: 'STATYK LT',
    locale: 'lt_LT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt" className={`scroll-smooth ${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className={outfit.className}>
        <Navigation />
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
