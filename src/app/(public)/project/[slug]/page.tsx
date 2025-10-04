"use client"
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Code2, Sparkles } from "lucide-react";
import { IProject } from "@/types/project"
import { fetchProjectBySlug } from "@/lib/apis"
import Image from "next/image";


export default function SingleProjectPage() {
    const params = useParams()
    const router = useRouter()
    const [project, setProject] = useState<IProject | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadProject()
    }, [params.slug])

    const loadProject = async () => {
        setIsLoading(true)
        const response = await fetchProjectBySlug(params.slug as string)
        if (response) {
            setProject(response.data)
        }
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <Skeleton className="h-8 w-32 mb-8" />
                    <Skeleton className="h-12 w-2/3 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-8" />
                    <Skeleton className="h-96 w-full mb-8" />
                    <div className="grid md:grid-cols-2 gap-6">
                        <Skeleton className="h-64 w-full" />
                        <Skeleton className="h-64 w-full" />
                    </div>
                </div>
            </div>
        )
    }

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
        <div className="min-h-screen bg-background">
            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-6 pt-8">
                <Button variant="ghost" onClick={() => router.back()} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </div>

            {/* Project Header */}
            <section className="max-w-6xl mx-auto px-6 pb-12">
                {/* Category Badge */}
                {project.features && (
                    <Badge variant="secondary" className="mb-4 capitalize">
                        {project.features}
                    </Badge>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {project.name}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                    {project.startDate && (
                        <div className="flex items-center gap-2">
                            <span>From:</span>
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(project.startDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                        </div>
                    )}
                    {project.endDate && (
                        <div className="flex items-center gap-2">
                            <span>To:</span>
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(project.endDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                        </div>
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
                                View Source Code
                            </Button>
                        </Link>
                    )}
                    {project.backendGitUrl && (
                        <Link href={project.backendGitUrl} target="_blank">
                            <Button size="lg" variant="outline" className="gap-2">
                                <Github className="h-5 w-5" />
                                View Source Code
                            </Button>
                        </Link>
                    )}
                </div>

                <Separator className="mb-8" />

                {/* Project Image/Preview */}
                <div className="rounded-lg overflow-hidden border-2 mb-12">
                    {project.thumbnail ? (
                        <figure>
                            <Image src={project.thumbnail} alt={project.name} />
                        </figure>
                    ) : (
                        <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <Code2 className="h-24 w-24 text-primary/30" />
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                </p>

                {/* Technologies Used */}
                {project.techStack && project.techStack.length > 0 && (
                    <Card className="mb-8 border-2">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Code2 className="h-6 w-6 text-primary" />
                                Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* CTA */}
                <section className="py-16 max-w-6xl mx-auto px-6">
                    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <CardContent className="p-12 text-center relative z-10">
                            <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Have a Project in Mind?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-8 cursor-pointer">
                                    Let&apos;s Work Together
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </section>
            </section>
        </div>
    )
}