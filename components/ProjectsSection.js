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
          className="text-blue-600 hover:text-blue-700 text-sm flex items-center dark:text-blue-400 dark:hover:text-blue-300"
        >
          View All Projects
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Project Card 1 — Docket Receptionist */}
         <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors dark:border-gray-700 dark:hover:border-blue-400 dark:bg-gray-900/40"
        >
                    <div className="space-y-4">
            <h3 className="font-medium group-hover:text-blue-600 transition-colors dark:group-hover:text-blue-400">
              Docket Receptionist
            </h3>
            <p className="text-gray-700 text-sm dark:text-gray-300">
              An AI phone receptionist for courier and logistics. Customers ask about a parcel;
              the AI takes the docket number, looks it up read-only, and answers out loud in their
              language — with hard guardrails so sensitive data is never revealed.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">Python</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">SQL Server</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">Voice AI</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">Guardrails</span>
            </div>
            <Link 
              href="https://github.com/prempatil03/DocketReceptionist" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View Project 
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          </motion.div>

        {/* Project Card 2 */}
 <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors dark:border-gray-700 dark:hover:border-blue-400 dark:bg-gray-900/40"
        >          <div className="space-y-4">
            <h3 className="font-medium group-hover:text-blue-600 transition-colors dark:group-hover:text-blue-400">
            Enterprise Resource Planning (ERP) System
            </h3>
            <p className="text-gray-700 text-sm dark:text-gray-300">
              ERP modules for Inventory, Customer Management, Sales, Purchase, HR, and Reporting
              with Role-Based Access Control and business analytics dashboards.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">.NET Framework</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">SQL Server</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">JavaScript</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-300">Bootstrap</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Company project · 2024</p>
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
