import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { IBlog } from "@/types/blog";
import BlogCard from "../BlogPage/BlogCard";


function BlogSection({ blogs }: { blogs: IBlog[] }) {

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
                <Link href="/blog">
                    <Button variant="outline" className="rounded-full">
                        View All Posts
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    )
}

export default BlogSection;