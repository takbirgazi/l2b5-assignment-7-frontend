import { Metadata } from "next";
import BlogPageClient from "@/components/BlogPage/BlogPageClient";

export const metadata: Metadata = {
    title: "Blog - Web Development Insights & Tutorials | Takbir Gazi",
    description: "Explore articles and tutorials about web development, React, Next.js, TypeScript, and modern JavaScript. Learn from practical examples and best practices.",
    keywords: ["web development", "React", "Next.js", "TypeScript", "JavaScript", "tutorials", "programming"],
    openGraph: {
        title: "Blog - Web Development Insights & Tutorials",
        description: "Explore articles and tutorials about web development, React, Next.js, and more.",
        type: "website",
        images: [
            {
                url: "/og-blog-image.jpg",
                width: 1200,
                height: 630,
                alt: "Blog Cover Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Web Development Insights & Tutorials",
        description: "Explore articles and tutorials about web development, React, Next.js, and more.",
        images: ["/og-blog-image.jpg"],
    },
}

// Fetch blogs on server side
async function fetchBlogs() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/all?limit=9&page=1`, {
            cache: "no-store",
            next: { revalidate: 3600 }
        })

        if (!res.ok) {
            throw new Error('Failed to fetch blogs')
        }

        const data = await res.json()
        return {
            blogs: data?.data || [],
            total: data?.total || 0
        }
    } catch (error) {
        console.error("Error fetching blogs:", error)
        return {
            blogs: [],
            total: 0
        }
    }
}

export default async function AllBlogsPage() {
    // Fetch first page of blogs on server
    const { blogs, total } = await fetchBlogs()

    return (
        <div className="min-h-screen bg-background">
            <BlogPageClient
                initialBlogs={blogs}
                initialTotal={total}
            />
        </div>
    )
}