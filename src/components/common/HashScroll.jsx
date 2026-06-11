import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = hash.slice(1)
    const timeout = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => window.clearTimeout(timeout)
  }, [hash, pathname])

  return null
}
