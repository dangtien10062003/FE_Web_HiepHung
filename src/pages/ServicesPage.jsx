import { PublicPage } from './PublicPage'
import { ServicesSection } from '../components/sections/ServicesSection'

export function ServicesPage() {
  return (
    <PublicPage title="Dịch vụ - Giặt Sấy Hiệp">
      {({ services }) => <ServicesSection services={services} />}
    </PublicPage>
  )
}
