import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

const mapEmbedUrl = 'https://www.google.com/maps?q=10.7942864,106.6238659&z=17&output=embed'

export function ContactSection({ store }) {
  return (
    <section className="section bg-white">
      <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle eyebrow="Liên hệ" title="Kết nối với Giặt Sấy Hiệp Hưng" description="Khách có thể gọi hotline, nhắn Zalo/Facebook hoặc xem chính sách giao nhận trước khi đặt lịch." />
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <a className="card p-5 transition hover:shadow-md" href={`tel:${store.hotline}`}><Phone className="mb-3 text-sky-700" /> <strong>{store.hotline}</strong><p className="mt-2 text-sm text-slate-600">Gọi nhanh hotline</p></a>
            <a className="card p-5 transition hover:shadow-md" href={store.zaloUrl}><ExternalLink className="mb-3 text-sky-700" /> <strong>Zalo</strong><p className="mt-2 text-sm text-slate-600">Nhắn tin xác nhận đơn</p></a>
            <a className="card p-5 transition hover:shadow-md" href={store.facebookUrl}><ExternalLink className="mb-3 text-sky-700" /> <strong>Facebook</strong><p className="mt-2 text-sm text-slate-600">Theo dõi cửa hàng</p></a>
            <div className="card p-5"><Clock className="mb-3 text-sky-700" /> <strong>Giờ làm việc</strong><p className="mt-2 text-sm text-slate-600">{store.openingHours}</p></div>
            <div className="card p-5 sm:col-span-2"><MapPin className="mb-3 text-sky-700" /> <strong>Địa chỉ</strong><p className="mt-2 text-sm text-slate-600">{store.address}</p></div>
          </div>
          <div className="contact-map-card">
            <iframe
              title="Vị trí Giặt Sấy Hiệp Hưng"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
