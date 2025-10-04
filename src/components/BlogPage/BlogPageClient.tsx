"use client"
import { useState, useEffect } from "react"
import { BookOpen } from "lucide-react"
import { IBlog } from "@/types/blog"
import Skeleton from "@/components/Shared/Skeleton"
import HeroSection from "@/components/Shared/HeroSection"
import BlogCard from "@/components/BlogPage/BlogCard"
import Pagination from "@/components/Shared/Pagination"
import { fetchBlogs } from "@/lib/apis"

interface BlogsClientProps {
    initialBlogs: IBlog[]
    initialTotal: number
}

const BlogPageClient = ({ initialBlogs, initialTotal }: BlogsClientProps) => {
    const [blogs, setBlogs] = useState<IBlog[]>(initialBlogs)
    const [isLoading, setIsLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [total, setTotal] = useState(initialTotal)
    const blogsPerPage = 9

    // Calculate total pages based on total blogs from server
    const totalPages = Math.ceil(total / blogsPerPage)

    // Load blogs when page changes
    useEffect(() => {
        if (currentPage === 1 && !searchQuery) {
            // Use initial data for first page
            return
        }
        loadBlogs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    const loadBlogs = async () => {
        setIsLoading(true)
        try {
            const response = await fetchBlogs(blogsPerPage, currentPage)
            if (response?.data) {
                setBlogs(response.data)
                setTotal(response.total)
            }
        } catch (error) {
            console.error("Failed to load blogs:", error)
        } finally {
            setIsLoading(false)
        }
    }

    // Client-side filtering for search (only filters current page)
    const filteredBlogs = searchQuery
        ? blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : blogs

    // Reset to page 1 when search query changes
    useEffect(() => {
        if (searchQuery && currentPage !== 1) {
            setCurrentPage(1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                title="Latest Articles & Insights"
                subtitle="Thoughts, tutorials, and insights about web development, technology, and design"
                icon={<BookOpen className="w-4 h-4" />}
                topText="Blog"
            />

            {/* Blogs Grid */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                {isLoading ? (
                    <Skeleton />
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
                        {/* Show Blogs */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>

                        {/* Pagination - Only show if not searching */}
                        {!searchQuery && totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />
                        )}

                        {/* Search Results Info */}
                        {searchQuery && (
                            <p className="text-center text-sm text-muted-foreground mt-8">
                                Showing {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                            </p>
                        )}
                    </>
                )}
            </section>
        </>
    )
}

export default BlogPageClient