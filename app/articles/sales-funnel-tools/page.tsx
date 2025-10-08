import AffiliateButton from '../../../components/AffiliateButton'
import AffiliateDisclosure from '../../../components/AffiliateDisclosure'
import { affiliateLinks } from '../../../lib/affiliateLinks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Sales Funnel Tools That Actually Convert in 2025',
  description: 'Honest review of Systeme.io, ConvertKit, Kartra, ClickFunnels & GrooveFunnels. Compare features, pricing, and real results.',
  keywords: 'sales funnel tools, funnel software, systeme.io review, convertkit vs clickfunnels',
  openGraph: {
    title: '5 Sales Funnel Tools That Actually Convert in 2025',
    description: 'Honest review of the best sales funnel tools with real results',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00.000Z',
    authors: ['Your Name'],
  },
}

export default function SalesFunnelArticle() {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      {/* Header with H1 */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          5 Sales Funnel Tools That Actually Convert in 2025
        </h1>
        <div className="flex items-center text-gray-600 text-sm">
          <span>Published: January 20, 2025</span>
          <span className="mx-2">•</span>
          <span>10 min read</span>
        </div>
      </header>

      {/* Table of Contents for Featured Snippet */}
      <nav className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="font-bold text-lg mb-3">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#systemeio" className="text-blue-600 hover:underline">Systeme.io - All-in-One Powerhouse</a></li>
          <li><a href="#convertkit" className="text-blue-600 hover:underline">ConvertKit - Creator's Best Friend</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:underline">Comparison Table</a></li>
          <li><a href="#conclusion" className="text-blue-600 hover:underline">Final Verdict</a></li>
        </ul>
      </nav>

      {/* Content with Proper Heading Structure */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          After testing <strong>25+ sales funnel tools</strong> and helping businesses generate over <strong>$2M in sales</strong>, here's my honest take on what actually works in 2025.
        </p>

        <section id="systemeio">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Systeme.io - The All-in-One Powerhouse</h2>
          <p>Perfect for beginners who want everything in one place...</p>
          <div className="my-6">
            <AffiliateButton 
              href={affiliateLinks.systemeio}
              variant="primary"
            >
              🚀 Get Systeme.io with 50% Commission →
            </AffiliateButton>
          </div>
        </section>

        <section id="convertkit">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ConvertKit - The Creator's Best Friend</h2>
          <p>Perfect for bloggers, YouTubers, and content creators...</p>
          <div className="my-6">
            <AffiliateButton 
              href={affiliateLinks.convertkit}
              variant="secondary"
            >
              ✨ Try ConvertKit Free →
            </AffiliateButton>
          </div>
        </section>

        {/* FAQ Section for Featured Snippet */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Which funnel tool is best for beginners?</h3>
              <p className="text-gray-600">Systeme.io is the most beginner-friendly with its drag-and-drop interface and all-in-one features.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">What's the most cost-effective option?</h3>
              <p className="text-gray-600">GrooveFunnels offers a free plan that's perfect for testing funnel building.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Affiliate Disclosure */}
      <AffiliateDisclosure />
    </article>
  )
}
