import React from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

const posts = [
  {
    title: 'Perché la semplicità vince nel fintech',
    excerpt:
      'Un design minimale riduce l’attrito e aumenta la fiducia. Ecco come lo applichiamo al prodotto.',
  },
  {
    title: 'Abbonamenti: best practice 2025',
    excerpt: 'Modelli di pricing, metriche da monitorare e consigli per la crescita sostenibile.',
  },
  {
    title: 'Sicurezza senza complicazioni',
    excerpt: 'Procedure chiare e strumenti moderni per proteggere i dati dei clienti.',
  },
];

const BlogAndContact = () => {
  return (
    <section id="blog" className="bg-gradient-to-b from-[#F8FBFB] to-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">Dal nostro blog</h2>
          <p className="mt-3 text-slate-600">Storie, risorse e novità dal mondo SaaS e fintech.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2B6466]">
                Leggi di più
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">Parliamo del tuo progetto</h2>
            <p className="mt-3 text-slate-600">Scrivici: rispondiamo entro 24 ore.</p>
          </div>
          <form className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8FD4D6] focus:outline-none focus:ring-2 focus:ring-[#B5E3E4]" placeholder="Nome" />
              <input type="email" className="rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8FD4D6] focus:outline-none focus:ring-2 focus:ring-[#B5E3E4]" placeholder="Email" />
            </div>
            <textarea rows="4" className="mt-3 w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#8FD4D6] focus:outline-none focus:ring-2 focus:ring-[#B5E3E4]" placeholder="Il tuo messaggio" />
            <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#B5E3E4] px-4 py-2.5 font-medium text-slate-800 ring-1 ring-[#8FD4D6] transition hover:brightness-95">
              Invia
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogAndContact;
