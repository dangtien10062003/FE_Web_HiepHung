import { PricesSection } from '../components/sections/PricesSection'
import { PublicPage } from './PublicPage'

export function PricesPage() {
  return (
    <PublicPage title="Bảng giá - Giặt Sấy Hiệp Hưng">
      {({ prices, loading, error }) => <PricesSection prices={prices} loading={loading} error={error} />}
    </PublicPage>
  )
}
