import React from 'react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Gratis',
    monthly: '0€',
    highlight: false,
    features: [
      'Dashboard base',
      'Fino a 1 progetto',
      'Email report settimanali',
    ],
    cta: 'Inizia',
    color: 'from-[#E8F0FE] to-[#F3F7FF] ring-[#C9D9FF] text-slate-700',
  },
  {
    name: 'Pro',
    price: 'Più scelto',
    monthly: '19€',
    highlight: true,
    features: [
      'Analisi avanzate',
      'Progetti illimitati',
      'Supporto prioritario',
    ],
    cta: 'Provalo',
    color: 'from-[#EAF7F6] to-[#F2FBFB] ring-[#C7ECEB] text-slate-800',
  },
  {
    name: 'Business',
    price: 'Team',
    monthly: '49€',
    highlight: false,
    features: [
      'Ruoli e permessi',
      'SLA e onboarding',
      'Controlli di sicurezza',
    ],
    cta: 'Contattaci',
    color: 'from-[#FBF1F5] to-[#FEF6F9] ring-[#F7D7E7] text-slate-700',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
          <Star className="h-3.5 w-3.5 text-[#8FD4D6]" />
          Prezzi semplici e trasparenti
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-800 sm:text-4xl">
          Scegli il piano che fa per te
        </h2>
        <p className="mt-3 text-slate-600">
          Nessun costo nascosto. Passa di piano quando vuoi.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl bg-gradient-to-b ${tier.color} p-6 ring-1 transition hover:shadow-md ${
              tier.highlight ? 'ring-2 ring-[#8FD4D6] shadow-sm' : 'ring-1'
            }`}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-800">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{tier.price}</p>
              </div>
              <div className="text-3xl font-bold text-slate-800">{tier.monthly}</div>
            </div>
            <ul className="mt-6 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 text-[#71C6C8]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium text-slate-800 ring-1 transition ${
                tier.highlight
                  ? 'bg-[#B5E3E4] ring-[#8FD4D6] hover:brightness-95'
                  : 'bg-white/80 ring-slate-200 hover:bg-white'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
