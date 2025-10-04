"use client"
import React, { useEffect, useState } from 'react';
import HeroSection from '../Shared/HeroSection';
import Skeleton from '../Shared/Skeleton';
import ProjectCard from './ProjectCard';
import Pagination from '../Shared/Pagination';
import { IProject } from '@/types/project';
import { fetchProjects } from '@/lib/apis';
import { Code2 } from 'lucide-react';

const ProjectPageClient = () => {
    const [projects, setProjects] = useState<IProject[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        loadProjects()
    }, [currentPage])

    const loadProjects = async () => {
        setIsLoading(true)
        const response = await fetchProjects(12, currentPage)
        if (response?.data) {
            setProjects(response.data)
            setTotalPages(Math.ceil(response.total / 12))
        }
        setIsLoading(false)
    }

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesSearch
    })

    return (
        <>
            <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} title="My Projects" subtitle="A collection of web applications, tools, and experiments built with modern technologies" icon={<Code2 className="w-4 h-4 mr-2" />} topText="Portfolio" />


            {/* Projects Section */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                {isLoading ? <Skeleton /> : filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <Code2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                        <p className="text-muted-foreground">
                            {searchQuery ? "Try a different search term" : "Projects coming soon"}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
                    </>
                )}
            </section>
        </>
    );
};

export default ProjectPageClient;