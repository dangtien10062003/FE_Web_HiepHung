import { ClipboardCheck, MessageCircle, Shirt, Sparkles, Truck } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

export function AboutSection() {
  const timelineItems = [
    {
      icon: <MessageCircle size={22} />,
      title: 'Khách gửi yêu cầu',
      text: 'Khách đặt lịch, gửi địa chỉ Google Maps và ghi chú tình trạng đồ cần giặt sấy.',
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: 'Nhân viên kiểm đồ',
      text: 'Cửa hàng ghi lại loại đồ, số kg ước tính, vết bẩn và các món cần xử lý riêng.',
    },
    {
      icon: <Shirt size={22} />,
      title: 'Phân loại và xử lý',
      text: 'Đồ trắng/màu, dày/mỏng, dễ ra màu hoặc chất liệu đặc biệt được tách riêng trước khi giặt.',
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Báo trước phát sinh',
      text: 'Đồ cao cấp, giày hoặc vết bẩn khó sẽ được báo lại để khách xác nhận trước khi làm.',
    },
    {
      icon: <Truck size={22} />,
      title: 'Hoàn tất và giao nhận',
      text: 'Đơn được cập nhật trạng thái, đóng gói gọn và giao lại theo lịch đã hẹn.',
    },
  ]

  return (
    <section id="about" className="section about-timeline-section bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <SectionTitle
            eyebrow="Giới thiệu"
            title="Quy trình chăm đồ rõ ràng từ lúc nhận đến khi giao lại"
            description="Hiệp trình bày từng bước xử lý để khách biết đồ của mình được kiểm tra, phân loại, báo giá và giao nhận như thế nào."
          />
          <div className="line-note">
            Đồ có vết dầu, mốc, lem màu hoặc chất liệu đặc biệt nên ghi chú trước khi đặt lịch để nhân viên tư vấn cách xử lý phù hợp.
          </div>
        </div>

        <div className="about-timeline">
          {timelineItems.map((item, index) => (
            <article key={item.title} className="about-timeline-item">
              <div className="about-timeline-marker">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.icon}
              </div>
              <div className="about-timeline-card">
                <p className="about-timeline-step">Bước {index + 1}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
