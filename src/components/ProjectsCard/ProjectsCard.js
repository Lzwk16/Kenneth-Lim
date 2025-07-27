import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import projectsData from './data.json';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex space-x-4">
                    {project.liveLink && (
                        <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                            Live Demo
                        </motion.a>
                    )}
                    {project.sourceLink && (
                        <motion.a
                            href={project.sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CodeBracketIcon className="h-5 w-5 mr-2" />
                            Source Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsCard = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsCard;