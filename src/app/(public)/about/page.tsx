import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Award, Facebook } from "lucide-react"
import Link from "next/link"
import profile from "@/assets/images/takbir_gazi.jpeg";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            {/* Hero Section */}
            <Card className="shadow-xl rounded-2xl mb-8">
                <CardContent className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8">
                    {/* Left: Avatar & Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <Avatar className="h-36 w-36 border-4 border-primary/10">
                            <AvatarImage src={profile.src} alt="Takbir Gazi" />
                            <AvatarFallback className="text-2xl">TG</AvatarFallback>
                        </Avatar>
                        <div className="flex mt-4 gap-2">
                            <Link href="https://github.com/takbirgazi" target="_blank">
                                <Button variant="outline" size="icon" className="hover:bg-primary cursor-pointer hover:text-white transition-colors">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com/in/takbirgazi" target="_blank">
                                <Button variant="outline" size="icon" className="hover:bg-primary cursor-pointer hover:text-white transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="https://www.facebook.com/takbirgazibd" target="_blank">
                                <Button variant="outline" size="icon" className="hover:bg-primary cursor-pointer hover:text-white transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>Khulna, Bangladesh</span>
                        </div>
                    </div>

                    {/* Right: Intro */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            MD. Takbir Gazi
                        </h1>
                        <p className="text-xl text-muted-foreground mt-1 font-medium">Web Developer</p>

                        <p className="text-muted-foreground mt-4 leading-relaxed">
                            Passionate web developer with expertise in building modern, scalable web applications
                            using <span className="font-semibold text-foreground">TypeScript, Next.js, React.js</span>, and
                            the full MERN stack. Currently expanding my skills into Android development with Java.
                        </p>

                        <p className="text-muted-foreground mt-3 leading-relaxed">
                            I thrive in collaborative environments and love transforming creative designs into
                            pixel-perfect, responsive user interfaces. Always eager to learn and stay updated
                            with the latest technologies.
                        </p>

                        <Button className="mt-6 cursor-pointer" size="lg">
                            <Mail className="mr-2 h-4 w-4" />
                            <Link href="mailto:takbirgazibd@gmail.com">
                                Get In Touch
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="shadow-lg rounded-2xl mb-8">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="h-8 w-1 bg-primary rounded-full"></span>
                        Technical Skills
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="px-3 py-1">JavaScript</Badge>
                                <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
                                <Badge variant="secondary" className="px-3 py-1">React.js</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Next.js</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Redux (RTK Query)</Badge>
                                <Badge variant="secondary" className="px-3 py-1">TailwindCSS</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Shadcn UI</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Firebase</Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="px-3 py-1">Node.js</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Express.js</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Mongoose</Badge>
                                <Badge variant="secondary" className="px-3 py-1">JWT</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Passport.js</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Zod</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Bcrypt.js</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Multer</Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Database & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="px-3 py-1">MongoDB</Badge>
                                <Badge variant="secondary" className="px-3 py-1">PostgreSQL</Badge>
                                <Badge variant="secondary" className="px-3 py-1">GitHub</Badge>
                                <Badge variant="secondary" className="px-3 py-1">VS Code</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Android Studio</Badge>
                                <Badge variant="secondary" className="px-3 py-1">Linux</Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Experience & Education Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Work Experience */}
                <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Briefcase className="h-6 w-6 text-primary" />
                            Experience
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg">React.js Developer</h3>
                                <p className="text-sm text-muted-foreground">Diligent Soft IT (Remote)</p>
                                <p className="text-xs text-muted-foreground mb-2">Jan 2025 - Present</p>
                                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                    <li>Built UI components with React.js and Tailwind CSS</li>
                                    <li>Converted Figma designs to responsive pages</li>
                                    <li>Contributed to eShikhon and Blumenit (Dubai)</li>
                                </ul>
                            </div>

                            <Separator className="my-6" />

                            <div>
                                <h3 className="font-semibold text-lg">Next.js Developer (Intern)</h3>
                                <p className="text-sm text-muted-foreground">Wevloper (Remote)</p>
                                <p className="text-xs text-muted-foreground mb-2">Feb 2025 - Apr 2025</p>
                                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                    <li>Developed scalable web apps with Next.js App Router</li>
                                    <li>Integrated APIs and applied server-side rendering</li>
                                    <li>Worked with Redux, ShadCn, and Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Education & Achievements */}
                <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            Education
                        </h2>

                        <div className="mb-6">
                            <h3 className="font-semibold text-lg">BSS Honor&lsquo;s in Economics</h3>
                            <p className="text-sm text-muted-foreground">Govt. Haji Md. Mohsin College, Khulna</p>
                            <p className="text-xs text-muted-foreground">3rd Year (Running)</p>
                        </div>

                        <Separator className="my-6" />

                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            Certifications
                        </h2>

                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="font-medium">Complete Web Development</p>
                                <p className="text-xs text-muted-foreground">Programming Hero • Dec 2023 - Jun 2024</p>
                            </div>
                            <div>
                                <p className="font-medium">Next.js Developer Internship</p>
                                <p className="text-xs text-muted-foreground">Wevloper • Feb 2025 - Apr 2025</p>
                            </div>
                            <div>
                                <p className="font-medium">Recommendation Letter</p>
                                <p className="text-xs text-muted-foreground">Programming Hero</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Soft Skills */}
            <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="h-8 w-1 bg-primary rounded-full"></span>
                        Soft Skills & Strengths
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge className="px-4 py-2">Quick Learner</Badge>
                        <Badge className="px-4 py-2">Self-Motivated</Badge>
                        <Badge className="px-4 py-2">Team Leadership</Badge>
                        <Badge className="px-4 py-2">Time Management</Badge>
                        <Badge className="px-4 py-2">Team Collaboration</Badge>
                        <Badge className="px-4 py-2">Presentation Skills</Badge>
                        <Badge className="px-4 py-2">Self-Confident</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center pt-14">
                <h2 className="text-3xl font-bold mb-4">Let&lsquo;s Build Something Amazing Together</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I&lsquo;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link href="/projects">
                        <Button className="cursor-pointer" size="lg" variant="outline">View My Work</Button>
                    </Link>
                    <Link href="mailto:takbirgazibd@gmail.com">
                        <Button className="cursor-pointer" size="lg">Contact Me 🚀</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}