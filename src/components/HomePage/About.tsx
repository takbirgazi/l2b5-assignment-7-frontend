import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <section className="py-16 max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
                I’m a full-stack developer passionate about creating seamless digital
                experiences. With strong expertise in React, Next.js, TypeScript, and backend
                development, I enjoy building projects that make an impact.
            </p>
            <Button>See More</Button>
        </section>
    )
};