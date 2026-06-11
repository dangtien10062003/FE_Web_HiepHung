import { Sparkles } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

export function AboutSection() {
  const strengths = [
    ['Kiểm đồ lúc nhận', 'Ghi lại loại đồ, số kg ước tính và các món cần xử lý riêng.'],
    ['Phân loại trước khi giặt', 'Tách đồ trắng/màu, đồ dày/mỏng, đồ dễ ra màu để hạn chế lem màu.'],
    ['Báo khách trước khi phát sinh', 'Đồ cao cấp, vết bẩn khó hoặc giày cần làm kỹ sẽ được xác nhận trước.'],
    ['Theo dõi trạng thái', 'Đơn có trạng thái từ chờ xác nhận tới hoàn tất để nhân viên dễ xử lý.'],
  ]
  return (
    <section id="about" className="section bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionTitle eyebrow="Giới thiệu" title="Tập trung vào những điểm khách hay lo khi gửi đồ" description="Trang không chỉ nói sạch và thơm. Mỗi phần đều giải thích một việc cụ thể: nhân viên kiểm gì khi nhận, lúc nào cần báo giá thêm, và vì sao một số đơn cần xác nhận khoảng cách." />
          <div className="line-note">Đồ có vết dầu, mốc, lem màu hoặc chất liệu đặc biệt nên ghi chú trước khi đặt lịch để nhân viên tư vấn cách xử lý.</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map(([title, text]) => (
            <div key={title} className="info-panel p-5">
              <Sparkles className="mb-4 text-sky-600" size={22} />
              <p className="font-bold text-slate-950">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
