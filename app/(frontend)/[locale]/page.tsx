import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import HeroSection from "@/components/hero-section";
import Menu from "@/components/menu";
import MasonryGridDemo from "@/components/testimonial";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Menu />
      </main>
      <MasonryGridDemo />
      <Contact />
      <Footer />
    </>
  );
}
