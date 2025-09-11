import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, MapPin, Clock, DollarSign, Users, Heart, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AI Career Co-Pilot</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
              Join Our Team
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Build the Future of <span className="text-accent">Career Development</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Join a passionate team that's revolutionizing how professionals advance their careers through AI
              innovation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Work at AI Career Co-Pilot?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              More than just a job - it's an opportunity to make a meaningful impact.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Meaningful Impact</CardTitle>
                <CardDescription>
                  Help millions of professionals achieve their career goals and transform their lives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cutting-Edge Technology</CardTitle>
                <CardDescription>
                  Work with the latest AI technologies and contribute to groundbreaking innovations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Amazing Team</CardTitle>
                <CardDescription>
                  Collaborate with brilliant, passionate people who care about making a difference.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Remote-First Culture</CardTitle>
                <CardDescription>
                  Work from anywhere with flexible hours and a focus on results, not location.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Growth Opportunities</CardTitle>
                <CardDescription>
                  Rapid career advancement in a fast-growing company with learning and development support.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Great Benefits</CardTitle>
                <CardDescription>
                  Competitive salary, equity, health insurance, unlimited PTO, and professional development budget.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Join our team and help shape the future of career development.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">Senior AI Engineer</h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Engineering
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Lead the development of our AI models for resume optimization and career guidance. Work with
                      cutting-edge NLP and machine learning technologies.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote / San Francisco
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $150k - $220k + equity
                      </div>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">Product Designer</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Design
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Design intuitive user experiences that help professionals optimize their careers. Lead design
                      thinking and user research initiatives.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote / New York
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $120k - $160k + equity
                      </div>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">Full-Stack Developer</h3>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                        Engineering
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Build and maintain our web platform using React, Node.js, and cloud technologies. Focus on
                      scalability and user experience.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $110k - $150k + equity
                      </div>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">Customer Success Manager</h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Customer Success
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Help our users achieve their career goals by providing exceptional support and guidance. Build
                      relationships and drive user engagement.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote / Austin
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Full-time
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $80k - $110k + equity
                      </div>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Our Culture</h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">What makes working here special.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Work-Life Balance</h3>
                <p className="text-muted-foreground text-pretty">
                  We believe great work happens when people are well-rested and fulfilled. Flexible schedules, unlimited
                  PTO, and mental health support are just the beginning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground text-pretty">
                  $2,000 annual learning budget, conference attendance, internal tech talks, and mentorship programs to
                  help you grow professionally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Diversity & Inclusion</h3>
                <p className="text-muted-foreground text-pretty">
                  We're committed to building a diverse team that reflects the professionals we serve. Equal opportunity
                  employer with inclusive hiring practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation Time</h3>
                <p className="text-muted-foreground text-pretty">
                  20% time for personal projects, hackathons, and exploring new ideas that could benefit our users and
                  the company.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">Ready to make an impact?</h2>
          <p className="text-lg text-background/80 text-pretty max-w-2xl mx-auto mb-8">
            Don't see the perfect role? We're always looking for exceptional talent. Send us your resume and tell us how
            you'd like to contribute.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View All Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-background/20 text-background hover:bg-background/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
