import Hero from '@/components/hero'
import About from '@/components/about'
import Research from '@/components/research'
import Publications from '@/components/publications'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Mentoring from '@/components/mentoring'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Publications />
      <Projects />
      <Mentoring />
      <Contact />
      <Footer />
    </div>
  )
}

