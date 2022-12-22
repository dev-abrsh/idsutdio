export default function Option({ text }: { text: string }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-sm font-normal text-black-100">
      <input type="checkbox" className="rounded text-primary-1 focus:ring-0" />
      <span>{text}</span>
    </div>
  )
}
