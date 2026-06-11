import { Link } from 'react-router-dom'
import { CheckCircle2, ChevronRight, PackageCheck, Shirt, Sparkles, Truck, WashingMachine } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

export function ServicesSection({ services }) {
  const icons = [WashingMachine, Shirt, PackageCheck, Sparkles, CheckCircle2, Truck]
  const serviceNotes = ['Quần áo hằng ngày', 'Đồ cần giữ form', 'Chăn ga gia đình', 'Giày dép cần khử mùi', 'Đồ công sở', 'Nhận trả tận nhà']
  return (
    <section id="services" className="section bg-sky-50">
      <div className="container-page">
        <SectionTitle eyebrow="Dịch vụ" title="Chọn theo món đồ, không bắt khách đọc một đoạn dài" description="Các dịch vụ được tách theo tình huống sử dụng thực tế để khách biết đồ của mình nên gửi vào nhóm nào." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length]
            return (
              <article key={service.id || service.name} className="card grid min-h-56 grid-rows-[auto_1fr_auto] p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <Icon className="text-sky-700" size={30} />
                  <span className="status-chip">{serviceNotes[index % serviceNotes.length]}</span>
                </div>
                <div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{service.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </div>
                <Link to="/dat-lich" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700">Đặt dịch vụ này <ChevronRight size={16} /></Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
