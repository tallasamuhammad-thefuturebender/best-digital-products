import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Best Digital Products - Honest Reviews & Comparisons',
    template: '%s | Best Digital Products'
  },
  description: 'Unbiased reviews and comparisons of the best digital tools, software, and products for your business growth. Find the right tools for SEO, marketing, sales, and more.',
  keywords: 'digital tools, software reviews, affiliate marketing, SEO tools, marketing tools',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Best Digital Products',
    title: 'Best Digital Products - Honest Reviews & Comparisons',
    description: 'Unbiased reviews of the best digital tools and software',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Digital Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Products - Honest Reviews & Comparisons',
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
      <body>{children}</body>
    </html>
  )
}
