import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "Bioinformatics Analysis Tools",
    description: "A collection of Python scripts for genomic data analysis and visualization.",
    link: "https://github.com/mainul1"
  },
  {
    title: "Gene Expression Analysis Pipeline",
    description: "Automated pipeline for processing and analyzing gene expression data.",
    link: "https://github.com/mainul1"
  },
  {
    title: "Computational Biology Resources",
    description: "Educational resources and tutorials for computational biology.",
    link: "https://github.com/mainul1"
  }
]

export default function Projects() {
  return (
    <section className="py-16 bg-muted" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <Link href={project.link} target="_blank">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

