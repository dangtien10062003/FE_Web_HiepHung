import { useState } from 'react'
import { CalendarCheck, LoaderCircle } from 'lucide-react'
import { ErrorText, Input } from '../common/FormControls'
import { SectionTitle } from '../common/SectionTitle'
import { api } from '../../services/api'

export function BookingSection({ services }) {
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
