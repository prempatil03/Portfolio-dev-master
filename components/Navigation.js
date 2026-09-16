'use client';
import Link from 'next/link';

export default function Navigation() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav className="hidden md:flex space-x-6">
      <Link 
        href="#about" 
        className="text-gray-700 hover:text-gray-900 transition-colors"
        onClick={(e) => scrollToSection(e, '#about')}
      >
        About
      </Link>
      <Link 
        href="#experience" 
        className="text-gray-700 hover:text-gray-900 transition-colors"
        onClick={(e) => scrollToSection(e, '#experience')}
      >
        Experience
      </Link>
      <Link 
        href="#skills" 
        className="text-gray-700 hover:text-gray-900 transition-colors"
        onClick={(e) => scrollToSection(e, '#skills')}
      >
        Skills
      </Link>
      <Link 
        href="#projects" 
        className="text-gray-700 hover:text-gray-900 transition-colors"
        onClick={(e) => scrollToSection(e, '#projects')}
      >
        Projects
      </Link>
    </nav>
  );
}