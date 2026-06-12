import { BadgeCheck, PackageCheck, Shirt, Sparkles, Truck, WashingMachine } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

export function ProcessSection() {
  const steps = [
    ['Nhận hàng và tư vấn', 'Tiếp nhận đồ, kiểm tra tình trạng và tư vấn dịch vụ phù hợp.', Shirt, 'left'],
    ['Phân loại và xử lý điểm bẩn', 'Tách màu, tách chất liệu và xử lý trước các vết bẩn cần chăm sóc riêng.', PackageCheck, 'left'],
    ['Giặt / Wash / Hấp', 'Giặt, hấp hoặc vệ sinh theo đúng nhóm vải và yêu cầu của khách.', WashingMachine, 'left'],
    ['Sấy / Ủi / Spa', 'Sấy khô, ủi phẳng, làm thơm và chăm form trước khi hoàn thiện.', Sparkles, 'right'],
    ['Gấp xếp - đóng gói', 'Gấp gọn, kiểm lại từng món và đóng gói sạch sẽ trước khi giao.', BadgeCheck, 'right'],
    ['Giao hàng', 'Giao tận nơi, xác nhận hoàn tất và tiếp nhận phản hồi sau dịch vụ.', Truck, 'right'],
  ]
  const leftSteps = steps.filter((step) => step[3] === 'left').reverse()
  const rightSteps = steps.filter((step) => step[3] === 'right')
  return (
    <section id="quytrinh" className="section process-section bg-sky-50">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            eyebrow="Quy trình"
            title="Quy trình làm việc"
            description="Mỗi đơn hàng được đi qua 6 bước rõ ràng: nhận đồ, phân loại, xử lý, hoàn thiện, đóng gói và giao lại đúng hẹn."
          />
          <div className="process-wave" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="process-infographic">
          <div className="process-dots" aria-hidden="true" />
          <div className="process-ring" aria-hidden="true" />
          <div className="process-column process-column-left">
            {leftSteps.map(([step, text, Icon], index) => (
              <ProcessItem key={step} index={3 - index} title={step} text={text} Icon={Icon} side="left" />
            ))}
          </div>
          <div className="process-center" aria-label="Giặt Sấy Hiệp">
            <span className="process-center-icon"><WashingMachine size={54} /></span>
            <strong>Giặt Sấy<br />Hiệp</strong>
            <small>Sạch - thơm - đúng hẹn</small>
          </div>
          <div className="process-column process-column-right">
            {rightSteps.map(([step, text, Icon], index) => (
              <ProcessItem key={step} index={index + 4} title={step} text={text} Icon={Icon} side="right" />
            ))}
          </div>
        </div>
        <div className="process-mobile-list">
          {steps.map(([step, text, Icon], index) => (
            <ProcessItem key={step} index={index + 1} title={step} text={text} Icon={Icon} side="right" />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessItem({ index, title, text, Icon, side }) {
  return (
    <article className={`process-item process-item-${side}`}>
      <div className="process-pill">
        <span>{String(index).padStart(2, '0')}. {title}</span>
      </div>
      <p>{text}</p>
      <div className="process-icon">
        <Icon size={30} />
      </div>
    </article>
  )
}
