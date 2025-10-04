"use client"
import { IProject } from "@/types/project"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowLeft, Calendar, Code2, ExternalLink, Github, Lightbulb } from "lucide-react"
import { Badge } from "../ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface SingleProjectClientProps {
    project: IProject
}

const SingleProjectClient = ({ project }: SingleProjectClientProps) => {
    const router = useRouter()

    // No loading state needed - data comes from server component
    if (!project) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Card className="max-w-md w-full mx-6">
                    <CardContent className="pt-6 text-center">
                        <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
                        <p className="text-muted-foreground mb-4">
                            The project you&apos;re looking for doesn&apos;t exist or has been removed.
                        </p>
                        <Link href="/projects">
                            <Button>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Projects
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <>
            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-6 pt-8">
                <Button variant="ghost" onClick={() => router.back()} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </div>

            {/* Project Header */}
            <section className="max-w-6xl mx-auto px-6 pb-12">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {project.name}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                            {new Date(project.startDate).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric'
                            })}
                        </span>
                    </div>
                    {project.endDate && (
                        <>
                            <span>-</span>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                    {new Date(project.endDate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.liveSiteUrl && (
                        <Link href={project.liveSiteUrl} target="_blank">
                            <Button size="lg" className="gap-2">
                                <ExternalLink className="h-5 w-5" />
                                View Live Site
                            </Button>
                        </Link>
                    )}
                    {project.frontendGitUrl && (
                        <Link href={project.frontendGitUrl} target="_blank">
                            <Button size="lg" variant="outline" className="gap-2">
                                <Github className="h-5 w-5" />
                                Frontend Code
                            </Button>
                        </Link>
                    )}
                    {project.backendGitUrl && (
                        <Link href={project.backendGitUrl} target="_blank">
                            <Button size="lg" variant="outline" className="gap-2">
                                <Github className="h-5 w-5" />
                                Backend Code
                            </Button>
                        </Link>
                    )}
                </div>

                <Separator className="mb-8" />

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                </p>

                {/* Project Image/Preview */}
                <div className="rounded-lg overflow-hidden border-2 mb-12">
                    {project.thumbnail ? (
                        <div className="relative w-full h-auto">
                            <Image
                                src={project.thumbnail}
                                alt={project.name}
                                width={1200}
                                height={630}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <Code2 className="h-24 w-24 text-primary/30" />
                        </div>
                    )}
                </div>

                {/* Technologies Used */}
                {project.techStack && project.techStack.length > 0 && (
                    <Card className="mb-8 border-2">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Code2 className="h-6 w-6 text-primary" />
                                Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Features Section */}
                {project.features && project.features.length > 0 && (
                    <Card className="mb-8 border-2">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Lightbulb className="h-6 w-6 text-primary" />
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary mt-1">✓</span>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* Author Info Card */}
                {project.author && (
                    <Card className="mb-8 border-2">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold mb-4">Project Developer</h2>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                                    {project.author.picture ? (
                                        <Image
                                            src={project.author.picture}
                                            alt={project.author.name}
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                        />
                                    ) : (
                                        project.author.name.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{project.author.name}</h3>
                                    {project.author.email && (
                                        <p className="text-sm text-muted-foreground">{project.author.email}</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Related Projects */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">More Projects</h2>
                    <div className="text-center">
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProjectClient