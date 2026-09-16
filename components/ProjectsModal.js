'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Add all your projects here
const allProjects = [
  {
    title: "Personal Portfolio",
    description: "A minimalist portfolio website built with Next.js and Tailwind CSS, featuring clean design and smooth navigation.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/patilprem21/portfolio-dev"
  },
  {
  title: "Multi-Agent AI Research Assistant",
  description: "Advanced AI system with three specialised agents (Planner, Search, Synthesizer) that work together to conduct comprehensive research and generate professional reports. Features real-time web search, fallback mechanisms, and modular architecture.",
  technologies: ["Python", "Google Gemini API", "Multi-Agent Architecture", "AI/ML", "Web Scraping"],
  link: "https://github.com/patilprem21/multi-agent-gemini"
  },
  // Add new projects here
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customer data with real-time updates.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Weather Application",
    description: "Real-time weather forecasting app with location-based services and interactive maps.",
    technologies: ["React Native", "Weather API", "Google Maps API"],
    link: "#"
  },
  // You can keep adding more projects following the same structure
];


export default function ProjectsModal({ isOpen, closeModal }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div>
                  <Dialog.Title as="h3" className="text-2xl font-semibold mb-8">
                    All Projects
                  </Dialog.Title>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {allProjects.map((project, index) => (
                      <div 
                        key={index}
                        className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
                      >
                        <div className="space-y-4">
                          <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 text-sm">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="text-xs bg-gray-100 px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Link 
                            href={project.link}
                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                          >
                            View Project 
                            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
