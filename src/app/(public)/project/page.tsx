import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import ProjectPageClient from "@/components/ProjectPage/ProjectPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project - Web Development Insights & Tutorials | Md. Takbir Gazi",
    description: "Explore articles and tutorials about web development, React, Next.js, TypeScript, and modern JavaScript. Learn from practical examples and best practices.",
    keywords: ["web development", "React", "Next.js", "TypeScript", "JavaScript", "tutorials", "programming"],
    openGraph: {
        title: "Project - Web Development Insights & Tutorials",
        description: "Explore articles and tutorials about web development, React, Next.js, and more.",
        type: "website",
        images: [
            {
                url: "/og-project-image.jpg",
                width: 1200,
                height: 630,
                alt: "Project Cover Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Project - Web Development Insights & Tutorials",
        description: "Explore articles and tutorials about web development, React, Next.js, and more.",
        images: ["/og-blog-image.jpg"],
    },
}

export default function AllProjectsPage() {

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <ProjectPageClient />
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