/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthResponse, LoginCredentials } from "@/types/response";
import axiosInterceptor from "./axios";


// ==================== AUTH APIs ====================

// Login
export async function login(credentials: LoginCredentials): Promise<AuthResponse | null> {
    try {
        const res = await axiosInterceptor.post('/auth/login', credentials)

        if (res.data.accessToken && res.data.refreshToken) {
            if (res.data.user) {
                localStorage.setItem("user", JSON.stringify(res.data.user))
            }
        }

        return res.data
    } catch (error: any) {
        console.error("Login failed:", error?.response?.data?.message || error?.message)
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

// Check if user is authenticated
export function isAuthenticated(): boolean {
    if (typeof window === "undefined") return false
    return !!localStorage.getItem("accessToken")
}

// Get stored user info
export function getStoredUser() {
    if (typeof window === "undefined") return null
    const userStr = localStorage.getItem("user")
    return userStr ? JSON.parse(userStr) : null
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
}

export async function createProject(projectData: any) {
    try {
        const res = await axiosInterceptor.post('/project/create', projectData)
        return res.data
    } catch (error: any) {
        console.error("Failed to create project:", error)
        throw error
    }
}

export async function updateProject(slug: string, projectData: any) {
    try {
        const res = await axiosInterceptor.put(`/project/${slug}`, projectData)
        return res.data
    } catch (error: any) {
        console.error("Failed to update project:", error)
        throw error
    }
}

export async function deleteProject(id: string) {
    try {
        const res = await axiosInterceptor.delete(`/project/${id}`)
        return res.data
    } catch (error: any) {
        console.error("Failed to delete project:", error)
        throw error
    }
}

// ==================== BLOGS APIs ====================

export async function fetchBlogs(limit = 10, page = 1) {
    try {
        const res = await axiosInterceptor.get(`/blog/all?page=${page}&limit=${limit}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch blogs:", error?.message || error)
        return { data: [], total: 0, page, limit }
    }
}

export async function createBlog(blogData: any) {
    try {
        const res = await axiosInterceptor.post('/blog/create', blogData)
        return res.data
    } catch (error: any) {
        console.error("Failed to create blog:", error)
        throw error
    }
}

export async function updateBlog(slug: string, blogData: any) {
    try {
        const res = await axiosInterceptor.put(`/blog/${slug}`, blogData)
        return res.data
    } catch (error: any) {
        console.error("Failed to update blog:", error)
        throw error
    }
}

export async function deleteBlog(id: string) {
    try {
        const res = await axiosInterceptor.delete(`/blog/${id}`)
        return res.data
    } catch (error: any) {
        console.error("Failed to delete blog:", error)
        throw error
    }
}