import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { usePublicData } from '../hooks/usePublicData'

export function PublicPage({ title, children }) {
  const data = usePublicData(title)
  return (
    <>
      <Header store={data.store} />
      {children(data)}
      <Footer store={data.store} />
    </>
  )
}
