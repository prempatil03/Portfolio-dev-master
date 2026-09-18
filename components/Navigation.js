'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const linkClass =
    'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors';

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link 
        href="#about" 
        className={linkClass}
        onClick={(e) => scrollToSection(e, '#about')}
      >
        About
      </Link>
      <Link 
        href="#experience" 
        className={linkClass}
        onClick={(e) => scrollToSection(e, '#experience')}
      >
        Experience
      </Link>
      <Link 
        href="#skills" 
        className={linkClass}
        onClick={(e) => scrollToSection(e, '#skills')}
      >
        Skills
      </Link>
      <Link 
        href="#certificates" 
        className={linkClass}
        onClick={(e) => scrollToSection(e, '#certificates')}
      >
        Certificates
      </Link>
      <Link 
        href="#projects" 
        className={linkClass}
        onClick={(e) => scrollToSection(e, '#projects')}
      >
        Projects
      </Link>
      <ThemeToggle />
    </nav>
  );
}
