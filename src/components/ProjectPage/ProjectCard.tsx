"use client"
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IProject } from "@/types/project";


const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <Link href={`/project/${project.slug}`} key={project.id}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    {project.thumbnail ? (
                        <figure>
                            <Image src={project.thumbnail} alt={project.name} />
                        </figure>
                    ) : (
                        <Code2 className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
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
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                            {project.techStack.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                    +{project.techStack.length - 3}
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
                        {project.frontendGitUrl && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.open(project.frontendGitUrl, '_blank')
                                }}
                            >
                                <Github className="h-3 w-3 mr-1" />
                                Code
                            </Button>
                        )}
                        {project.backendGitUrl && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.open(project.backendGitUrl, '_blank')
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
    );
};

export default ProjectCard;