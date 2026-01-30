import HomeHero from "@/components/home/hero";
import ExploreServices from "@/components/home/services";
import FeaturedVenues from "@/components/home/featured-venues";
import FeaturedProducts from "@/components/home/featured-products";
import VendorCta from "@/components/home/vendor-cta";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <ExploreServices />
      <FeaturedVenues />
      <FeaturedProducts />
      <VendorCta />
    </main>
  );
}
