import HeroSection from "@/components/hero-section";
import Menu from "@/components/menu";
import MasonryGridDemo from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <main>
        {/*Hero Section */}
        <HeroSection />
        <Menu />
        <MasonryGridDemo />
      </main>
    </div>
  );
}
