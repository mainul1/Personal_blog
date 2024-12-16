import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Research() {
  return (
    <section className="py-16 bg-muted" id="research">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Research Interests</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Epigenomic Markers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Identifying epigenomic markers to predict chronic diseases associated with post-traumatic stress disorder.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Multi-omics Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integrating genomics, transcriptomics, and proteomics data to enhance understanding of epigenomic regulation in health and disease.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Machine Learning in Disease Prediction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Developing predictive models for disease risk assessment using machine learning and artificial intelligence techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

