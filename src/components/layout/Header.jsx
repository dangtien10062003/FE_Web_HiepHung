import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../../assets/hiep-hung-logo.png'
import { navItems } from '../../data/siteData'

export function Header({ store }) {
  const [open, setOpen] = useState(false)
  const goHomeTop = () => {
    setOpen(false)
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  const menu = (
    <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-700 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map(([label, href]) => (
        <Link key={href} to={href} onClick={href === '/' ? goHomeTop : () => setOpen(false)} className="rounded-md px-3 py-3 transition hover:bg-sky-50 hover:text-sky-700 lg:px-0 lg:py-0 lg:hover:bg-transparent">
          {label}
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-14 items-center justify-between px-4 sm:min-h-16 sm:px-6 lg:px-8">
        <Link to="/" onClick={goHomeTop} className="flex shrink-0 items-center">
          <img className="h-10 w-auto sm:h-14" src={logo} alt={store.brandName} />
        </Link>
        <div className="hidden lg:block">{menu}</div>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700" href={`tel:${store.hotline}`}>
            <Phone size={17} /> {store.hotline}
          </a>
          <Link className="btn-primary py-2.5" to="/dat-lich">Đặt lịch ngay</Link>
        </div>
        <button aria-label="Mở menu" className="rounded-md border border-sky-200 bg-white p-2 lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="border-t border-sky-100 bg-white px-4 py-2 shadow-sm lg:hidden">{menu}</div>}
    </header>
  )
}
