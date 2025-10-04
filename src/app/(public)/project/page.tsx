"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Search, ExternalLink, Github, Code2, Sparkles } from "lucide-react";
import { fetchProjects } from "@/lib/apis";
import { IProject } from "@/types/project";


export default function AllProjectsPage() {
    const [projects, setProjects] = useState<IProject[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        loadProjects()
    }, [currentPage])

    const loadProjects = async () => {
        setIsLoading(true)
        const response = await fetchProjects(12, currentPage)
        if (response?.data) {
            setProjects(response.data)
            setTotalPages(Math.ceil(response.total / 12))
        }
        setIsLoading(false)
    }

    // Get unique categories
    const categories = ["all", "ecommerce", ...Array.from(new Set(projects.map(p => p.category).filter((c): c is string => typeof c === "string")))]

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-4">
                        <Code2 className="w-4 h-4 mr-2" />
                        Portfolio
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        A collection of web applications, tools, and experiments built with modern technologies
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 text-base"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                {/* Category Tabs */}
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
                    <TabsList className="w-full justify-start overflow-x-auto">
                        {categories.map((category) => (
                            <TabsTrigger key={category} value={category} className="capitalize">
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <Card key={i}>
                                <Skeleton className="h-48 w-full" />
                                <CardHeader>
                                    <Skeleton className="h-6 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-full" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-2/3" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <Code2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                        <p className="text-muted-foreground">
                            {searchQuery ? "Try a different search term" : "Projects coming soon"}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <Link href={`/project/${project.slug}`} key={project.id}>
                                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden h-full flex flex-col">
                                        {/* Project Image */}
                                        <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                                            {project.imageUrl ? (
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            ) : (
                                                <Code2 className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                                            )}
                                            {project.category && (
                                                <Badge className="absolute top-4 right-4 capitalize">
                                                    {project.category}
                                                </Badge>
                                            )}
                                        </div>

                                        <CardHeader className="flex-1">
                                            <CardTitle className="group-hover:text-primary transition-colors line-clamp-1">
                                                {project.name}
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                                                {project.description || "No description available"}
                                            </p>
                                        </CardHeader>

                                        <CardContent>
                                            {/* Technologies */}
                                            {project.technologies && project.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.technologies.slice(0, 3).map((tech) => (
                                                        <Badge key={tech} variant="secondary" className="text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                    {project.technologies.length > 3 && (
                                                        <Badge variant="secondary" className="text-xs">
                                                            +{project.technologies.length - 3}
                                                        </Badge>
                                                    )}
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                {project.liveSiteUrl && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="flex-1"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            window.open(project.liveSiteUrl, '_blank')
                                                        }}
                                                    >
                                                        <ExternalLink className="h-3 w-3 mr-1" />
                                                        Live
                                                    </Button>
                                                )}
                                                {project.githubUrl && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="flex-1"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            window.open(project.githubUrl, '_blank')
                                                        }}
                                                    >
                                                        <Github className="h-3 w-3 mr-1" />
                                                        Code
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-12">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </Button>
                                <div className="flex items-center gap-1">
                                    {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                                        const pageNum = i + 1
                                        return (
                                            <Button
                                                key={i}
                                                variant={currentPage === pageNum ? "default" : "outline"}
                                                size="icon"
                                                onClick={() => setCurrentPage(pageNum)}
                                            >
                                                {pageNum}
                                            </Button>
                                        )
                                    })}
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </section>

            {/* CTA Section */}
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
        </div>
    )
}