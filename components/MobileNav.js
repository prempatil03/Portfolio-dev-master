'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass =
    'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white';

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button 
        onClick={toggleMenu}
        className="p-2 text-gray-700 dark:text-gray-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4 dark:bg-gray-950 dark:border-gray-800">
          <nav className="flex flex-col space-y-4 px-4">
            <Link 
              href="#about" 
              className={linkClass}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className={linkClass}
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link 
              href="#skills" 
              className={linkClass}
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link 
              href="#certificates" 
              className={linkClass}
              onClick={toggleMenu}
            >
              Certificates
            </Link>
            <Link 
              href="#projects" 
              className={linkClass}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
