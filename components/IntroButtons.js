'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function IntroButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      <Link 
        href="#projects" 
        className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#projects').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
      >
        View Projects
      </Link>
      <Link 
        href="#contact" 
        className="px-6 py-2 border border-gray-900 rounded hover:bg-gray-50 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
      >
        Get in Touch
      </Link>
    </div>
  );
}