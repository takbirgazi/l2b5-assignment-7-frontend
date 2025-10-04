import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


function BlogSection() {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with Next.js 15",
            content: "Learn about the latest features and improvements in Next.js 15...",
            date: "Dec 15, 2024"
        },
        {
            id: 2,
            title: "TypeScript Best Practices",
            content: "Essential TypeScript patterns every developer should know...",
            date: "Dec 10, 2024"
        },
        {
            id: 3,
            title: "Building Scalable React Apps",
            content: "Architecture patterns for large-scale React applications...",
            date: "Dec 5, 2024"
        }
    ]

    return (
        <section className="py-24 container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <Badge variant="outline" className="mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Blog
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold">Latest Articles</h2>
                </div>
                <Link href="/blogs">
                    <Button variant="outline" className="rounded-full">
                        View All Posts
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <Card key={blog.id} className="group hover:shadow-xl transition-all border-2 hover:border-primary">
                        <CardHeader>
                            <div className="text-xs text-muted-foreground mb-2">{blog.date}</div>
                            <CardTitle className="group-hover:text-primary transition-colors">{blog.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{blog.content}</p>
                            <Link href="#" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                                Read More
                                <ArrowRight className="ml-1 w-3 h-3" />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default BlogSection;