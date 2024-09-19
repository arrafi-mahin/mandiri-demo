/**
 * HomePage Component
 *
 * This component serves as the main landing page for the website.
 * It includes various sections such as sliders for main content, packages, offers,
 * and additional sections like banking details, app promotions, and commitments.
 *
 * The page layout is structured with a vertical flow of components, each representing
 * different parts of the homepage.
 *
 * Dependencies:
 * - React components imported from various directories, each representing a section of the homepage.
 */

import SliderMain from "@/components/SliderMain/SliderMain";
import PackageSlider from "@/components/PackageSlider/PackageSlider";
import OfferSlider from "@/components/OfferSlider/OfferSlider";
import BankingDetails from "@/components/BankingDetails/BankingDetails";
import AppSection from "@/components/AppSection/AppSection";
import Commitment from "@/components/Commitment/Commitment";
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <SliderMain />
      <PackageSlider />
      <OfferSlider />
      <BankingDetails />
      <AppSection />
      <Commitment />
    </div>
  );
}
