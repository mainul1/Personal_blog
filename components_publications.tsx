'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const publications = [
  {
    title: "Identification of potential therapeutic targets for cutaneous melanoma based on bioinformatics analysis",
    journal: "Oncology Letters",
    year: 2021,
    citations: 12,
    link: "https://scholar.google.com/citations?user=d9eDK5kAAAAJ&hl=en"
  },
  {
    title: "Computational analysis of gene expression profiles in cancer research",
    journal: "Journal of Bioinformatics",
    year: 2020,
    citations: 8,
    link: "https://scholar.google.com/citations?user=d9eDK5kAAAAJ&hl=en"
  },
  // Add more publications from Google Scholar
]

export default function Publications() {
  const [showAll, setShowAll] = useState(false)
  const displayedPublications = showAll ? publications : publications.slice(0, 3)

  return (
    <section className="py-16 bg-background" id="publications">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Selected Publications</h2>
        <div className="grid gap-6">
          {displayedPublications.map((pub, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {pub.journal} ({pub.year}) • {pub.citations} citations
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        {publications.length > 3 && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'View More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

