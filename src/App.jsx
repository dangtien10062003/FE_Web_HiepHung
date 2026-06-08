import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  LoaderCircle,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Shirt,
  Sparkles,
  Truck,
  WashingMachine,
  X,
} from 'lucide-react'
import heroImage from './assets/laundry-hero.png'
import { api } from './services/api'

const navItems = [
  ['Trang chủ', '/'],
  ['Giới thiệu', '/gioi-thieu'],
  ['Dịch vụ', '/dich-vu'],
  ['Bảng giá', '/bang-gia'],
  ['Quy trình', '/quy-trinh'],
  ['Đặt lịch', '/dat-lich'],
  ['Liên hệ', '/lien-he'],
]

const fallbackServices = [
  { id: 1, name: 'Giặt sấy theo kg', description: 'Phân loại màu, giặt sạch và sấy thơm cho nhu cầu hằng ngày.' },
  { id: 2, name: 'Giặt hấp / giặt khô', description: 'Xử lý vest, áo khoác và đồ cao cấp cần chăm sóc kỹ.' },
  { id: 3, name: 'Giặt chăn ga gối nệm', description: 'Làm sạch chăn ga, gối, nệm mỏng theo từng bộ.' },
  { id: 4, name: 'Giặt giày dép', description: 'Vệ sinh giày, khử mùi và làm khô đúng cách.' },
  { id: 5, name: 'Ủi đồ', description: 'Ủi thẳng áo sơ mi, quần tây, đồng phục và trang phục công sở.' },
  { id: 6, name: 'Giao nhận tận nhà', description: 'Nhận và trả đồ trong khu vực bán kính 3km.' },
]

const fallbackPrices = [
  { id: 1, name: 'Giặt thường', priceText: '15.000đ/kg', note: 'Phù hợp quần áo thường ngày' },
  { id: 2, name: 'Giặt + sấy thơm', priceText: '25.000đ/kg', note: 'Sấy khô, thơm lâu' },
  { id: 3, name: 'Giặt hấp vest / áo khoác / đồ cao cấp', priceText: 'Từ 50.000đ/cái', note: 'Xử lý theo chất liệu' },
  { id: 4, name: 'Giặt chăn ga gối nệm', priceText: '40.000đ - 80.000đ/bộ', note: 'Tùy kích thước' },
  { id: 5, name: 'Giặt giày', priceText: 'Từ 50.000đ/đôi', note: 'Vệ sinh, khử mùi' },
  { id: 6, name: 'Ủi đồ', priceText: 'Từ 10.000đ/cái', note: 'Ủi phẳng, treo gọn' },
]

const defaultStore = {
  brandName: 'Giặt Sấy Hiệp Hưng',
  address: 'Địa chỉ cửa hàng đang cập nhật',
  hotline: '0900 000 000',
  zaloUrl: 'https://zalo.me/0900000000',
  facebookUrl: 'https://facebook.com/',
  openingHours: '7:00 - 21:00 hằng ngày',
  deliveryPolicy: 'Hỗ trợ giao nhận trong bán kính 3km',
}

function Header({ store }) {
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

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-sky-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  )
}

