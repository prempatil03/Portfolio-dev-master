'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProjectsModal from './ProjectsModal';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';


export default function ProjectsSection() {
  const [isProjectsModalOpen, setProjectsModalOpen] = useState(false);

  return (
    <section id="projects" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-between items-center mb-8"
      >
        <h2 className="text-2xl">Projects</h2>
        <button
          onClick={() => setProjectsModalOpen(true)}
          className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
        >
          View All Projects
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Project Card 1 */}
         <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
        >
                    <div className="space-y-4">
            <h3 className="font-medium group-hover:text-blue-600 transition-colors">
              Personal Portfolio
            </h3>
            <p className="text-gray-700 text-sm">
              A minimalist portfolio website built with Next.js and Tailwind CSS, 
              featuring clean design and smooth navigation.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Tailwind CSS</span>
            </div>
            <Link 
              href="https://github.com/patilprem21/portfolio-dev" 
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              View Project 
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          </motion.div>

        {/* Project Card 2 */}
 {/* Project Card 1 */}
 <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
        >          <div className="space-y-4">
            <h3 className="font-medium group-hover:text-blue-600 transition-colors">
            Multi-Agent AI Research Assistant
            </h3>
            <p className="text-gray-700 text-sm">
              Built a sophisticated multi-agent AI system using Google Gemini API with three specialized agents: 
              Planner (breaks topics into research questions), Search Agent (conducts real-time web research), 
              and Synthesizer (creates comprehensive reports). Features fallback mechanisms and modular architecture.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Google Gemini API</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">AI/ML</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Multi-Agent</span>
            </div>
            <Link 
              href="https://github.com/patilprem21/multi-agent-gemini" 
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              View Project 
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          </motion.div>
      </div>

      <ProjectsModal 
        isOpen={isProjectsModalOpen} 
        closeModal={() => setProjectsModalOpen(false)} 
      />
    </section>
  );
}
