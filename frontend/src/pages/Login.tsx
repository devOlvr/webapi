import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiPost } from '../lib/api'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await apiPost('/auth/login', { email, senha: password })
      navigate('/dashboard')
    } catch (err: any) {
      setError(err?.message || 'Falha ao autenticar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="flex min-h-screen w-full">
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkd7jjgjTGqo8x_Jy5kzEGSKc2ogAkHA2Ueqkt31ClCyT9y-yS_6GWlY-fzK6YTL22RDyaHD9qqx7QOMF3hAOXcudQuTPZZGP-r5FB_6-j94Wvz6os-WljZAmKjTpsdGnLsTABOEzbtXc_tO5yWLrod3LZw_jbv2vGc2KCiW6Zgb7cuDYSd8kCJojZv0Ue-Po4tM5QJvLDuR0TGXNeHL9UkhGqXg2xjD0O9ktIhRa7S6ritUiYBmZgsQv3bHlQkMKDE7vwAZfUhlK0')" }}
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(19, 91, 236, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
          <div className="relative z-30 flex flex-col justify-end p-20 w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl"></span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight">AIFace ID</h1>
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-4">The future of <span className="text-primary">secure</span> identification.</h2>
            <p className="text-slate-400 text-lg max-w-md">Our neural networks analyze 30,000+ points of facial topography for sub-second, enterprise-grade authentication.</p>
            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-accent-neon">99.9%</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Accuracy</span>
              </div>
              <div className="flex flex-col border-l border-slate-700 pl-8">
                <span className="text-2xl font-bold text-accent-neon">256-bit</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Encryption</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white dark:bg-background-dark">
          <div className="w-full max-w-md space-y-8">
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white text-xl">
                <span className="material-symbols-outlined">face_unlock</span>
              </div>
              <h1 className="text-2xl font-bold dark:text-white">AIFace ID</h1>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400">Enter your credentials to access your dashboard</p>
            </div>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[20px]"></span>
                  </div>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} className="block w-full pl-11 pr-4 h-14 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none dark:text-white" id="email" placeholder="name@company.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                  <a className="text-sm text-primary hover:underline font-medium" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[20px]"></span>
                  </div>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} className="block w-full pl-11 pr-12 h-14 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none dark:text-white" id="password" placeholder="••••••••" type="password"/>
                  <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <input className="h-5 w-5 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" id="remember-me" type="checkbox"/>
                <label className="ml-3 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">
                  Remember this device
                </label>
              </div>
              <button disabled={loading} className="w-full flex items-center justify-center h-14 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="submit">
                {loading ? 'Entrando...' : 'Sign In'}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-background-dark text-slate-500">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-12 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <span className="text-sm font-medium dark:text-slate-200">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-12 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <span className="text-sm font-medium dark:text-slate-200">GitHub</span>
              </button>
            </div>
            <p className="text-center text-sm text-slate-500">
              Don't have an account? <a className="text-primary font-bold hover:underline" href="#">Start your 14-day free trial</a>
            </p>
            <div className="pt-8 flex justify-center gap-6 text-[12px] text-slate-400 font-medium">
              <a className="hover:text-primary" href="#">Privacy Policy</a>
              <a className="hover:text-primary" href="#">Terms of Service</a>
              <a className="hover:text-primary" href="#">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
