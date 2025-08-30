import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 font-bold">A</span>
              <span className="text-sm font-semibold">Disappear</span>
            </div>
            <p className="mt-2 text-xs text-white/50">© {new Date().getFullYear()} Disappear, Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Status</a>
            <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> SOC 2 in progress
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
