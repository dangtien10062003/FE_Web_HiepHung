import { Link } from 'react-router-dom'
import { BadgeCheck, CheckCircle2, ChevronRight, Phone } from 'lucide-react'
import heroImage from '../../assets/laundry-hero.png'

export function HeroSection({ store }) {
  const shopBoard = [
    ['Giờ làm việc', store.openingHours],
    ['Hoàn tất', '24 - 48 giờ'],
    ['Giao nhận', 'Trong 3km'],
  ]
  const notes = ['Kiểm đồ khi nhận', 'Báo trước phần cần xử lý riêng', 'Ghi chú mùi hương/sấy khô kỹ']

  return (
    <section id="home" className="section hero-shell pb-16 pt-10">
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="trust-badge">Nhận lịch trong ngày</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              <BadgeCheck size={17} className="text-sky-700" /> Giặt sấy gia đình, giao nhận quanh khu vực
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.04] text-slate-950 sm:text-5xl lg:text-7xl">
            Giặt Sấy Hiệp Hưng
            <span className="mt-2 block text-sky-700">gọn trong một lịch hẹn</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Khách chỉ cần chọn dịch vụ, ghi tình trạng đồ và giờ nhận. Hiệp Hưng gọi xác nhận lại trước khi xử lý các món cần báo giá riêng.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" to="/dat-lich">Đặt lịch ngay <ChevronRight size={18} /></Link>
            <Link className="btn-secondary" to="/bang-gia">Xem bảng giá</Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {notes.map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="text-sky-700" size={18} /> {item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual grid gap-4">
          <div className="relative overflow-hidden rounded-md border border-sky-100 bg-white shadow-xl shadow-sky-100">
            <img src={heroImage} alt="Tiệm giặt sấy Hiệp Hưng" className="aspect-[16/10] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/65 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="rounded-md border border-white/30 bg-white/95 p-4 shadow-lg shadow-sky-100">
                <p className="text-sm font-semibold text-slate-900">Hotline nhận lịch</p>
                <a href={`tel:${store.hotline}`} className="mt-1 flex items-center gap-2 text-lg font-bold text-sky-700"><Phone size={18} /> {store.hotline}</a>
              </div>
              <div className="hidden rounded-md bg-sky-600 px-4 py-3 text-right text-white shadow-lg sm:block">
                <p className="text-xs font-bold uppercase tracking-wide text-sky-100">Hôm nay</p>
                <p className="text-xl font-black">Ưu tiên đơn gần</p>
              </div>
            </div>
          </div>
          <div className="info-panel grid gap-3 p-4 sm:grid-cols-3">
            {shopBoard.map(([label, value]) => (
              <div key={label} className="border-b border-sky-100 pb-3 last:border-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-3 sm:last:border-r-0">
                <p className="text-xs font-bold uppercase text-slate-500">{label}</p>
                <p className="mt-1 text-base font-bold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
          <div className="water-strip" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
