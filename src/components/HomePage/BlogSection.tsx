import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fetchBlogs } from "@/lib/api";
import { IBlog } from '../../types/blog';



export default async function BlogSection() {
    const blogs = await fetchBlogs(3, 1);
    console.log(blogs)

    return (
        <section className="py-16 max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Recent Blogs</h2>
                <Button variant="outline">See More</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {blogs?.data?.map((blog: IBlog) => (
                    <Card key={blog.id} className="hover:shadow-lg transition">
                        <CardHeader>
                            <CardTitle>{blog.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{blog.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
};