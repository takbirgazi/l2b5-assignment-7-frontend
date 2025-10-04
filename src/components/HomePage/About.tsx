import { ArrowRight, Code2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";


function About() {
    return (
        <section className="py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text */}
                <div className="space-y-6">
                    <div className="inline-block">
                        <Badge variant="outline" className="mb-4">
                            <Code2 className="w-4 h-4 mr-2" />
                            About Me
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Building Digital Experiences That Matter
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I&apos;m a full-stack developer passionate about creating seamless digital experiences.
                        With strong expertise in React, Next.js, TypeScript, and backend development,
                        I enjoy building projects that make an impact.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Currently working at <span className="text-primary font-semibold">Diligent Soft IT</span> and
                        contributing to exciting projects like eShikhon and Blumenit.
                    </p>
                    <Link href="/about">
                        <Button variant="outline" size="lg" className="cursor-pointer rounded-full mt-4">
                            Learn More About Me
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                {/* Right Side - Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <Card className="border-2 hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-2">2+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </CardContent>
                    </Card>
                    <Card className="border-2 hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-2">15+</div>
                            <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </CardContent>
                    </Card>
                    <Card className="border-2 hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-2">10+</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </CardContent>
                    </Card>
                    <Card className="border-2 hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Satisfaction</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About;