export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-sky-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  )
}
