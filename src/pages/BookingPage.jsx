import { BookingSection } from '../components/sections/BookingSection'
import { PublicPage } from './PublicPage'

export function BookingPage() {
  return (
    <PublicPage title="Đặt lịch - Giặt Sấy Hiệp">
      {({ services }) => <BookingSection services={services} />}
    </PublicPage>
  )
}
