import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import BlogAndContact from './components/BlogAndContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8FD4D6]" />
            Pastello SaaS
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#pricing" className="hover:text-slate-900">Prezzi</a>
            <a href="#auth" className="hover:text-slate-900">Accedi</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contatti</a>
          </nav>
          <a href="#pricing" className="hidden rounded-lg bg-[#B5E3E4] px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-[#8FD4D6] transition hover:brightness-95 sm:inline-flex">Provalo</a>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Auth />
        <BlogAndContact />
      </main>

      <footer className="border-t border-slate-200/70 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Pastello SaaS. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Termini</a>
            <a href="#" className="hover:text-slate-700">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
