import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Phone, WashingMachine, X } from 'lucide-react'
import { navItems } from '../../data/siteData'

export function Header({ store }) {
  const [open, setOpen] = useState(false)
  const menu = (
    <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map(([label, href]) => (
        <Link key={href} to={href} onClick={() => setOpen(false)} className="transition hover:text-sky-700">
          {label}
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-bold text-slate-950">
          <span className="grid size-10 place-items-center rounded-md border border-sky-200 bg-sky-100 text-sky-700"><WashingMachine size={22} /></span>
          <span>{store.brandName}</span>
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
      {open && <div className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden">{menu}</div>}
    </header>
  )
}
