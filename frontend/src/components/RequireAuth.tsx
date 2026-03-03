import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { apiGet, apiPost } from '../lib/api'

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'fail'>('loading')
  useEffect(() => {
    let mounted = true
    apiGet('/auth/me')
      .then(() => mounted && setStatus('ok'))
      .catch(async () => {
        try {
          await apiPost('/auth/refresh', {})
          await apiGet('/auth/me')
          if (mounted) setStatus('ok')
        } catch {
          if (mounted) setStatus('fail')
        }
      })
    return () => {
      mounted = false
    }
  }, [])
  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen"><span className="material-symbols-outlined animate-spin">progress_activity</span></div>
  }
  if (status === 'fail') {
    return <Navigate to="/login" replace />
  }
  return children
}
