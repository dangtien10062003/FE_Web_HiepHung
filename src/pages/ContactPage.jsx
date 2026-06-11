import { ContactSection } from '../components/sections/ContactSection'
import { TestimonialsFaqSection } from '../components/sections/TestimonialsFaqSection'
import { PublicPage } from './PublicPage'

export function ContactPage() {
  return (
    <PublicPage title="Liên hệ - Giặt Sấy Hiệp">
      {({ store }) => (
        <>
          <ContactSection store={store} />
          <TestimonialsFaqSection />
        </>
      )}
    </PublicPage>
  )
}
