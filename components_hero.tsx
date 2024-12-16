import { Button } from '@/components/ui/button'
import { Github, Mail, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Dr. Md Mainul Hasan Sarker
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Research Scientist specializing in Epigenomics and Chronic Disease Prediction
            </p>
          </div>
          <div className="space-x-4">
            <Link href="https://github.com/mainul1" target="_blank">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
            <Link href="https://scholar.google.com/citations?user=d9eDK5kAAAAJ&hl=en" target="_blank">
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Google Scholar
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="default" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

