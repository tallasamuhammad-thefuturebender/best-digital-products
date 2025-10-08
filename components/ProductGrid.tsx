export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Product 1 - Top Pick */}
      <div className="border border-gray-200 rounded-lg p-6 relative">
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-sm">
          TOP PICK
        </div>
        <h3 className="text-xl font-bold mb-2">Ahrefs</h3>
        <div className="flex items-center mb-2">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-gray-600 ml-2">4.9</span>
        </div>
        <p className="text-gray-600 mb-4">Complete SEO toolkit for serious marketers</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          See Deal →
        </button>
      </div>

      {/* Product 2 */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Semrush</h3>
        <div className="flex items-center mb-2">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-gray-600 ml-2">4.8</span>
        </div>
        <p className="text-gray-600 mb-4">All-in-one marketing toolkit</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          See Deal →
        </button>
      </div>

      {/* Product 3 */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Moz</h3>
        <div className="flex items-center mb-2">
          <span>⭐⭐⭐⭐</span>
          <span className="text-gray-600 ml-2">4.5</span>
        </div>
        <p className="text-gray-600 mb-4">SEO software and data</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          See Deal →
        </button>
      </div>
    </div>
  )
}
