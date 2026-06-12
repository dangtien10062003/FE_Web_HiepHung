import { Link } from 'react-router-dom'
import logo from '../../assets/hiep-hung-logo.png'
import { FloatingActions } from './FloatingActions'

export function Footer({ store }) {
  const supportLinks = [
    ['Tìm kiếm', '/'],
    ['Giới thiệu', '/gioi-thieu'],
    ['Dịch vụ', '/dich-vu'],
    ['Bảng giá', '/bang-gia'],
  ]
  const policyLinks = [
    'Chính sách giao nhận',
    'Chính sách giặt sấy',
    'Chính sách bảo quản',
    'Điều khoản sử dụng',
    'Chính sách thanh toán',
  ]

  return (
    <footer id="contact" className="site-footer footer-compact">
      <div className="footer-main px-4 py-7 sm:px-6 lg:px-8">
        <div className="container-page footer-grid">
          <div className="footer-compact-brand">
            <img className="footer-logo" src={logo} alt={store.brandName} />
            <p className="footer-tagline">{store.deliveryPolicy}</p>

            <div className="footer-contact-text">
              <p><strong>Địa chỉ:</strong> {store.address}</p>
              <p><strong>Giờ làm việc:</strong> {store.openingHours}</p>
              <p><strong>Hotline:</strong> <a href={`tel:${store.hotline}`}>{store.hotline}</a></p>
              <p><strong>Zalo:</strong> <a href={store.zaloUrl}>Nhắn tin Zalo</a></p>
              <p><strong>Facebook:</strong> <a href={store.facebookUrl}>Fanpage Hiệp</a></p>
            </div>
          </div>

          <div className="footer-column">
            <h3>Hỗ trợ</h3>
            {supportLinks.map(([label, path]) => (
              <Link key={label} to={path}>{label}</Link>
            ))}
          </div>

          <div className="footer-column">
            <h3>Chính sách</h3>
            {policyLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="footer-column footer-hotline-column">
            <h3>Tổng Đài Hỗ Trợ</h3>
            <p>Tư vấn đặt lịch: <a href={`tel:${store.hotline}`}>{store.hotline}</a></p>
            <p>Hotline cửa hàng: <a href={`tel:${store.hotline}`}>{store.hotline}</a></p>
            <p>Zalo hỗ trợ: <a href={store.zaloUrl}>{store.hotline}</a></p>
            <p>Giờ hỗ trợ: <strong>{store.openingHours}</strong></p>
            <a className="footer-map-link" href={store.googleMapUrl} target="_blank" rel="noreferrer">
              Xem vị trí Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom px-4 py-3 text-center text-xs">
        © Bản quyền thuộc về {store.brandName}. Dịch vụ giặt sấy và giao nhận tận nơi.
      </div>

      <FloatingActions store={store} />
    </footer>
  )
}
