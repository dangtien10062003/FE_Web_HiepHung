import { BadgeCheck, CheckCircle2, Clock, PackageCheck, Shirt, Sparkles, Truck, WashingMachine } from 'lucide-react'
import heroImage from '../../assets/laundry-hero.png'

export function HomeThemeServicesSection({ services }) {
  const icons = [WashingMachine, Shirt, PackageCheck, Sparkles, CheckCircle2, Truck, BadgeCheck, Clock]
  const featured = services.slice(0, 8)
  return (
    <section className="home-theme-section home-service-showcase">
      <div className="container-page">
        <div className="theme-heading">
          <p>Dịch vụ tại tiệm</p>
          <h2>CHĂM SÓC ĐỒ THEO TỪNG NHU CẦU</h2>
        </div>
        <div className="home-service-orbit">
          <div className="home-service-photo">
            <img src={heroImage} alt="Dịch vụ giặt sấy Hiệp" />
          </div>
          <div className="home-service-list">
            {featured.map((service, index) => {
              const Icon = icons[index % icons.length]
              return (
                <article className="home-service-item" key={service.id || service.name}>
                  <span className="home-service-icon"><Icon size={24} /></span>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
