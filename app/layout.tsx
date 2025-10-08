import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Best Digital Products - Honest Software Reviews & Comparisons',
    template: '%s | Best Digital Products'
  },
  description: 'Unbiased reviews and comparisons of the best digital tools, software, and products. Find the right tools for marketing, sales, SEO, and business growth.',
  keywords: 'software reviews, digital tools, affiliate marketing, SEO tools, marketing software',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Best Digital Products',
    title: 'Best Digital Products - Honest Software Reviews',
    description: 'Unbiased reviews of the best digital tools and software',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Products - Honest Software Reviews',
    description: 'Unbiased reviews of the best digital tools and software',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
