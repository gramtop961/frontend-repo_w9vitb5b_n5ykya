import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-[#F7F5FB] via-[#F4FAFC] to-[#F7F5FB]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:py-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-slate-500" />
          Sicuro e semplice per il tuo business fintech
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl md:text-6xl">
          Un SaaS pulito e moderno per crescere con stile
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Tinte pastello e design minimale. Gestisci pagamenti, abbonamenti e analisi con una
          piattaforma progettata per la semplicità.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-[#B5E3E4] px-5 py-3 text-slate-800 shadow-sm ring-1 ring-[#8FD4D6] transition hover:brightness-95"
          >
            <Rocket className="h-4 w-4" />
            Inizia gratis
          </a>
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-white"
          >
            Accedi
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
