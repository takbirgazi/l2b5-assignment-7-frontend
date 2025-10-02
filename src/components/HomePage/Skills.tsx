const skills = ["React", "Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"]

export default function Skills() {
    return (
        <section className="py-16 max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map(skill => (
                    <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
};