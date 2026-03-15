import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeBrandValuesSection from "@/components/HomeBrandValuesSection";
import HomeAcademicsPreview from "@/components/HomeAcademicsPreview";
import HomeAthleticsPreview from "@/components/HomeAthleticsPreview";
import HomeFacilitiesPreview from "@/components/HomeFacilitiesPreview";
import HomeLeadershipPreview from "@/components/HomeLeadershipPreview";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        {/* Hero */}
        <HeroSection />

        {/* Learn • Believe • Achieve brand band */}
        <HomeBrandValuesSection />

        {/* Alternating feature rows */}
        <HomeAcademicsPreview />
        <HomeAthleticsPreview />
        <HomeFacilitiesPreview />

        {/* Leadership / Faith and Admissions CTA stay as-is */}
        <HomeLeadershipPreview />
        <AdmissionsCTASection />
      </main>
      <Footer />
    </div>
  );
}

