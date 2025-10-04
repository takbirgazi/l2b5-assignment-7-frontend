import Hero from "@/components/HomePage/Hero";
import About from "@/components/HomePage/About";
import Skills from "@/components/HomePage/Skills";
import ProjectSection from "@/components/HomePage/ProjectSection";
import BlogSection from "@/components/HomePage/BlogSection";
import Feedback from "@/components/HomePage/Feedback";
import CTASection from "@/components/HomePage/CTASection";
import { fetchBlogs, fetchProjects } from "@/lib/apis";


// Main Home Component
export default async function Home() {
  const blogs = await fetchBlogs(3, 1);
  const projects = await fetchProjects(3, 1);

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <ProjectSection projects={projects.data} />
      <BlogSection blogs={blogs.data} />
      <Feedback />
      <CTASection />
    </div>
  )
}