import { Hero } from './components/client/Hero'
import { About } from './components/client/About'
import { Services } from './components/client/Services'
import { Projects } from './components/client/Projects'
import { Contact } from './components/client/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}
