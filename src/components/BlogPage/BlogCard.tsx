import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IBlog } from '@/types/blog';
import Image from "next/image";


const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden h-full">
                {
                    blog.thumbnail ? (
                        <div className="relative h-48 w-full">
                            <figure>
                                <Image
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </figure>
                        </div>
                    ) : <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                        <BookOpen className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                }
                <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            5 min read
                        </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                        <div
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default BlogCard;