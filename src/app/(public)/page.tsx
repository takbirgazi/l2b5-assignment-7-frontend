import Hero from "@/components/HomePage/Hero";
import About from "@/components/HomePage/About";
import Skills from "@/components/HomePage/Skills";
import ProjectSection from "@/components/HomePage/ProjectSection";
import BlogSection from "@/components/HomePage/BlogSection";
import Feedback from "@/components/HomePage/Feedback";
import CTASection from "@/components/HomePage/CTASection";


// Main Home Component
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <ProjectSection />
      <BlogSection />
      <Feedback />
      <CTASection />
    </div>
  )
}