function Hero({ store }) {
  const shopBoard = [
    ['Nhận đồ', '7:00 - 19:30'],
    ['Hoàn tất', '24 - 48 giờ'],
    ['Giao nhận', 'Trong 3km'],
  ]
  const notes = ['Kiểm đồ khi nhận', 'Báo trước phần cần xử lý riêng', 'Ghi chú mùi hương/sấy khô kỹ']

  return (
    <section id="home" className="section bg-sky-50 pb-14 pt-10">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="trust-badge">Quy trình rõ ràng</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              <BadgeCheck size={17} className="text-sky-700" /> Tiệm giặt sấy gia đình, nhận đồ theo lịch hẹn
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Giặt Sấy Hiệp Hưng
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Đặt lịch nhận đồ tận nhà, chọn đúng nhóm dịch vụ và xem trước giá tham khảo. Thông tin được trình bày theo cách khách đi giặt thật cần: khu vực, giờ nhận, tình trạng đồ và thời gian trả.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" to="/dat-lich">Đặt lịch ngay <ChevronRight size={18} /></Link>
            <Link className="btn-secondary" to="/bang-gia">Xem bảng giá</Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {notes.map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="text-sky-700" size={18} /> {item}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-md border border-sky-100 bg-white shadow-lg shadow-sky-100">
            <img src={heroImage} alt="Tiệm giặt sấy Hiệp Hưng" className="aspect-[16/10] w-full object-cover" />
            <div className="absolute bottom-4 left-4 max-w-[75%] rounded-md border border-sky-100 bg-white/95 p-4 shadow-lg shadow-sky-100">
              <p className="text-sm font-semibold text-slate-900">Hotline nhận lịch</p>
              <a href={`tel:${store.hotline}`} className="mt-1 flex items-center gap-2 text-lg font-bold text-sky-700"><Phone size={18} /> {store.hotline}</a>
            </div>
          </div>
          <div className="info-panel grid gap-3 p-4 sm:grid-cols-3">
            {shopBoard.map(([label, value]) => (
              <div key={label} className="border-b border-sky-100 pb-3 last:border-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-3 sm:last:border-r-0">
                <p className="text-xs font-bold uppercase text-slate-500">{label}</p>
                <p className="mt-1 text-base font-bold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
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

function Services({ services }) {
  const icons = [WashingMachine, Shirt, PackageCheck, Sparkles, CheckCircle2, Truck]
  const serviceNotes = ['Quần áo hằng ngày', 'Đồ cần giữ form', 'Chăn ga gia đình', 'Giày dép cần khử mùi', 'Đồ công sở', 'Nhận trả tận nhà']
  return (
    <section id="services" className="section bg-sky-50">
      <div className="container-page">
        <SectionTitle eyebrow="Dịch vụ" title="Chọn theo món đồ, không bắt khách đọc một đoạn dài" description="Các dịch vụ được tách theo tình huống sử dụng thực tế để khách biết đồ của mình nên gửi vào nhóm nào." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length]
            return (
              <article key={service.id || service.name} className="card grid min-h-56 grid-rows-[auto_1fr_auto] p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <Icon className="text-sky-700" size={30} />
                  <span className="status-chip">{serviceNotes[index % serviceNotes.length]}</span>
                </div>
                <div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{service.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </div>
                <Link to="/dat-lich" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700">Đặt dịch vụ này <ChevronRight size={16} /></Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Prices({ prices, loading, error }) {
  return (
    <section id="prices" className="section bg-white">
      <div className="container-page">
        <SectionTitle eyebrow="Bảng giá" title="Giá để khách tự ước lượng trước khi gọi" description="Bố cục bảng giá giữ kiểu dễ đọc như bảng treo tại quầy: tên dịch vụ, mức giá, và ghi chú khi nào cần xác nhận thêm." />
        {loading && <StateLine icon={<LoaderCircle className="animate-spin" />} text="Đang tải bảng giá..." />}
        {error && <StateLine text="Bảng giá đang tạm hiển thị theo dữ liệu lưu sẵn, nhân viên sẽ xác nhận lại khi nhận đơn." />}
        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="overflow-hidden rounded-md border border-sky-100 bg-white shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-sky-50 text-slate-700">
                <tr>
                  <th className="px-5 py-4">Dịch vụ</th>
                  <th className="px-5 py-4">Giá tham khảo</th>
                  <th className="px-5 py-4">Ghi chú tại quầy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100">
                {prices.map((item) => (
                  <tr key={item.id || item.name} className="transition hover:bg-sky-50">
                    <td className="px-5 py-4 font-semibold text-slate-900">{item.name}</td>
                    <td className="px-5 py-4 text-lg font-bold text-sky-700">{item.priceText}</td>
                    <td className="px-5 py-4 text-slate-600">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="info-panel p-5">
            <h3 className="text-lg font-bold text-slate-950">Trước khi chốt giá</h3>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
              <p>Đồ quá dày, vết bẩn lâu ngày hoặc chất liệu cần giữ form sẽ được báo lại trước khi xử lý.</p>
              <p>Đơn giao nhận ngoài bán kính 3km cần nhân viên xác nhận thêm khoảng cách.</p>
              <p>Khách có thể ghi chú “không dùng mùi thơm mạnh” trong form đặt lịch.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['Đặt lịch', 'Khách chọn dịch vụ, giờ nhận và ghi chú món đồ.'],
    ['Xác nhận', 'Nhân viên gọi/Zalo để chốt giờ và khu vực giao nhận.'],
    ['Nhận đồ', 'Kiểm số lượng, tình trạng và các món cần xử lý riêng.'],
    ['Xử lý', 'Giặt, sấy, ủi hoặc vệ sinh theo đúng nhóm dịch vụ.'],
    ['Trả đồ', 'Giao lại, cập nhật hoàn tất và nhận phản hồi.'],
  ]
  return (
    <section id="process" className="section bg-sky-50">
      <div className="container-page">
        <SectionTitle eyebrow="Quy trình" title="Nhìn vào là biết đơn đang nằm ở đâu" />
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map(([step, text], index) => (
            <div key={step} className="card p-5">
              <span className="grid size-10 place-items-center rounded-md bg-sky-600 font-bold text-white">{index + 1}</span>
              <p className="mt-4 font-semibold text-slate-900">{step}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingForm({ services }) {
  const initial = { customerName: '', phone: '', address: '', addressNote: '', serviceId: '', estimatedWeight: '', pickupTime: '', note: '', latitude: '', longitude: '', consent: false }
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const setField = (key, value) => setForm((current) => ({ ...current, [key]: value }))

  function validate() {
    const next = {}
    if (!form.customerName.trim()) next.customerName = 'Vui lòng nhập họ tên.'
    if (!/^(0|\+84)(3|5|7|8|9)\d{8}$/.test(form.phone.trim())) next.phone = 'Số điện thoại Việt Nam chưa đúng.'
    if (!form.address.trim()) next.address = 'Vui lòng nhập địa chỉ.'
    if (!form.serviceId) next.serviceId = 'Vui lòng chọn dịch vụ.'
    if (!form.pickupTime) next.pickupTime = 'Vui lòng chọn ngày giờ hẹn.'
    if (!form.consent) next.consent = 'Cần xác nhận đồng ý để Hiệp Hưng liên hệ.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(event) {
    event.preventDefault()
    setMessage('')
    if (!validate()) return
    setSubmitting(true)
    try {
      const payload = {
        ...form,
        serviceId: Number(form.serviceId),
        estimatedWeight: form.estimatedWeight ? Number(form.estimatedWeight) : null,
        latitude: form.latitude ? Number(form.latitude) : null,
        longitude: form.longitude ? Number(form.longitude) : null,
      }
      const result = await api.createBooking(payload)
      setMessage(result.requiresDistanceConfirmation ? 'Đặt lịch thành công. Nhân viên sẽ xác nhận khoảng cách và thời gian nhận đồ.' : 'Đặt lịch thành công. Hiệp Hưng sẽ liên hệ xác nhận đơn.')
      setForm(initial)
    } catch (error) {
      setMessage(`Không gửi được đơn: ${error.message}`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="booking" className="section bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="Đặt lịch" title="Gửi thông tin đủ để nhân viên gọi lại đúng việc" description="Form được viết theo cách nhân viên tiệm cần khi nhận đơn: tên, số điện thoại, địa chỉ, dịch vụ, giờ hẹn và các ghi chú về món đồ." />
          <div className="grid gap-3">
            {['Nhập địa chỉ dạng chữ vẫn được, hệ thống sẽ đánh dấu cần xác nhận khoảng cách.', 'Nếu có nhiều chăn/giày/đồ cao cấp, ghi rõ trong phần ghi chú.', 'Giờ hẹn càng cụ thể thì nhân viên càng dễ sắp tuyến giao nhận.'].map((text) => (
              <p key={text} className="line-note">{text}</p>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="card grid gap-4 p-5 sm:grid-cols-2">
          <Input label="Họ tên" value={form.customerName} error={errors.customerName} onChange={(value) => setField('customerName', value)} />
          <Input label="Số điện thoại" value={form.phone} error={errors.phone} onChange={(value) => setField('phone', value)} />
          <Input label="Địa chỉ" value={form.address} error={errors.address} onChange={(value) => setField('address', value)} className="sm:col-span-2" />
          <Input label="Ghi chú địa chỉ" value={form.addressNote} onChange={(value) => setField('addressNote', value)} />
          <label>
            <span className="label">Chọn dịch vụ</span>
            <select className="field" value={form.serviceId} onChange={(event) => setField('serviceId', event.target.value)}>
              <option value="">Chọn dịch vụ</option>
              {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
            </select>
            {errors.serviceId && <ErrorText text={errors.serviceId} />}
          </label>
          <Input label="Khối lượng ước tính (kg)" type="number" value={form.estimatedWeight} onChange={(value) => setField('estimatedWeight', value)} />
          <Input label="Ngày giờ hẹn lấy đồ" type="datetime-local" value={form.pickupTime} error={errors.pickupTime} onChange={(value) => setField('pickupTime', value)} />
          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2">
          <Input label="Latitude nếu có" type="number" value={form.latitude} onChange={(value) => setField('latitude', value)} />
          <Input label="Longitude nếu có" type="number" value={form.longitude} onChange={(value) => setField('longitude', value)} />
          </div>
          <label className="sm:col-span-2">
            <span className="label">Ghi chú thêm</span>
            <textarea className="field min-h-28" value={form.note} onChange={(event) => setField('note', event.target.value)} />
          </label>
          <label className="flex gap-3 text-sm text-slate-700 sm:col-span-2">
            <input type="checkbox" checked={form.consent} onChange={(event) => setField('consent', event.target.checked)} className="mt-1 size-4" />
            <span>Tôi đồng ý để Hiệp Hưng liên hệ xác nhận đơn</span>
          </label>
          {errors.consent && <ErrorText text={errors.consent} />}
          <button className="btn-primary sm:col-span-2" disabled={submitting}>{submitting ? <LoaderCircle className="animate-spin" size={18} /> : <CalendarCheck size={18} />} Gửi đặt lịch</button>
          {message && <p className="rounded-md bg-sky-50 p-3 text-sm font-semibold text-sky-900 sm:col-span-2">{message}</p>}
        </form>
      </div>
    </section>
  )
}

function Input({ label, value, onChange, type = 'text', error, className = '' }) {
  return (
    <label className={className}>
      <span className="label">{label}</span>
      <input className="field" type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      {error && <ErrorText text={error} />}
    </label>
  )
}

function ErrorText({ text }) {
  return <p className="mt-1 text-sm font-medium text-rose-600">{text}</p>
}

function StateLine({ icon, text }) {
  return <p className="mb-4 inline-flex items-center gap-2 rounded-md bg-sky-50 px-3 py-2 text-sm text-slate-700">{icon} {text}</p>
}

function TestimonialsFaq() {
  const faqs = [
    ['Bao lâu thì giao lại đồ?', 'Thông thường 24-48 giờ tùy dịch vụ và khối lượng. Đơn gấp sẽ được nhân viên xác nhận riêng.'],
    ['Có nhận giao tận nhà không?', 'Có, Hiệp Hưng hỗ trợ giao nhận tận nhà trong khu vực bán kính 3km.'],
    ['Có giặt đồ cao cấp không?', 'Có nhận đồ cao cấp, vest, áo khoác và các chất liệu cần xử lý riêng.'],
    ['Bán kính 3km tính như thế nào?', 'Backend có DistanceService để tính bằng tọa độ cửa hàng và tọa độ khách theo công thức Haversine.'],
    ['Tôi có thể đổi giờ hẹn không?', 'Có, khách có thể gọi hotline hoặc nhắn Zalo trước giờ hẹn để được hỗ trợ đổi lịch.'],
  ]
  return (
    <section className="section bg-sky-50">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Ghi nhận" title="Những chi tiết khách thường hỏi trước khi gửi đồ" />
          <div className="grid gap-4">
            {['Đồ trắng và đồ màu có được tách riêng không?', 'Nếu đồ chưa khô kỹ có được sấy thêm không?', 'Giá chăn ga tính theo bộ hay theo kích thước?', 'Giày có khử mùi và làm khô riêng không?'].map((quote) => (
              <div key={quote} className="info-panel flex items-center gap-3 p-5 text-slate-800">
                <CheckCircle2 className="shrink-0 text-sky-700" size={20} />
                <p className="font-semibold">{quote}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="FAQ" title="Câu hỏi thường gặp" />
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="card p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ store }) {
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
      <a className="fixed bottom-4 left-4 z-30 grid size-12 place-items-center rounded-full bg-sky-600 text-white shadow-lg" href={`tel:${store.hotline}`} aria-label="Gọi hotline"><Phone size={22} /></a>
    </footer>
  )
}

function usePublicData(title) {
  const [services, setServices] = useState(fallbackServices)
  const [prices, setPrices] = useState(fallbackPrices)
  const [store, setStore] = useState(defaultStore)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = title
    Promise.all([api.getServices(), api.getPrices(), api.getStoreSettings()])
      .then(([serviceData, priceData, storeData]) => {
        if (serviceData?.length) setServices(serviceData)
        if (priceData?.length) setPrices(priceData)
        if (storeData) setStore({ ...defaultStore, ...storeData })
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [title])

  return { services, prices, store, loading, error }
}

function PublicPage({ title, children }) {
  const data = usePublicData(title)
  return (
    <>
      <Header store={data.store} />
      {children(data)}
      <Footer store={data.store} />
    </>
  )
}

function HomeSummary() {
  const cards = [
    ['Khu vực nhận đồ', 'Ưu tiên bán kính 3km, địa chỉ xa hơn sẽ được gọi xác nhận trước.', '/lien-he'],
    ['Bảng giá tại quầy', 'Xem theo từng nhóm đồ, có ghi chú khi cần báo giá riêng.', '/bang-gia'],
    ['Lịch nhận hôm nay', 'Gửi giờ hẹn, địa chỉ và ghi chú món đồ để nhân viên sắp tuyến.', '/dat-lich'],
  ]
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionTitle eyebrow="Đi thẳng vào việc" title="Trang chủ chỉ giữ những câu khách cần trả lời ngay" description="Không dồn hết nội dung vào một landing dài. Mỗi nhóm thông tin được tách thành trang riêng, còn trang chủ đóng vai trò như bảng hướng dẫn nhanh của tiệm." />
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map(([title, text, to]) => (
            <Link key={to} to={to} className="card p-6 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700">Xem chi tiết <ChevronRight size={17} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function LandingPage() {
  return (
    <PublicPage title="Giặt Sấy Hiệp Hưng - Đặt lịch giặt sấy giao nhận tận nhà">
      {({ store }) => (
        <>
          <Hero store={store} />
          <HomeSummary />
          <TestimonialsFaq />
        </>
      )}
    </PublicPage>
  )
}

function AboutPage() {
  return (
    <PublicPage title="Giới thiệu - Giặt Sấy Hiệp Hưng">
      {() => <About />}
    </PublicPage>
  )
}

function ServicesPage() {
  return (
    <PublicPage title="Dịch vụ - Giặt Sấy Hiệp Hưng">
      {({ services }) => <Services services={services} />}
    </PublicPage>
  )
}

function PricesPage() {
  return (
    <PublicPage title="Bảng giá - Giặt Sấy Hiệp Hưng">
      {({ prices, loading, error }) => <Prices prices={prices} loading={loading} error={error} />}
    </PublicPage>
  )
}

function ProcessPage() {
  return (
    <PublicPage title="Quy trình - Giặt Sấy Hiệp Hưng">
      {() => <Process />}
    </PublicPage>
  )
}

function BookingPage() {
  return (
    <PublicPage title="Đặt lịch - Giặt Sấy Hiệp Hưng">
      {({ services }) => <BookingForm services={services} />}
    </PublicPage>
  )
}

function ContactPage() {
  return (
    <PublicPage title="Liên hệ - Giặt Sấy Hiệp Hưng">
      {({ store }) => (
        <>
          <section className="section bg-white">
            <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionTitle eyebrow="Liên hệ" title="Kết nối với Giặt Sấy Hiệp Hưng" description="Khách có thể gọi hotline, nhắn Zalo/Facebook hoặc xem chính sách giao nhận trước khi đặt lịch." />
              <div className="grid gap-4 sm:grid-cols-2">
                <a className="card p-5 transition hover:shadow-md" href={`tel:${store.hotline}`}><Phone className="mb-3 text-sky-700" /> <strong>{store.hotline}</strong><p className="mt-2 text-sm text-slate-600">Gọi nhanh hotline</p></a>
                <a className="card p-5 transition hover:shadow-md" href={store.zaloUrl}><ExternalLink className="mb-3 text-sky-700" /> <strong>Zalo</strong><p className="mt-2 text-sm text-slate-600">Nhắn tin xác nhận đơn</p></a>
                <a className="card p-5 transition hover:shadow-md" href={store.facebookUrl}><ExternalLink className="mb-3 text-sky-700" /> <strong>Facebook</strong><p className="mt-2 text-sm text-slate-600">Theo dõi cửa hàng</p></a>
                <div className="card p-5"><MapPin className="mb-3 text-sky-700" /> <strong>Địa chỉ</strong><p className="mt-2 text-sm text-slate-600">{store.address}</p></div>
              </div>
            </div>
          </section>
          <TestimonialsFaq />
        </>
      )}
    </PublicPage>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/dich-vu" element={<ServicesPage />} />
      <Route path="/bang-gia" element={<PricesPage />} />
      <Route path="/quy-trinh" element={<ProcessPage />} />
      <Route path="/dat-lich" element={<BookingPage />} />
      <Route path="/lien-he" element={<ContactPage />} />
    </Routes>
  )
}

export default App



