import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Fingerprint } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Waitlist: Auth that disappears');
    const body = encodeURIComponent(`Please add me to the waitlist.\nEmail: ${email}`);
    window.location.href = `mailto:hello@disappearauth.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(0,120,255,0.25),transparent_60%),radial-gradient(800px_400px_at_120%_20%,rgba(123,97,255,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Private beta is open
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              Passwordless authentication SDK with native biometrics. Ship secure logins in one line of code — no passwords, no OTPs, no friction.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-lg items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-blue-500/60 focus:bg-white/10"
                />
                <Fingerprint className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/30 transition hover:from-blue-500 hover:to-indigo-500"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-3 text-xs text-white/50">By joining, you agree to our privacy policy. No spam, unsubscribe anytime.</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/50">
              <img src="https://avatars.githubusercontent.com/u/9892522?s=200&v=4" alt="Vercel" className="h-6 opacity-70" />
              <img src="https://cdn.jsdelivr.net/gh/hung1001/static/brand/nextjs.svg" alt="Next.js" className="h-5 opacity-70" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-6 opacity-70" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" alt="Node" className="h-6 opacity-70" />
              <span className="text-xs">Trusted by builders shipping modern stacks</span>
            </div>
          </div>

          <div className="relative h-[460px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-0">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-transparent/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
