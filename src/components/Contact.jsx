import { useState } from 'react';

const CONTACT_INFO = [
  {
    id: 'email',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'E-mail',
    value: 'kapybary@example.sk',
  },
  {
    id: 'phone',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Telefón',
    value: '+421 900 123 456',
  },
  {
    id: 'address',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Adresa',
    value: 'Hlavná 1, 811 01 Bratislava',
  },
  {
    id: 'hours',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Otváracie hodiny',
    value: 'Po–Pi: 9:00–17:00',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Napíšte nám
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Máte otázky o kapybarách? Neváhajte nás kontaktovať — radi vám odpovieme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Správa odoslaná!</h3>
                <p className="text-gray-400">Ďakujeme za váš záujem. Ozveme sa vám čo najskôr.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 px-6 py-2 border border-gray-600 text-gray-300 rounded-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Odoslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-300">
                    Meno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Vaše meno"
                    className="px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="vas@email.sk"
                    className="px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-300">
                    Predmet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="O čom nám chcete napísať?"
                    className="px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-300">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Napíšte svoju správu..."
                    className="px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact information */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Kontaktné informácie</h3>
              <p className="text-gray-400">
                Sme tu pre všetkých milovníkov kapybár. Neváhajte sa ozvať cez ktorýkoľvek kanál.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {CONTACT_INFO.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-0.5 text-blue-400 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-300">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-gray-300 mb-3">Sledujte nás</p>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', href: '#' },
                  { label: 'Facebook', href: '#' },
                  { label: 'YouTube', href: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="px-4 py-2 border border-gray-700 text-gray-400 text-sm rounded-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
