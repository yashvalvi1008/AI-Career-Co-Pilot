import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Calendar, Clock, User, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BlogPage() {
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
              Career Insights & Tips
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              The AI Career <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Expert insights, career tips, and industry trends to help you navigate your professional journey with
              confidence.
            </p>
            <div className="mt-10 flex items-center justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white border-slate-200 focus:border-primary focus:ring-primary/20"
                />
              </div>
              <Button className="ml-2 bg-primary hover:bg-primary/90">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Featured Article
            </h2>
          </div>
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Featured
                    </Badge>
                    <Badge variant="outline">Career Strategy</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">
                    How AI is Revolutionizing Resume Optimization in 2024
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Discover the latest AI techniques that are transforming how professionals optimize their resumes for
                    ATS systems and human recruiters. Learn actionable strategies you can implement today.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Sarah Johnson
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Dec 15, 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />8 min read
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:pl-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Recent Articles
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Stay updated with the latest career development insights and strategies.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-accent/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Interview Tips</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  10 AI-Powered Interview Questions You Should Prepare For
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  As AI becomes more prevalent in hiring, learn about the new types of questions you might encounter and
                  how to answer them effectively.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Michael Chen
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 12, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />5 min read
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Skill Development</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  The Top 5 Skills Every Professional Needs in 2024
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Discover the most in-demand skills across industries and learn how to develop them effectively with
                  our AI-powered recommendations.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Emily Rodriguez
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 10, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />7 min read
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Career Change</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  Making a Successful Career Pivot: A Complete Guide
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Step-by-step strategies for transitioning to a new career field, including how to leverage
                  transferable skills and build new ones.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    David Kim
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 8, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    10 min read
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-accent/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Remote Work</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  Optimizing Your Resume for Remote Positions
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Learn how to highlight remote work skills and experience to stand out in the competitive remote job
                  market.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Lisa Wang
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 5, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />6 min read
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Salary Negotiation</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  Data-Driven Salary Negotiation Strategies
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Use market data and AI insights to negotiate your salary with confidence and achieve the compensation
                  you deserve.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Alex Thompson
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 3, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />8 min read
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Leadership</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  Building Leadership Skills in the AI Era
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Discover how to develop and showcase leadership capabilities that remain valuable in an AI-driven
                  workplace.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    Maria Garcia
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 1, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />9 min read
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Get the latest career insights and AI-powered tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white border-slate-200 focus:border-primary focus:ring-primary/20"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Read our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">
            Ready to optimize your career?
          </h2>
          <p className="text-lg text-background/80 text-pretty max-w-2xl mx-auto mb-8">
            Put these insights into action with AI-powered career optimization tools.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/signup">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
