import React from 'react';
import { Fingerprint, ShieldCheck, Bolt } from 'lucide-react';

const items = [
  {
    icon: Fingerprint,
    title: 'Native biometrics',
    desc: 'Face ID, Touch ID, and platform authenticators. No passwords, no OTPs.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero knowledge',
    desc: 'We never see your users’ secrets. WebAuthn + hardware-backed keys.'
  },
  {
    icon: Bolt,
    title: 'One-line install',
    desc: 'Drop-in SDK and start authenticating in minutes with sane defaults.'
  }
];

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Build trust without friction</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/60">
              Secure by design. Delightful by default. Everything you need to replace passwords with biometrics.
            </p>
          </div>
          <div className="hidden md:block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
            SOC 2 Type II in progress • GDPR compliant • End-to-end encrypted
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/60 to-indigo-600/60">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TrustBadge title="Passkeys-first" />
          <TrustBadge title="Device-bound keys" />
          <TrustBadge title="Phishing resistant" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
      <span className="text-sm text-white/80">{title}</span>
    </div>
  );
}
