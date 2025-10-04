// app/projects/[slug]/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import SingleProjectClient from "@/components/ProjectPage/SingleProjectClient";
import { fetchProjectBySlug } from "@/lib/apis"; // ← Fixed import
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate metadata dynamically based on project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const response = await fetchProjectBySlug(slug); // ← Fixed function call

    if (!response || !response.data) {
        return {
            title: "Project Not Found",
            description: "The project you are looking for does not exist.",
        }
    }

    const project = response.data;

    return {
        title: `${project.name} - Project | Takbir Gazi`,
        description: project.description?.slice(0, 160) || "View this project by Takbir Gazi",
        openGraph: {
            title: project.name,
            description: project.description?.slice(0, 160) || "",
            type: 'website',
            url: `https://takbirgazi-dev.vercel.app/projects/${project.slug}`,
            images: project.thumbnail ? [
                {
                    url: project.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: project.name,
                },
            ] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: project.name,
            description: project.description?.slice(0, 160) || "",
            images: project.thumbnail ? [project.thumbnail] : undefined,
        },
    }
}

// Fetch project data
async function fetchProject(slug: string) {
    try {
        const response = await fetchProjectBySlug(slug);
        return response?.data || null;
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
}

export default async function SingleProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const project = await fetchProject(slug);

    if (!project) {
        notFound(); // Shows 404 page
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Pass project data to client component */}
            <SingleProjectClient project={project} />

            {/* CTA Section */}
            <section className="pt-16 pb-10 max-w-6xl mx-auto px-6">
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