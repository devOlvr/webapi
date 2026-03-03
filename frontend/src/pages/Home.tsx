export default function Home() {
  return (
    <main className="flex-1">
          <div className="px-6 lg:px-20 py-12 lg:py-20">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold w-fit uppercase tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      Live Neural Engine v4.0
                    </span>
                    <h1 className="text-slate-900 dark:text-white text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                      Secure Every <span className="text-primary italic">Face</span> In Real-Time.
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
                      The world's fastest 3D biometric identification system. Enterprise-grade security powered by next-generation synthetic neural networks.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:scale-[1.02] transition-all shadow-xl shadow-primary/30">
                      Get Started Now
                    </button>
                    <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                      View Demo
                    </button>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-transparent group">
                    <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay"></div>
                    <img
                      alt="Facial recognition scan visualization"
                      className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGKom3GIF7HvmmU3o9UWY44zkHFISzGC07rygCaWvpZ8vHiVLVxfqJ5ugQe5XYxQVS-EjWRJXq2FJcC7esV96JPGGCPHkwfLT-iXQ056M2ORHnoIXeBj5sFjHVSDvCpMbCq2TQ9QiWgUYkeufHHgR55qtw916uuW5k34vZHNQR09ZM1IJJ3Cd4oZD0dUE8e5yF4fYtiGtpjpPUD3CyzSzyFC05Cy38zWiHoYRkeq56uBhQXJW3RB3v7Jic6lUp1VK_Z0TIn23pezxX"
                    />
                    <div className="absolute inset-0 border-[1px] border-primary/30 pointer-events-none"></div>
                    <div className="absolute top-1/4 left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_15px_rgba(19,91,236,0.8)] animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-green-500"></span>
                        </div>
                        <div>
                          <p className="text-white text-xs font-bold uppercase tracking-widest">Match Found</p>
                          <p className="text-slate-400 text-[10px]">Confidence: 99.82%</p>
                        </div>
                      </div>
                      <span className="text-primary text-xs font-mono">ID: #4829-X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 lg:px-20 py-10 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary mb-2">verified</span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Accuracy</p>
                <div className="flex items-end gap-3">
                  <p className="text-slate-900 dark:text-white text-4xl font-bold leading-none">99.9%</p>
                  <p className="text-emerald-500 text-sm font-bold mb-1">+0.2%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary mb-2">bolt</span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Response Time</p>
                <div className="flex items-end gap-3">
                  <p className="text-slate-900 dark:text-white text-4xl font-bold leading-none">&lt; 50ms</p>
                  <p className="text-primary text-sm font-bold mb-1">Ultra Low</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary mb-2">public</span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Deployments</p>
                <div className="flex items-end gap-3">
                  <p className="text-slate-900 dark:text-white text-4xl font-bold leading-none">12,000+</p>
                  <p className="text-emerald-500 text-sm font-bold mb-1">+15% MoM</p>
                </div>
              </div>
            </div>
          </div>
          <section className="px-6 lg:px-20 py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto">
              <div className="mb-16 flex flex-col gap-4">
                <h2 className="text-slate-900 dark:text-white text-4xl font-bold tracking-tight">Enterprise-Grade Infrastructure</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">Our modular AI architecture is built for scale, privacy, and uncompromising reliability in high-stakes environments.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[['','Real-time Detection','Proprietary vision algorithms that identify and track faces in crowded environments with sub-second latency.'],
                  ['','Secure Biometrics','End-to-end encrypted biometric templates stored on-site or in our ultra-secure SOC2 compliant cloud.'],
                  ['','Privacy First','Integrated PII masking and automated data deletion policies to ensure total compliance with GDPR and local laws.']]
                  .map(([icon,title,desc]) => (
                    <div key={title} className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
                      <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">{icon as string}</span>
                      </div>
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">{title as string}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc as string}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <section className="px-6 lg:px-20 py-24">
            <div className="max-w-[1280px] mx-auto rounded-[3rem] bg-primary p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl">
                  <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">Ready to secure your future?</h2>
                  <p className="text-white/80 text-xl">Join over 10,000 organizations already using Visionary AI to streamline their security infrastructure.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-5 bg-white text-primary rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                    Create Free Account
                  </button>
                  <button className="px-10 py-5 bg-primary-dark/20 text-white border border-white/30 backdrop-blur-md rounded-2xl text-xl font-bold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
  )
}
