import TrustBadges from '../components/TrustBadges';
import HeroSection from '../components/HeroSection';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-8">
      <TrustBadges />
      <HeroSection />
      <FilterBar />
      <ProductGrid />
    </main>
  )
}
