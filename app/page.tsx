import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <main>
        {/*Hero Section */}
        <HeroSection />

        <section className="mt-10 md:mt-16 lg:mt-24">
          <h2>Featured</h2>
        </section>
      </main>
    </div>
  );
}
