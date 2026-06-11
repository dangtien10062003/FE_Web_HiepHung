import { CheckCircle2 } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

export function TestimonialsFaqSection() {
  const faqs = [
    ['Bao lâu thì giao lại đồ?', 'Thông thường 24-48 giờ tùy dịch vụ và khối lượng. Đơn gấp sẽ được nhân viên xác nhận riêng.'],
    ['Có nhận giao tận nhà không?', 'Có, Hiệp Hưng hỗ trợ giao nhận tận nhà trong khu vực bán kính 3km.'],
    ['Có giặt đồ cao cấp không?', 'Có nhận đồ cao cấp, vest, áo khoác và các chất liệu cần xử lý riêng.'],
    ['Bán kính 3km tính như thế nào?', 'Backend có DistanceService để tính bằng tọa độ cửa hàng và tọa độ khách theo công thức Haversine.'],
    ['Tôi có thể đổi giờ hẹn không?', 'Có, khách có thể gọi hotline hoặc nhắn Zalo trước giờ hẹn để được hỗ trợ đổi lịch.'],
  ]
  return (
    <section className="section bg-sky-50">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Ghi nhận" title="Những chi tiết khách thường hỏi trước khi gửi đồ" />
          <div className="grid gap-4">
            {['Đồ trắng và đồ màu có được tách riêng không?', 'Nếu đồ chưa khô kỹ có được sấy thêm không?', 'Giá chăn ga tính theo bộ hay theo kích thước?', 'Giày có khử mùi và làm khô riêng không?'].map((quote) => (
              <div key={quote} className="info-panel flex items-center gap-3 p-5 text-slate-800">
                <CheckCircle2 className="shrink-0 text-sky-700" size={20} />
                <p className="font-semibold">{quote}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="FAQ" title="Câu hỏi thường gặp" />
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="card p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
