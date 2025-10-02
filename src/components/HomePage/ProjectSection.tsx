import { ArrowRight, Code2, ExternalLink } from "lucide-react"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


function ProjectSection() {
    const projects = [
        {
            id: 1,
            name: "MeetUP",
            description: "Video conferencing web application with high-quality streaming using ZegoCloud",
            liveSiteUrl: "#",
            tags: ["React", "Express", "MongoDB", "ZegoCloud"]
        },
        {
            id: 2,
            name: "Motion Mark",
            description: "Modern portfolio website for creative agency with smooth animations",
            liveSiteUrl: "#",
            tags: ["Next.js", "TailwindCSS", "Framer Motion"]
        },
        {
            id: 3,
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration",
            liveSiteUrl: "#",
            tags: ["React", "Node.js", "PostgreSQL"]
        }
    ]

    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <Badge variant="outline" className="mb-4">
                            <Code2 className="w-4 h-4 mr-2" />
                            Portfolio
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                    </div>
                    <Link href="/projects">
                        <Button variant="outline" className="rounded-full">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((proj) => (
                        <Card key={proj.id} className="group hover:shadow-xl transition-all border-2 hover:border-primary overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <Code2 className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform" />
                            </div>
                            <CardHeader>
                                <CardTitle className="group-hover:text-primary transition-colors">{proj.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{proj.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Link href={proj.liveSiteUrl} className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                                    View Project
                                    <ExternalLink className="ml-1 w-3 h-3" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ProjectSection;