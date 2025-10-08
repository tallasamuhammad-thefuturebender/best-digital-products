export default function FilterBar() {
  return (
    <div className="flex gap-4 mb-12 justify-center">
      <button className="px-4 py-2 border border-gray-300 rounded-lg">Type ✓</button>
      <button className="px-4 py-2 border border-gray-300 rounded-lg">Sort ↑↓</button>
      <button className="px-4 py-2 border border-gray-300 rounded-lg">Top Picks Only</button>
    </div>
  )
}
