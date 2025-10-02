import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Redux"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT", "Passport.js"]
        },
        {
            category: "Tools & Others",
            skills: ["Git", "GitHub", "VS Code", "Firebase", "Vercel", "Linux"]
        }
    ]

    return (
        <section className="py-24 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    My Expertise
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Constantly learning and adapting to the latest technologies in web development
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                    <Card key={category.category} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                        <CardHeader>
                            <CardTitle className="text-xl">{category.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Skills;