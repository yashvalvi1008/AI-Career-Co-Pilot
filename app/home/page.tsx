"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  FileText,
  BarChart3,
  Zap,
  Target,
  CheckCircle,
  Eye,
  Star,
  TrendingUp,
  Briefcase,
  MapPin,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
  DollarSign,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [resumeScore, setResumeScore] = useState(73)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const [userStats] = useState({
    totalAnalyses: 12,
    avgScore: 78,
    skillsTracked: 24,
    jobsApplied: 8,
    interviewsScheduled: 3,
  })

  const [pastAnalyses] = useState([
    {
      id: 1,
      date: "2024-01-15",
      fileName: "Resume_v3.pdf",
      score: 73,
      status: "completed",
      improvements: 5,
    },
    {
      id: 2,
      date: "2024-01-10",
      fileName: "Resume_v2.pdf",
      score: 68,
      status: "completed",
      improvements: 8,
    },
    {
      id: 3,
      date: "2024-01-05",
      fileName: "Resume_v1.pdf",
      score: 61,
      status: "completed",
      improvements: 12,
    },
  ])

  const [jobRecommendations] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      match: 92,
      posted: "2 days ago",
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$100k - $130k",
      match: 88,
      posted: "1 week ago",
      skills: ["JavaScript", "Python", "AWS"],
    },
    {
      id: 3,
      title: "UI/UX Developer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$90k - $120k",
      match: 85,
      posted: "3 days ago",
      skills: ["React", "Figma", "CSS"],
    },
  ])

  const [skillsProgress] = useState([
    { skill: "React", level: 85, target: 90, trend: "+5" },
    { skill: "TypeScript", level: 78, target: 85, trend: "+8" },
    { skill: "Node.js", level: 72, target: 80, trend: "+3" },
    { skill: "Python", level: 65, target: 75, trend: "+12" },
    { skill: "AWS", level: 58, target: 70, trend: "+15" },
  ])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setIsAnalyzing(true)
      setActiveTab("analysis")

      // Simulate AI analysis
      setTimeout(() => {
        setResumeScore(Math.floor(Math.random() * 20) + 70)
        setIsAnalyzing(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="border-b border-sky-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              AI Career Co-Pilot
            </Link>
            <div className="flex items-center gap-4">
              <Badge className="bg-sky-100 text-sky-800">Pro Plan</Badge>
              <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-sky-200 bg-white/80 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === "overview" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  <BarChart3 className="w-4 h-4 inline mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("upload")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === "upload" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  <Upload className="w-4 h-4 inline mr-2" />
                  Upload Resume
                </button>
                <button
                  onClick={() => setActiveTab("analysis")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === "analysis" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Past Analysis
                </button>
                <button
                  onClick={() => setActiveTab("jobs")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === "jobs" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Job Matches
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === "skills" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  <Award className="w-4 h-4 inline mr-2" />
                  Skills Tracking
                </button>
                <button
                  onClick={() => setActiveTab("rewrite")}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === "rewrite" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  AI Rewriter
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back!</h1>
                  <p className="text-slate-600">Here's your career optimization progress and latest opportunities.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-5 gap-4">
                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-sky-600">{userStats.totalAnalyses}</div>
                      <div className="text-sm text-slate-600">Analyses</div>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{userStats.avgScore}</div>
                      <div className="text-sm text-slate-600">Avg Score</div>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{userStats.skillsTracked}</div>
                      <div className="text-sm text-slate-600">Skills</div>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">{userStats.jobsApplied}</div>
                      <div className="text-sm text-slate-600">Applied</div>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">{userStats.interviewsScheduled}</div>
                      <div className="text-sm text-slate-600">Interviews</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button
                        onClick={() => setActiveTab("upload")}
                        className="h-20 bg-sky-600 hover:bg-sky-700 text-white flex-col"
                      >
                        <Upload className="w-6 h-6 mb-2" />
                        Upload New Resume
                      </Button>
                      <Button
                        onClick={() => setActiveTab("jobs")}
                        variant="outline"
                        className="h-20 border-sky-300 text-sky-700 flex-col"
                      >
                        <Briefcase className="w-6 h-6 mb-2" />
                        Browse Jobs
                      </Button>
                      <Button
                        onClick={() => setActiveTab("skills")}
                        variant="outline"
                        className="h-20 border-sky-300 text-sky-700 flex-col"
                      >
                        <Award className="w-6 h-6 mb-2" />
                        Track Skills
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-800">Recent Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {pastAnalyses.slice(0, 3).map((analysis) => (
                          <div key={analysis.id} className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-sky-600" />
                              <div>
                                <p className="font-medium text-slate-800 text-sm">{analysis.fileName}</p>
                                <p className="text-xs text-slate-600">{analysis.date}</p>
                              </div>
                            </div>
                            <Badge className="bg-sky-100 text-sky-800">{analysis.score}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-800">Top Job Matches</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {jobRecommendations.slice(0, 3).map((job) => (
                          <div key={job.id} className="p-3 bg-sky-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium text-slate-800 text-sm">{job.title}</p>
                              <Badge className="bg-green-100 text-green-800">{job.match}%</Badge>
                            </div>
                            <p className="text-xs text-slate-600">
                              {job.company} • {job.location}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Upload Tab - Keep existing functionality */}
            {activeTab === "upload" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Upload Your Resume</h1>
                  <p className="text-slate-600">
                    Upload your current resume and let our AI analyze and optimize it for better results.
                  </p>
                </div>

                <Card className="border-sky-200 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="border-2 border-dashed border-sky-300 rounded-lg p-12 text-center">
                      <Upload className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Drop your resume here or click to browse
                      </h3>
                      <p className="text-slate-600 mb-6">Supports PDF, Word, and text files up to 10MB</p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload">
                        <Button className="bg-sky-600 hover:bg-sky-700 text-white cursor-pointer">Choose File</Button>
                      </label>
                    </div>

                    {uploadedFile && (
                      <div className="mt-6 p-4 bg-sky-50 rounded-lg border border-sky-200">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-sky-600" />
                          <div>
                            <p className="font-medium text-slate-800">{uploadedFile.name}</p>
                            <p className="text-sm text-slate-600">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Past Analysis Tab */}
            {activeTab === "analysis" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Analysis History</h1>
                  <p className="text-slate-600">Review your past resume analyses and track improvements over time.</p>
                </div>

                <div className="space-y-4">
                  {pastAnalyses.map((analysis) => (
                    <Card key={analysis.id} className="border-sky-200 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-6 h-6 text-sky-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800">{analysis.fileName}</h3>
                              <p className="text-sm text-slate-600">Analyzed on {analysis.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-sky-600">{analysis.score}</div>
                              <div className="text-xs text-slate-600">ATS Score</div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">{analysis.improvements} improvements</Badge>
                            <Button size="sm" variant="outline" className="border-sky-300 text-sky-700 bg-transparent">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Job Recommendations Tab */}
            {activeTab === "jobs" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Job Recommendations</h1>
                  <p className="text-slate-600">
                    Personalized job matches based on your resume analysis and skill profile.
                  </p>
                </div>

                <div className="space-y-4">
                  {jobRecommendations.map((job) => (
                    <Card
                      key={job.id}
                      className="border-sky-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                              <Badge className="bg-green-100 text-green-800">{job.match}% Match</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-slate-600 mb-3">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {job.company}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.posted}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-slate-600">Skills:</span>
                              {job.skills.map((skill, index) => (
                                <Badge key={index} className="bg-sky-100 text-sky-800 text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">
                              Apply Now
                            </Button>
                            <Button size="sm" variant="outline" className="border-sky-300 text-sky-700 bg-transparent">
                              Save Job
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Tracking Tab */}
            {activeTab === "skills" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Skills Progress Tracking</h1>
                  <p className="text-slate-600">
                    Monitor your skill development and see recommendations for improvement.
                  </p>
                </div>

                <div className="space-y-4">
                  {skillsProgress.map((skill, index) => (
                    <Card key={index} className="border-sky-200 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-sky-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800">{skill.skill}</h3>
                              <p className="text-sm text-slate-600">Target: {skill.target}%</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge className="bg-green-100 text-green-800">{skill.trend} this month</Badge>
                            <div className="text-right">
                              <div className="text-lg font-bold text-slate-800">{skill.level}%</div>
                              <div className="text-xs text-slate-600">Current Level</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-slate-600">
                            <span>Progress</span>
                            <span>
                              {skill.level}% / {skill.target}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                          <Button size="sm" variant="outline" className="border-sky-300 text-sky-700 bg-transparent">
                            View Resources
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* AI Rewriter Tab */}
            {activeTab === "rewrite" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">AI Resume Rewriter</h1>
                  <p className="text-slate-600">
                    Advanced AI-powered resume optimization similar to industry-leading tools.
                  </p>
                </div>

                <Card className="border-sky-200 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Smart Rewriting Features</CardTitle>
                    <CardDescription>Choose from powerful AI tools to enhance your resume content.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-sky-200 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="w-6 h-6 text-sky-600" />
                          <h3 className="font-semibold text-slate-800">ATS Optimizer</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                          Automatically optimize your resume for Applicant Tracking Systems with keyword enhancement.
                        </p>
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Optimize for ATS</Button>
                      </Card>

                      <Card className="border-sky-200 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Target className="w-6 h-6 text-sky-600" />
                          <h3 className="font-semibold text-slate-800">Impact Enhancer</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                          Transform weak bullet points into powerful achievement statements with quantified results.
                        </p>
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Enhance Impact</Button>
                      </Card>

                      <Card className="border-sky-200 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Star className="w-6 h-6 text-sky-600" />
                          <h3 className="font-semibold text-slate-800">Skill Matcher</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                          Match your skills to job descriptions and suggest relevant additions.
                        </p>
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Match Skills</Button>
                      </Card>

                      <Card className="border-sky-200 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingUp className="w-6 h-6 text-sky-600" />
                          <h3 className="font-semibold text-slate-800">Industry Adapter</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                          Adapt your resume language and format for specific industries and roles.
                        </p>
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Adapt Resume</Button>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-200 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Premium AI Rewriting</h3>
                        <p className="text-sky-100 mb-4">
                          Unlock advanced AI features including real-time optimization, industry-specific templates, and
                          personalized coaching.
                        </p>
                        <ul className="space-y-1 text-sky-100 text-sm">
                          <li>• Real-time ATS scoring</li>
                          <li>• Industry-specific optimization</li>
                          <li>• Unlimited rewrites</li>
                          <li>• Personal career coaching</li>
                        </ul>
                      </div>
                      <Button className="bg-white text-sky-600 hover:bg-sky-50">
                        Upgrade Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
