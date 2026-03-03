import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiPost } from '../lib/api'

export default function Register() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await apiPost('/auth/register', { nome, email, senha })
      await apiPost('/auth/login', { email, senha })
      navigate('/dashboard')
    } catch (err: any) {
      setError(err?.message || 'Falha ao registrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col lg:flex-row h-full">
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40" style={{
            backgroundImage: `radial-gradient(at 0% 0%, rgba(19, 91, 236, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 242, 255, 0.1) 0px, transparent 50%)`
          }} />
          <div className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn_Qq3RFQTosE5ysL133q78cdR5ng6N5k1np6yZfvyqxzButaJ0iC-0q99Qk72rFafuhKcpifC-j5PWwxKT5yyjJn6xt43GrLf6AWnjlYfk0UWvGslWItKRNJA8nb-di4ytpTFtbsns7VZ30szmM7S_PSnZsIYC0TvVNSeSW9ZvUQXRRMSlQXVOHIQcXev11vBjdVTROtwi7cJiK0uZKLAPVoyiBzhcJ1nRWznPXXUS43br7menF1R2WqUNxLlRGZbG3DMXO_1VTk2')" }}></div>
          <div className="relative z-10 p-12 max-w-lg text-center lg:text-left">
            <div className="mb-8 inline-flex items-center justify-center p-3 bg-primary/20 rounded-2xl border border-primary/30">
              <span className="material-symbols-outlined text-accent text-4xl"></span>
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-accent bg-clip-text text-transparent">
              The next generation of identity.
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Secure your digital life with advanced biometric patterns and AI-driven facial analysis. Zero-knowledge encryption, 99.9% accuracy.
            </p>
          </div>
          <div className="absolute bottom-10 left-12 right-12 flex justify-between items-center text-slate-500 text-xs tracking-widest uppercase">
            <span>System Status: Online</span>
            <span>v2.4.0 Stabilized</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-2">Create Account</h2>
              <p className="text-slate-500 dark:text-slate-400">Join the secure biometric network today.</p>
            </div>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Full Name</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
                    <input value={nome} onChange={(e)=>setNome(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-500" placeholder="Johnathan Doe" type="text"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Work Email</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-500" placeholder="john@company.ai" type="email"/>
                  </div>
                </div>
                <div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Password</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
                    <input value={senha} onChange={(e)=>setSenha(e.target.value)} className="w-full pl-10 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-500" placeholder="••••••••••••" type="password"/>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">visibility</span>
                  </div>
                </div>
              </div>
              </div>
              <div className="p-5 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <span className="material-symbols-outlined text-accent"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Enable Facial Login</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Fast & secure biometric access</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 rounded border-slate-300 dark:border-slate-800 text-primary focus:ring-primary" type="checkbox"/>
                <span className="text-xs text-slate-500 dark:text-slate-400">By creating an account, I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.</span>
              </div>
              <button disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2" type="submit">
                {loading ? 'Criando...' : 'Create Account'}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-slate-200 dark:border-slate-800"></div>
                <span className="px-4 text-xs text-slate-500 uppercase tracking-widest font-medium">Or register with</span>
                <div className="flex-1 h-px bg-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" type="button">
                  <span className="text-sm font-semibold">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" type="button">
                  <span className="text-sm font-semibold">GitHub</span>
                </button>
              </div>
              <p className="text-center text-sm text-slate-500 mt-8">
                Already have an account? <a className="text-primary font-bold hover:underline" href="#">Sign in here</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
