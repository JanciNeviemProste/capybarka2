const GALLERY_ITEMS = [
  {
    id: 1,
    src: 'https://source.unsplash.com/featured/600x600/?capybara',
    alt: 'Kapybara odpočíva pri vode',
    title: 'Odpočinok pri rieke',
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/featured/600x600/?capybara,water',
    alt: 'Kapybara sa klabe vo vode',
    title: 'Kúpanie v rieke',
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/featured/600x600/?capybara,grass',
    alt: 'Kapybara pasúca sa na lúke',
    title: 'Pasenie na lúke',
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/featured/600x600/?capybara,family',
    alt: 'Skupina kapybár spolu',
    title: 'Rodina kapybár',
  },
  {
    id: 5,
    src: 'https://source.unsplash.com/featured/600x600/?capybara,baby',
    alt: 'Mláďa kapybary',
    title: 'Roztomilé mláďa',
  },
  {
    id: 6,
    src: 'https://source.unsplash.com/featured/600x600/?capybara,swimming',
    alt: 'Kapybara pláva',
    title: 'Plávanie',
  },
  {
    id: 7,
    src: 'https://source.unsplash.com/featured/600x600/?rodent,animal',
    alt: 'Kapybara v prírode',
    title: 'V divočine',
  },
  {
    id: 8,
    src: 'https://source.unsplash.com/featured/600x600/?wildlife,nature',
    alt: 'Kapybara v prírodnom prostredí',
    title: 'Prírodné prostredie',
  },
  {
    id: 9,
    src: 'https://source.unsplash.com/featured/600x600/?tropical,river',
    alt: 'Tropická rieka — domov kapybár',
    title: 'Tropická rieka',
  },
  {
    id: 10,
    src: 'https://source.unsplash.com/featured/600x600/?south,america,wildlife',
    alt: 'Kapybara v Južnej Amerike',
    title: 'Južná Amerika',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Fotografie
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Galéria kapybár
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Nechajte sa okúzliť týmito úžasnými tvormi v ich prirodzenom prostredí.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-lg group bg-gray-800"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold text-center px-3">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
