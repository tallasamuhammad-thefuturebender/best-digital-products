import AffiliateButton from '../../../components/AffiliateButton'
import AffiliateDisclosure from '../../../components/AffiliateDisclosure'
import { affiliateLinks } from '../../../lib/affiliateLinks'

export default function SalesFunnelArticle() {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        5 Sales Funnel Tools That Actually Convert in 2025
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        An honest review from someone who's tested them all
      </p>

      {/* Konten artikel */}
      <div className="prose prose-lg max-w-none">
        <h2>Quick Summary 🚀</h2>
        
        <h3>1. Systeme.io - The All-in-One Powerhouse</h3>
        <p>Perfect for beginners who want everything in one place...</p>
        
        <div className="my-6">
          <AffiliateButton 
            href={affiliateLinks.systemeio}
            variant="primary"
          >
            🚀 Get Systeme.io with 50% Commission →
          </AffiliateButton>
        </div>

        <h3>2. ConvertKit - The Creator's Best Friend</h3>
        <p>Perfect for bloggers, YouTubers, and content creators...</p>
        
        <div className="my-6">
          <AffiliateButton 
            href={affiliateLinks.convertkit}
            variant="secondary"
          >
            ✨ Try ConvertKit Free →
          </AffiliateButton>
        </div>

        {/* Tambahkan produk lainnya... */}
      </div>

      {/* Affiliate Disclosure */}
      <AffiliateDisclosure />
    </article>
  )
}
