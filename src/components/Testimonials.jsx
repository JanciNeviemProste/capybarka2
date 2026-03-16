const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Kapybary sú absolútne najkrajšie zvieratá, aké som kedy stretla. Ich pokojná povaha a spoločenskosť ma úplne uchvátila počas návštevy Brazílie.',
    author: 'Martina Kováčová',
    role: 'Zoologička, Bratislava',
    initials: 'MK',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    id: 2,
    quote:
      'Vidieť kapybaru priamo v prírode bol zážitok na celý život. Tieto tvory sú tak pokojné, že sa k nim dá priblížiť na niekoľko metrov bez toho, aby sa pohnuli.',
    author: 'Tomáš Novák',
    role: 'Fotograf divokej prírody',
    initials: 'TN',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 3,
    quote:
      'Kapybary sú výnimoční spoločenskí tvori. Žijú v skupinách a doslova sa priateľia s inými druhmi zvierat. Ich fotky vždy rozžiaria môj deň!',
    author: 'Lucia Horváthová',
    role: 'Blogerka o prírode',
    initials: 'LH',
    gradient: 'from-indigo-500 to-blue-400',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Zážitky
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Čo hovoria nadšenci
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Príbehy ľudí, ktorých kapybary navždy zmenili ich pohľad na svet zvierat.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-800/70"
            >
              {/* Decorative quote icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-500/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="italic text-lg text-gray-300 leading-relaxed flex-1">
                {item.quote}
              </p>

              <hr className="border-gray-700" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-sm font-bold">{item.initials}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{item.author}</p>
                  <p className="text-gray-400 text-sm opacity-70">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
