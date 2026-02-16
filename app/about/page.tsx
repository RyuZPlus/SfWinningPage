import AboutHero from "@/app/about/components/abouthero";
import AboutSection from "@/app/about/components/aboutsection";
import AboutStack from "@/app/about/components/aboutstack";
import AboutCTA from "@/app/about/components/aboutcta";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AboutHero />
      <AboutSection />
      <AboutStack />
      <AboutCTA />
    </main>
  );
}
