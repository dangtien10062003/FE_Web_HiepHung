import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react'
import { FloatingActions } from './FloatingActions'

export function Footer({ store }) {
  return (
    <footer id="contact" className="bg-slate-950 px-4 py-10 text-slate-200 sm:px-6 lg:px-8">
      <div className="container-page grid gap-6 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-white">{store.brandName}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{store.deliveryPolicy}</p>
        </div>
        <p className="flex gap-2 text-sm"><MapPin size={18} /> {store.address}</p>
        <p className="flex gap-2 text-sm"><Clock size={18} /> {store.openingHours}</p>
        <div className="flex flex-col gap-3">
          <a className="inline-flex items-center gap-2 font-semibold text-white" href={`tel:${store.hotline}`}><Phone size={18} /> {store.hotline}</a>
          <a className="inline-flex items-center gap-2" href={store.zaloUrl}>Zalo</a>
          <a className="inline-flex items-center gap-2" href={store.facebookUrl}><ExternalLink size={18} /> Facebook</a>
        </div>
      </div>
      <FloatingActions store={store} />
    </footer>
  )
}
