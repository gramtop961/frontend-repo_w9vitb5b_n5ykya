import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder }) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Icon className="h-4 w-4 text-slate-400" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-200 bg-white/80 py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm focus:border-[#8FD4D6] focus:outline-none focus:ring-2 focus:ring-[#B5E3E4]"
    />
  </div>
);

const Auth = () => {
  return (
    <section id="auth" className="bg-gradient-to-b from-white to-[#F8FBFB] py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">Accedi o crea un account</h2>
          <p className="mt-3 max-w-md text-slate-600">
            Inizia in pochi secondi. Usa email e password per accedere in modo sicuro.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• Autenticazione sicura</li>
            <li>• Gestione abbonamenti semplice</li>
            <li>• Dati protetti</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <form className="space-y-3">
            <Input icon={Mail} type="email" placeholder="Email" />
            <Input icon={Lock} type="password" placeholder="Password" />
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#B5E3E4] px-4 py-2.5 font-medium text-slate-800 ring-1 ring-[#8FD4D6] transition hover:brightness-95"
            >
              Continua
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-slate-500">
              Procedendo accetti Termini e Privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
