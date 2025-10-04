export interface IBlog {
    id: string
    title: string
    content: string
    slug: string
    category?: string
    createdAt: string
    author?: {
        name: string
        avatar?: string
    }
    tags?: string[]
}