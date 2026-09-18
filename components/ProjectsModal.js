'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Add all your projects here
const allProjects = [
  {
    title: "Docket Receptionist",
    description: "An AI phone receptionist for courier and logistics. A customer asks where their parcel is — the AI takes the docket number, looks it up read-only, and answers out loud in their language. Hard-guarded so it cannot reveal salary, payment, or personal information.",
    technologies: ["Python", "SQL Server", "Voice AI", "Guardrails", "TTS"],
    link: "https://github.com/prempatil03/DocketReceptionist",
    note: "Open source · Phases 1–3"
  },
  {
    title: "Enterprise Resource Planning (ERP) System",
    description: "Developed ERP modules including Inventory Management, Customer Management, Sales, Purchase, HR, and Reporting. Implemented Role-Based Access Control (RBAC) and business analytics dashboards.",
    technologies: [".NET Framework", "SQL Server", "JavaScript", "Bootstrap", "RBAC"],
    link: null,
    note: "Company project · 2024"
  },
  {
    title: "Human Resource Management System (HRMS)",
    description: "Developed Attendance Management, Leave Management, Payroll, Salary Slip, and Employee Profile modules. Built performance evaluation and employee feedback workflows.",
    technologies: [".NET", "SQL Server", "HTML5", "CSS3", "JavaScript"],
    link: null,
    note: "Company project · 2023"
  },
  {
    title: "Decentralized Pharma Supply Chain",
    description: "Designed a blockchain-based pharmaceutical tracking system with Solidity smart contracts for transaction validation and Web3.js for blockchain communication.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "JavaScript", "Bootstrap"],
    link: null,
    note: "Academic project · 2022"
  },
  {
    title: "Personal Portfolio",
    description: "A minimalist portfolio website built with Next.js and Tailwind CSS, featuring clean design, contact form, and smooth navigation.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/prempatil03/Portfolio-dev-master"
  },
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
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
                        className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors dark:border-gray-700 dark:hover:border-blue-400"
                      >
                        <div className="space-y-4">
                          <h3 className="font-medium group-hover:text-blue-600 transition-colors dark:group-hover:text-blue-400">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 text-sm dark:text-gray-300">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {project.note && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">{project.note}</p>
                          )}
                          {project.link && (
                            <Link 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              View Project 
                              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                            </Link>
                          )}
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
