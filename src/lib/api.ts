// lib/api.ts
import axios from "axios"

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
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
    const res = await api.get(`/project/all?page=${page}&limit=${limit}`)
    return res.data
}

// Blogs API
export async function fetchBlogs(limit = 10, page = 1) {
    const res = await api.get(`/blog/all?page=${page}&limit=${limit}`)
    return res.data
}

export default api