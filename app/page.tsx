import Image from "next/image";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <main>
        {/*Hero Section */}
        <HeroSection />

        <section className="mt-10 md:mt-16 lg:mt-24 container grid md:grid-cols-2 gap-5">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
              Today&apos;s Specials
            </h2>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
              About
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              necessitatibus, sunt tenetur harum, consequatur maxime ea
              laboriosam explicabo expedita minus fugit aliquid sapiente
              accusantium officiis placeat odio nisi tempora nulla.
            </p>
            <div className="w-full h-[300px] relative rounded-md overflow-hidden mt-6">
              <Image
                src={"/example-aboutimg.jpg"}
                alt="chef"
                fill
                className="absolute object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-16 lg:mt-24 container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
            Menu
          </h2>
          <p className="mt-6 text-base md:text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            necessitatibus, sunt tenetur harum, consequatur maxime ea laboriosam
            explicabo expedita minus fugit aliquid sapiente accusantium officiis
            placeat odio nisi tempora nulla.
          </p>
        </section>
      </main>
    </div>
  );
}
