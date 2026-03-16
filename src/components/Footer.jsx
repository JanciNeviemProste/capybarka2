const FOOTER_LINKS = [
  { href: '#hero', label: 'Úvod' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#testimonials', label: 'Zážitky' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-bold text-xl">🦫 Kapybary</span>
            <p className="text-gray-500 text-sm">
              Roztomilá stránka o kapybarách
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigácia pätičky">
            <ul className="flex flex-wrap justify-center gap-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Kapybary. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}
