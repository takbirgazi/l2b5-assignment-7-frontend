
export interface IProject {
    id: string
    name: string
    description: string
    slug: string
    liveSiteUrl?: string
    githubUrl?: string
    technologies?: string[]
    category?: string
    createdAt: string
    imageUrl?: string
    features?: string[]
    challenges?: string[]
    learnings?: string[]
    teamSize?: number
    duration?: string
    role?: string
}