/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_URL
if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not set")
}

const api = axios.create({
    baseURL,
    withCredentials: true,
})

// Add token automatically if stored in localStorage/sessionStorage
api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config
})

// Projects API
export async function fetchProjects(limit = 10, page = 1) {
    try {
        const res = await api.get(`/project/all?page=${page}&limit=${limit}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch projects:", error)
        return null
    }
}

// Blogs API
export async function fetchBlogs(limit = 10, page = 1) {
    try {
        const res = await api.get(`/blog/all?page=${page}&limit=${limit}`)
        return res?.data
    } catch (error: any) {
        console.error("Failed to fetch blogs:", error)
        return null
    }
}

export default api