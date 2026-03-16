export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />

      {/* Hero image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://source.unsplash.com/featured/1600x900/?capybara"
          alt="Kapybara v prírode"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase border border-blue-500/30 rounded-full px-4 py-1.5 bg-blue-500/5">
          Najroztomilejšie zvieratá sveta
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Vitajte vo svete{' '}
          <span className="text-blue-400">Kapybár</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Spoznajte najväčšieho hlodavca na svete — pokojného, spoločenského
          a neskutočne roztomilého.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#galeria"
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 text-center"
          >
            Pozrieť galériu
          </a>
          <a
            href="#kontakt"
            className="w-full sm:w-auto px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 text-center"
          >
            Kontaktujte nás
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#galeria"
            aria-label="Posunúť nadol"
            className="text-gray-600 transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
