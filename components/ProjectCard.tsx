'use client';

import { motion } from 'framer-motion';
import { MapPin, Tag } from 'lucide-react';
import { Project } from '@/types/site';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-[#252525] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-64 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/project-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-bold">
          {project.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-6xl opacity-30">⚡</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-1" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-blue-900 dark:text-blue-400 font-semibold">
            <Tag size={16} className="mr-1" />
            <span>{project.category}</span>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  );
}
