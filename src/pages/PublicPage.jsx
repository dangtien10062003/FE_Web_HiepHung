import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { usePublicData } from '../hooks/usePublicData'

export function PublicPage({ title, children }) {
  const data = usePublicData(title)
  const location = useLocation()

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section'))
    sections.forEach((section) => section.classList.remove('section-visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <Header store={data.store} />
      {children(data)}
      <Footer store={data.store} />
    </>
  )
}
