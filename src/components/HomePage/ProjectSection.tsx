import { ArrowRight, Code2 } from "lucide-react"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { Button } from "../ui/button"
import { IProject } from "@/types/project"
import ProjectCard from "../ProjectPage/ProjectCard"


function ProjectSection({ projects }: { projects: IProject[] }) {


    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <Badge variant="outline" className="mb-4">
                            <Code2 className="w-4 h-4 mr-2" />
                            Portfolio
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                    </div>
                    <Link href="/project">
                        <Button variant="outline" className="rounded-full">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map(proj => <ProjectCard key={proj.id} project={proj} />)}
                </div>
            </div>
        </section>
    )
};

export default ProjectSection;