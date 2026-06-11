export function Input({ label, value, onChange, type = 'text', error, className = '' }) {
  return (
    <label className={className}>
      <span className="label">{label}</span>
      <input className="field" type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      {error && <ErrorText text={error} />}
    </label>
  )
}

export function ErrorText({ text }) {
  return <p className="mt-1 text-sm font-medium text-rose-600">{text}</p>
}

export function StateLine({ icon, text }) {
  return <p className="mb-4 inline-flex items-center gap-2 rounded-md bg-sky-50 px-3 py-2 text-sm text-slate-700">{icon} {text}</p>
}
