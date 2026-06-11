import { Link } from 'react-router-dom'

export function HomeThemePricesSection({ prices }) {
  return (
    <section className="home-theme-section home-price-menu">
      <div className="container-page">
        <div className="theme-heading">
          <p>Bảng giá tham khảo</p>
          <h2>DỄ ƯỚC LƯỢNG TRƯỚC KHI ĐẶT LỊCH</h2>
        </div>
        <div className="home-price-grid">
          {prices.slice(0, 8).map((item) => (
            <article className="home-price-row" key={item.id || item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
              <strong>{item.priceText}</strong>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link className="btn-secondary" to="/bang-gia">Xem toàn bộ bảng giá</Link>
        </div>
      </div>
    </section>
  )
}
