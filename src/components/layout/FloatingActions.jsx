import { useEffect, useState } from 'react'
import { ArrowUp, ExternalLink, MessageCircle, Phone } from 'lucide-react'

export function FloatingActions({ store }) {
  const [contactOpen, setContactOpen] = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 240)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contactMethods = [
    { label: 'SĐT', href: `tel:${store.hotline}`, icon: <Phone size={18} /> },
    { label: 'Zalo', href: store.zaloUrl, icon: <MessageCircle size={18} /> },
    { label: 'Mess', href: store.facebookUrl, icon: <ExternalLink size={18} /> },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="floating-contact" aria-label="Thao tác nhanh">
      {contactOpen && (
        <div className="floating-contact-menu">
          {contactMethods.map((method) => (
            <a key={method.label} className="floating-contact-item" href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={`Liên hệ ${method.label}`}>
              {method.icon}
              <span>{method.label}</span>
            </a>
          ))}
        </div>
      )}
      <button className="floating-contact-main" type="button" onClick={() => setContactOpen((current) => !current)} aria-expanded={contactOpen} aria-label="Mở phương thức liên hệ">
        <MessageCircle size={21} />
        <span>Liên hệ</span>
      </button>
      {showBackTop && (
        <button className="floating-backtop" type="button" onClick={scrollToTop} aria-label="Quay lại đầu trang">
          <ArrowUp size={20} />
          <span>Top</span>
        </button>
      )}
    </div>
  )
}
