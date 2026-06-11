import { LoaderCircle } from 'lucide-react'
import { StateLine } from '../common/FormControls'
import { SectionTitle } from '../common/SectionTitle'

export function PricesSection({ prices, loading, error }) {
  return (
    <section id="prices" className="section price-reference-section bg-white">
      <div className="container-page">
        <SectionTitle eyebrow="Bảng giá" title="Giá để khách tự ước lượng trước khi gọi" description="Bố cục bảng giá giữ kiểu dễ đọc như bảng treo tại quầy: tên dịch vụ, mức giá, và ghi chú khi nào cần xác nhận thêm." />
        {loading && <StateLine icon={<LoaderCircle className="animate-spin" />} text="Đang tải bảng giá..." />}
        {error && <StateLine text="Bảng giá đang tạm hiển thị theo dữ liệu lưu sẵn, nhân viên sẽ xác nhận lại khi nhận đơn." />}
        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="hidden overflow-hidden rounded-md border border-sky-100 bg-white shadow-sm md:block">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-sky-50 text-slate-700">
                <tr>
                  <th className="px-5 py-4">Dịch vụ</th>
                  <th className="px-5 py-4">Giá tham khảo</th>
                  <th className="px-5 py-4">Ghi chú tại quầy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100">
                {prices.map((item) => (
                  <tr key={item.id || item.name} className="transition hover:bg-sky-50">
                    <td className="px-5 py-4 font-semibold text-slate-900">{item.name}</td>
                    <td className="px-5 py-4 text-lg font-bold text-sky-700">{item.priceText}</td>
                    <td className="px-5 py-4 text-slate-600">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-3 md:hidden">
            {prices.map((item) => (
              <article key={item.id || item.name} className="rounded-md border border-sky-100 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-snug text-slate-950">{item.name}</h3>
                  <strong className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-sm font-black text-sky-700">{item.priceText}</strong>
                </div>
                {item.note && <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>}
              </article>
            ))}
          </div>
          <aside className="info-panel p-5">
            <h3 className="text-lg font-bold text-slate-950">Trước khi chốt giá</h3>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
              <p>Đồ quá dày, vết bẩn lâu ngày hoặc chất liệu cần giữ form sẽ được báo lại trước khi xử lý.</p>
              <p>Đơn giao nhận ngoài bán kính 3km cần nhân viên xác nhận thêm khoảng cách.</p>
              <p>Khách có thể ghi chú “không dùng mùi thơm mạnh” trong form đặt lịch.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
