import { BookingSection } from '../components/sections/BookingSection'
import { HeroSection } from '../components/sections/HeroSection'
import { HomeThemeGalleryReviewSection } from '../components/sections/HomeThemeGalleryReviewSection'
import { HomeThemePricesSection } from '../components/sections/HomeThemePricesSection'
import { HomeThemeServicesSection } from '../components/sections/HomeThemeServicesSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { PublicPage } from './PublicPage'

export function LandingPage() {
  return (
    <PublicPage title="Giặt Sấy Hiệp - Đặt lịch giặt sấy giao nhận tận nhà">
      {({ store, services, prices }) => (
        <>
          <HeroSection store={store} />
          <HomeThemeServicesSection services={services} />
          <HomeThemePricesSection prices={prices} />
          <ProcessSection />
          <HomeThemeGalleryReviewSection />
          <BookingSection services={services} />
        </>
      )}
    </PublicPage>
  )
}
