import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Database, FlaskRoundIcon as Flask, Code } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 bg-background" id="about">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">About Me</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Research Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As a Research Scientist, I specialize in identifying epigenomic markers to predict chronic diseases associated with post-traumatic stress disorder. My work involves designing experiments, developing protocols for epigenetic data analysis, and integrating multi-omics data to enhance our understanding of epigenomic regulation in cardiovascular health and disease.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Epigenomics & Chronic Disease Prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Multi-omics Data Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flask className="h-5 w-5 text-primary" />
                  <span>Experimental Design & Data Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Machine Learning in Bioinformatics</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

