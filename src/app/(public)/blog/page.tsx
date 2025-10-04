// app/blogs/page.tsx
"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Calendar, Clock, Search, ArrowRight, BookOpen } from "lucide-react"
import { IBlog } from "@/types/blog"
import { fetchBlogs } from "@/lib/apis"


export default function AllBlogsPage() {
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        loadBlogs()
    }, [currentPage])

    const loadBlogs = async () => {
        setIsLoading(true)
        const response = await fetchBlogs(9, currentPage)
        if (response?.data) {
            setBlogs(response.data)
            setTotalPages(Math.ceil(response.total / 9))
        }
        setIsLoading(false)
    }

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-4">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Blog
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        Latest Articles & Insights
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Thoughts, tutorials, and insights about web development, technology, and design
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 text-base"
                        />
                    </div>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <Card key={i}>
                                <Skeleton className="h-48 w-full" />
                                <CardHeader>
                                    <Skeleton className="h-4 w-24 mb-2" />
                                    <Skeleton className="h-6 w-full" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-3/4" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="text-center py-20">
                        <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">No blogs found</h3>
                        <p className="text-muted-foreground">
                            {searchQuery ? "Try a different search term" : "Check back soon for new content"}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogs.map((blog) => (
                                <Link href={`/blog/${blog.slug}`} key={blog.id}>
                                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden h-full">
                                        {/* Blog Image Placeholder */}
                                        <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                                            <BookOpen className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                                            {blog.category && (
                                                <Badge className="absolute top-4 right-4">
                                                    {blog.category}
                                                </Badge>
                                            )}
                                        </div>

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
                                                {blog.content}
                                            </p>
                                            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                                Read More
                                                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-12">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </Button>
                                <div className="flex items-center gap-1">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <Button
                                            key={i}
                                            variant={currentPage === i + 1 ? "default" : "outline"}
                                            size="icon"
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            {i + 1}
                                        </Button>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    )
}