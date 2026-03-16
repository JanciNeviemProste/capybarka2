import { useState } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'Úvod' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#testimonials', label: 'Zážitky' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-white font-bold text-xl tracking-tight transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
          >
            🦫 Kapybary
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-400 text-sm font-normal transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-gray-400 transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Prepnúť menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-5 h-0.5 bg-current transition-all duration-300" />
            <span className="block w-5 h-0.5 bg-current transition-all duration-300" />
            <span className="block w-5 h-0.5 bg-current transition-all duration-300" />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 text-gray-400 text-base transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
