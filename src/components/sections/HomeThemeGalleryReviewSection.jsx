import { PackageCheck, Shirt, Sparkles, Truck } from 'lucide-react'

export function HomeThemeGalleryReviewSection() {
  const gallery = [
    ['Kiểm đồ', 'Nhận và ghi chú từng nhóm đồ', Shirt],
    ['Phân loại', 'Tách màu, tách chất liệu trước khi giặt', PackageCheck],
    ['Hoàn thiện', 'Sấy, ủi, gấp và đóng gói gọn gàng', Sparkles],
    ['Giao lại', 'Sắp tuyến giao nhận trong khu vực hỗ trợ', Truck],
  ]
  return (
    <section className="home-theme-section home-gallery-review">
      <div className="container-page">
        <div className="theme-heading">
          <p>Trải nghiệm khách hàng</p>
          <h2>QUY TRÌNH RÕ RÀNG, DỄ THEO DÕI</h2>
        </div>
        <div className="home-gallery-grid">
          {gallery.map(([title, text, Icon]) => (
            <article className="home-gallery-card" key={title}>
              <Icon size={34} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="home-review-strip">
          <p>Khách có thể ghi chú mùi hương, thời gian nhận đồ, đồ cần xử lý riêng hoặc yêu cầu xác nhận giá trước khi làm.</p>
        </div>
      </div>
    </section>
  )
}
