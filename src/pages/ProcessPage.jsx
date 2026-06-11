import { ProcessSection } from '../components/sections/ProcessSection'
import { PublicPage } from './PublicPage'

export function ProcessPage() {
  return (
    <PublicPage title="Quy trình - Giặt Sấy Hiệp Hưng">
      {() => <ProcessSection />}
    </PublicPage>
  )
}
