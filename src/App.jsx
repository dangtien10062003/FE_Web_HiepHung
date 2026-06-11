import { Route, Routes } from 'react-router-dom'
import { HashScroll } from './components/common/HashScroll'
import { AboutPage } from './pages/AboutPage'
import { BookingPage } from './pages/BookingPage'
import { ContactPage } from './pages/ContactPage'
import { LandingPage } from './pages/LandingPage'
import { PricesPage } from './pages/PricesPage'
import { ProcessPage } from './pages/ProcessPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trang-chu" element={<LandingPage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/dich-vu" element={<ServicesPage />} />
        <Route path="/bang-gia" element={<PricesPage />} />
        <Route path="/quy-trinh" element={<ProcessPage />} />
        <Route path="/dat-lich" element={<BookingPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
