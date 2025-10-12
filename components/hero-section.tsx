import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck2,
  ClockFading,
  Instagram,
  MapPin,
  ThumbsUp,
} from "lucide-react";
import FadeUp from "@/components/motions/fadeup";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Image */}
      <Image
        src="/example-herobg.jpg"
        alt="Sushi Background"
        fill
        priority
        className="object-cover object-center absolute z-[-2]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 z-[-1]" />

      {/* Glass Panel */}
      <FadeUp>
        <div className="bg-black/70 shadow-xl w-full">
          <div className="container py-8 flex flex-col sm:flex-row gap-5">
            <div className="max-w-3xl ">
              <div className="px-4 py-1.5 rounded-full min-w-[160px] border inline-flex text-secondary text-sm backdrop-blur-md">
                Peak Hour | 12:00 - 14:00
              </div>

              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium text-secondary leading-tight drop-shadow-lg">
                Experience Authentic Japanese Flavors
              </h1>
              <p className="mt-6 text-xl lg:text-2xl text-secondary/90 leading-relaxed">
                Delight in every bite, handcrafted with tradition.
              </p>

              {/*Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-10 mb-5">
                <Button variant="secondary" size={"lg"}>
                  View Menu
                </Button>
                <Button variant="secondary" size={"lg"}>
                  <CalendarCheck2 className="size-5" /> Reserve Now
                </Button>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col gap-6 ml-auto sm:border-l-4 border-dashed pl-4 md:pl-8 text-secondary">
              <Link href={"/"} className="flex flex-col items-center gap-1">
                <Instagram className="size-8 md:size-12 " />
                Social
              </Link>
              <Link href={"/"} className="flex flex-col items-center gap-1">
                <MapPin className="size-8 md:size-12 " />
                Location
              </Link>
              <Link href={"/"} className="flex flex-col items-center gap-1">
                <ThumbsUp className="size-8 md:size-12 " />
                Review
              </Link>
              <Link href={"/"} className="flex flex-col items-center gap-1">
                <ClockFading className="size-8 md:size-12 " />
                Open On
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
