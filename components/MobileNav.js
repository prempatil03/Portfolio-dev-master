'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="p-2 text-gray-700"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link 
              href="#skills" 
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link 
              href="#projects" 
              className="text-gray-700 hover:text-gray-900"
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