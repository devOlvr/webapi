import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 text-primary">
        <span className="material-symbols-outlined text-3xl font-bold"></span>
        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Visionary AI</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-8">
          <NavLink className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`} to="/">Home</NavLink>
          <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Features</a>
          <NavLink className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'}`} to="/dashboard">Dashboard</NavLink>
        </nav>
        <div className="flex gap-3">
          <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            Login
          </Link>
          <Link to="/register" className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            Register
          </Link>
        </div>
      </div>
    </header>
  )
}
