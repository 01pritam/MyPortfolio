"use client";

import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Disclosure as="nav" className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-neutral-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
               
                
                {/* Desktop Navigation */}
                <div className="hidden md:ml-8 md:flex md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current 
                          ? 'text-teal-400 border-b-2 border-teal-400' 
                          : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-white/50',
                        'px-1 py-2 text-sm font-medium transition-all duration-200'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right section - CTA Button */}
              <div className="hidden md:flex items-center">
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600/80 to-teal-400/80 hover:from-blue-600 hover:to-teal-400 text-white text-sm font-medium transition-all duration-300"
                >
                  Let's Connect
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <DisclosureButton
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-neutral-800 text-teal-400'
                      : 'text-gray-300 hover:bg-neutral-800 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium transition-all'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <a
                href="/contact"
                className="block w-full text-center mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 text-white text-sm font-medium"
              >
                Let's Connect
              </a>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}