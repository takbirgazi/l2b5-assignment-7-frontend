import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section
            className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: "url('/your-hero-bg.jpg')", // Replace with your URL
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-black/60 absolute inset-0" />
            <div className="relative z-10 px-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I’m <span className="text-primary">Md. Takbir Gazi</span>
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    I design and build modern web applications with clean UI & great performance.
                </p>
                <Button size="lg">Get in Touch</Button>
            </div>
        </section>
    )
};