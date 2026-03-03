export default function Footer() {
  return (
    <footer className="px-6 lg:px-20 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-2xl"></span>
          <span className="text-slate-900 dark:text-white font-bold">Visionary AI</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 Visionary AI Technologies Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Status</a>
        </div>
      </div>
    </footer>
  )
}
