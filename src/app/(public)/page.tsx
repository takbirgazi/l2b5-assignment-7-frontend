import About from "@/components/HomePage/About";
import BlogSection from "@/components/HomePage/BlogSection";
import Feedback from "@/components/HomePage/Feedback";
import Hero from "@/components/HomePage/Hero";
import ProjectSection from "@/components/HomePage/ProjectSection";
import Skills from "@/components/HomePage/Skills";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <BlogSection />
      <ProjectSection />
      <Skills />
      <Feedback />
    </div>
  );
};