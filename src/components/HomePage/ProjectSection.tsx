import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchProjects } from "@/lib/api";
import { IProject } from "@/types/project";


export default async function ProjectSection() {
    const projects = await fetchProjects(3, 1);
    console.log(projects)

    return (
        <section className="py-16 max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Projects</h2>
                <Button variant="outline">See More</Button>
            </div>

            {projects?.data?.length === 0 ? (
                <p className="text-muted-foreground">No projects available.</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {projects?.data?.map((proj: IProject) => (
                        <Card key={proj.id} className="hover:shadow-lg transition">
                            <CardHeader>
                                <CardTitle>{proj.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    {proj.description || "No description available"}
                                </p>
                                {proj.liveSiteUrl && (
                                    <a
                                        href={proj.liveSiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline text-sm"
                                    >
                                        Live Site →
                                    </a>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}