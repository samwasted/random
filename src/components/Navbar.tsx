'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

interface NavItem {
  title: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const navRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Simple slide down animation on mount
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);
  
  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Home Icon - Far Left */}
        <Link 
          href="/" 
          className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-100"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </Link>
        
        {/* Modern Angled Navigation Menu - Trapezoid */}
        <div className="relative">
          <div 
            className="bg-white/10 backdrop-blur-sm text-gray-100 px-12 py-4 flex items-center space-x-8 shadow-lg overflow-hidden hover:bg-white/15 transition-colors duration-200"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)'
            }}
          >
            {/* Dynamic Navigation Links */}
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="font-medium hover:text-blue-400 transition-colors duration-200 text-sm tracking-wide"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Empty space to balance layout */}
        <div className="w-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;