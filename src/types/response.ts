export interface LoginCredentials {
    email: string
    password: string
}

export interface AuthResponse {
    success: boolean
    message: string
    accessToken: string
    refreshToken: string
    user?: {
        id: string
        email: string
        name: string
        role?: string
    }
}