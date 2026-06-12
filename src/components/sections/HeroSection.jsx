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
    <section id="home" className="section hero-shell pb-12 pt-6 sm:pb-16 sm:pt-10">
      <div className="container-page relative grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
        <div className="relative z-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="trust-badge">Nhận lịch trong ngày</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              <BadgeCheck size={17} className="text-sky-700" /> Giặt sấy gia đình, giao nhận quanh khu vực
            </span>
          </div>
          <h1 className="max-w-3xl text-[2.35rem] font-black leading-[1.06] text-slate-950 sm:text-5xl lg:text-7xl">
            Giặt Sấy Hiệp
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
            Khách chỉ cần chọn dịch vụ, ghi tình trạng đồ và giờ nhận. Hiệp gọi xác nhận lại trước khi xử lý các món cần báo giá riêng.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link className="btn-primary" to="/dat-lich">Đặt lịch ngay <ChevronRight size={18} /></Link>
            <Link className="btn-secondary" to="/bang-gia">Xem bảng giá</Link>
          </div>
          <div className="mt-7 grid gap-3 text-sm text-slate-700 sm:mt-8 sm:grid-cols-3">
            {notes.map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="text-sky-700" size={18} /> {item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual grid gap-4">
          <div className="relative overflow-hidden rounded-md border border-sky-100 bg-white shadow-xl shadow-sky-100">
            <img src={heroImage} alt="Tiệm giặt sấy Hiệp" className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
            <div className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-slate-950/65 to-transparent sm:block" />
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
