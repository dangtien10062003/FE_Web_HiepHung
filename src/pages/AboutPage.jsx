import { AboutSection } from '../components/sections/AboutSection'
import { PublicPage } from './PublicPage'

export function AboutPage() {
  return (
    <PublicPage title="Giới thiệu - Giặt Sấy Hiệp Hưng">
      {() => <AboutSection />}
    </PublicPage>
  )
}
