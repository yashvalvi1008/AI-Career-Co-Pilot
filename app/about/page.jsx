import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Target, Zap, Heart, Globe, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              About AI Career Co-Pilot
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Empowering Careers with <span className="text-primary">AI Innovation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're on a mission to democratize career success by making AI-powered career optimization accessible to
              professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Breaking down barriers to career advancement through intelligent technology.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Accessibility</CardTitle>
                <CardDescription>
                  Making professional career guidance accessible to everyone, regardless of background or budget.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Leveraging cutting-edge AI to provide insights that were previously only available to top-tier
                  professionals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Impact</CardTitle>
                <CardDescription>
                  Creating meaningful change in people's lives by helping them achieve their career aspirations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-pretty">
                  AI Career Co-Pilot was born from a simple observation: career advancement shouldn't depend on who you
                  know or how much you can afford to spend on career coaching.
                </p>
                <p className="text-pretty">
                  Our founders, experienced professionals in AI and career development, witnessed countless talented
                  individuals struggle with resume optimization, skill development, and career planning simply because
                  they lacked access to expert guidance.
                </p>
                <p className="text-pretty">
                  By combining advanced artificial intelligence with proven career development methodologies, we've
                  created a platform that provides personalized, expert-level career guidance at scale.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                      <div className="text-sm text-muted-foreground">Professionals Helped</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">300%</div>
                      <div className="text-sm text-muted-foreground">Avg. Interview Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">User Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">AI Availability</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">People First</h3>
              <p className="text-muted-foreground text-pretty">
                Every decision we make prioritizes the success and well-being of our users.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-6">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Inclusivity</h3>
              <p className="text-muted-foreground text-pretty">
                Building tools that work for everyone, regardless of background or experience level.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 mb-6">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground text-pretty">
                Continuously improving our AI and user experience to deliver exceptional results.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground text-pretty">
                Transparent, honest, and ethical in all our interactions and business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Passionate professionals dedicated to your career success.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-3">CEO & Co-Founder</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  Former VP of Engineering at tech unicorn. 15+ years in AI and career development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Michael Chen</h3>
                <p className="text-sm text-muted-foreground mb-3">CTO & Co-Founder</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  AI researcher with PhD from Stanford. Previously led ML teams at Google and OpenAI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-3">Head of Product</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  Former career coach and product leader. Expert in user experience and career psychology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">
            Ready to advance your career?
          </h2>
          <p className="text-lg text-background/80 text-pretty max-w-2xl mx-auto mb-8">
            Join thousands of professionals who trust AI Career Co-Pilot to guide their career journey.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/signup">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-background/20 text-background hover:bg-background/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
