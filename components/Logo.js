'use client';
import Link from 'next/link';

export default function Logo() {
  const scrollToTop = (e) => {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Link 
      href="#home" 
      className="text-xl font-light tracking-wider hover:text-gray-600 transition-colors"
      onClick={scrollToTop}
    >
      PP
    </Link>
  );
}