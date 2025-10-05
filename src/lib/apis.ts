"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginCredentials } from "@/types/response";
import axiosInterceptor from "./axios";
import { cookies } from "next/headers";


// ==================== AUTH APIs ====================

// Login

export async function login(credentials: LoginCredentials) {
    try {
        const res = await axiosInterceptor.post('/auth/login', credentials)
        return res.data
    } catch (error: any) {
        throw error
    }
}

// Logout
export async function logout(): Promise<void> {
    try {
        await axiosInterceptor.post('/auth/logout')
    } catch (error) {
        console.error("Logout request failed:", error)
    } finally {
        // Clear tokens from localStorage regardless of API response
        localStorage.removeItem("user")
        window.location.href = "/login"
    }
}

// Get current user
export async function getCurrentUser() {
    try {
        const res = await axiosInterceptor.get('/user/me')
        return res.data
    } catch (error: any) {
        console.error("Failed to get current user:", error)
        return null
    }
}


// ==================== PROJECTS APIs ====================

export async function fetchProjects(limit = 10, page = 1) {
    try {
        const res = await axiosInterceptor.get(`/project/all?page=${page}&limit=${limit}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch projects:", error?.message || error)
        return { data: [], total: 0, page, limit }
    }
};

export async function fetchProjectBySlug(slug: string) {
    try {
        const res = await axiosInterceptor.get(`/project/${slug}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch project by slug:", error?.message || error)
        return null
    }
};

export async function createProject(projectData: any) {
    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/create`, {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
    })

    if (!res.ok) throw new Error('Failed to create project')
    return await res.json()
}

export async function deleteProject(id: number) {
    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `${token}`,
        },
    })

    if (!res.ok) throw new Error('Failed to delete project')
    return await res.json()
}

export async function updateProject(slug: string, projectData: any) {

    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${slug}`, {
        method: 'PUT',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
    })

    if (!res.ok) throw new Error('Failed to create project')
    return await res.json()
};

// ==================== BLOGS APIs ====================

export async function fetchBlogs(limit = 10, page = 1) {
    try {
        const res = await axiosInterceptor.get(`/blog/all?page=${page}&limit=${limit}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch blogs:", error?.message || error)
        return { data: [], total: 0, page, limit }
    }
};

export async function fetchBlogBySlug(slug: string) {
    try {
        const res = await axiosInterceptor.get(`/blog/${slug}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch blog by slug:", error?.message || error)
        return null
    }
};

export async function createBlog(blogData: any) {
    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/create`, {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
    })

    if (!res.ok) throw new Error('Failed to create blog')
    return await res.json()
}

export async function deleteBlog(id: number) {
    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `${token}`,
        },
    })

    if (!res.ok) throw new Error('Failed to delete blog')
    return await res.json()
}


export async function updateBlog(slug: string, blogData: any) {

    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`, {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
    })

    if (!res.ok) throw new Error('Failed to create blog')
    return await res.json()
};