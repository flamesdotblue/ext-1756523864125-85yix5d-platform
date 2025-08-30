import React, { useState } from 'react';
import { Copy, Check, Code2, Lock } from 'lucide-react';

const samples = {
  javascript: {
    label: 'JavaScript',
    code: `// 1. Install\n// npm i @vanish/auth\n\nimport { auth } from '@vanish/auth';\n\n// 2. One line to sign in with biometrics\nawait auth.login({ passkey: true });\n\n// 3. Get a verified session\nconst { user, token } = await auth.session();`
  },
  react: {
    label: 'React',
    code: `import { useEffect } from 'react';\nimport { useAuth } from '@vanish/react';\n\nexport default function Login() {\n  const { login, user } = useAuth();\n  useEffect(() => {\n    login({ passkey: true });\n  }, [login]);\n  return user ? <span>Hi, {user.name}</span> : null;\n}`
  },
  node: {
    label: 'Node',
    code: `import express from 'express';\nimport { verify } from '@vanish/server';\n\nconst app = express();\napp.get('/me', verify(), (req, res) => {\n  res.json({ user: req.user });\n});`
  },
  curl: {
    label: 'cURL',
    code: `curl -X POST https://api.vanish.dev/sessions \\n  -H 'Authorization: Bearer <TOKEN>' \\n  -d '{"passkey": true}'`
  }
};

export default function CodeSamples() {
  const tabs = Object.keys(samples);
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(samples[active].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
            <Code2 className="h-5 w-5 text-white/80" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">One line to passkeys</h2>
            <p className="text-sm text-white/60">Drop-in SDKs for web and native. Works with your existing stack.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0C0E14]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-2">
            <div className="flex flex-wrap items-center gap-1">
              {tabs.map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`rounded-md px-3 py-1.5 text-xs transition ${
                    active === key ? 'bg-blue-600 text-white' : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  {samples[key].label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 pr-1">
              <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60 sm:flex">
                <Lock className="h-3 w-3" />
                WebAuthn • FIDO2
              </div>
              <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10">
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <pre className="relative max-h-[420px] overflow-auto p-4 text-[13px] leading-relaxed">
            <code>
{samples[active].code}
            </code>
          </pre>
        </div>

        <p className="mt-4 text-xs text-white/50">
          SDKs are in active development. Looking for early design partners — get in touch: hello@disappearauth.dev
        </p>
      </div>
    </section>
  );
}
