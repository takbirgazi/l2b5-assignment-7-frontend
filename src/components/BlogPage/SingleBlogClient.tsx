// components/BlogPage/SingleBlogClient.tsx
"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, ThumbsUp, MessageSquare } from "lucide-react"
import { IBlog } from "@/types/blog"
import Image from "next/image"

interface SingleBlogClientProps {
    blog: IBlog
}

const SingleBlogClient = ({ blog }: SingleBlogClientProps) => {
    const router = useRouter()

    // No need for loading state since data comes from server
    if (!blog) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Card className="max-w-md w-full mx-6">
                    <CardContent className="pt-6 text-center">
                        <h2 className="text-2xl font-bold mb-2">Blog Not Found</h2>
                        <p className="text-muted-foreground mb-4">
                            The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
                        </p>
                        <Link href="/blogs">
                            <Button>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Blogs
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Back Button */}
            <div className="max-w-4xl mx-auto px-6 pt-8">
                <Button variant="ghost" onClick={() => router.back()} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </div>

            {/* Blog Content */}
            <article className="max-w-4xl mx-auto px-6 pb-16">
                {/* Category Badge */}
                {blog.isFeatured && (
                    <Badge variant="secondary" className="mb-4">
                        {blog.isFeatured}
                    </Badge>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={blog.author?.picture} />
                            <AvatarFallback>
                                {blog.author?.name?.charAt(0) || 'A'}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-foreground">
                                {blog.author?.name || 'Takbir Gazi'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mb-8">
                    <Button variant="outline" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Like
                    </Button>
                    <Button variant="outline" size="sm">
                        <BookmarkPlus className="h-4 w-4 mr-2" />
                        Save
                    </Button>
                    <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                    </Button>
                </div>

                <Separator className="mb-8" />

                {/* Featured Image */}
                {blog.thumbnail ? (
                    <div className="rounded-lg overflow-hidden mb-8">
                        <figure>
                            <Image width={1200} height={630} src={blog.thumbnail} alt={blog.title} />
                        </figure>
                    </div>
                ) : (
                    <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-8 flex items-center justify-center">
                        <BookmarkPlus className="h-24 w-24 text-primary/30" />
                    </div>
                )}

                {/* Blog Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div
                        className="text-lg leading-relaxed text-foreground"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-8">
                        <Separator className="mb-4" />
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Author Card */}
                <Card className="mt-12 border-2">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={blog.author?.picture} />
                                <AvatarFallback className="text-xl">
                                    {blog.author?.name?.charAt(0) || 'T'}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">
                                    Written by {blog.author?.name}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Passionate web developer and tech enthusiast. Loves to share knowledge through writing.
                                </p>
                                <Button variant="outline" size="sm">
                                    Follow
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Comments Section Placeholder */}
                <Card className="mt-8 border-2">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" />
                            Comments
                        </h3>
                        <p className="text-muted-foreground text-center py-8">
                            Comments section coming soon...
                        </p>
                    </CardContent>
                </Card>
            </article>
        </div>
    )
}

export default SingleBlogClient