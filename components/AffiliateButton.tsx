interface AffiliateButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function AffiliateButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}: AffiliateButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all inline-block text-center"
  
  const variants
