"use client";
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
import MotionReveal from "@/components/ui/motion-reveal";
import { useTranslation } from "@/lib/i18n/translation-context";

export default function HeroSection() {
  const { t } = useTranslation();
  //Todo: fetch from sanity
  const map_url =
    "https://www.google.com/maps/place/North+South+University/@23.8151107,90.4229817,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c64c103a8093:0xd660a4f50365294a!8m2!3d23.8151107!4d90.4255566!16zL20vMDVqbXI1?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D";
  const review_url =
    "https://www.google.com/maps/place/North+South+University/@23.8151107,90.4255566,17z/data=!4m8!3m7!1s0x3755c64c103a8093:0xd660a4f50365294a!8m2!3d23.8151107!4d90.4255566!9m1!1b1!16zL20vMDVqbXI1?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D";
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center pt-20">
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
      <MotionReveal>
        <div className="bg-black/70 shadow-xl w-full">
          <div className="container py-8 flex flex-col sm:flex-row gap-5">
            <div className="max-w-3xl ">
              <div className="px-4 py-1.5 rounded-full min-w-[160px] border inline-flex text-secondary text-sm backdrop-blur-md">
                {t("hero.peakHour")}
              </div>

              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium text-secondary leading-tight drop-shadow-lg">
                {t("hero.title")}
              </h1>
              <p className="mt-6 text-xl lg:text-2xl text-secondary/90 leading-relaxed">
                {t("hero.subtitle")}
              </p>

              {/*Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-10 mb-5">
                <Link href="#menu">
                  <Button
                    variant="outline"
                    className="bg-transparent! text-secondary! hover:text-secondary/80 w-full sm:w-[200px]"
                    size={"lg"}
                  >
                    {t("common.viewMenu")}
                  </Button>
                </Link>
                <Link href="#reserve">
                  <Button
                    variant="secondary"
                    size={"lg"}
                    className="w-full sm:w-[200px]!"
                  >
                    <CalendarCheck2 className="size-5" />{" "}
                    {t("common.reserveNow")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col gap-6 ml-auto sm:border-l-4 border-dashed pl-4 md:pl-8 text-secondary">
              <Link href={"/"} className="flex flex-col items-center gap-1">
                <Instagram className="size-8 md:size-12 " />
                {t("common.social")}
              </Link>
              <Link
                href={map_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <MapPin className="size-8 md:size-12 " />
                {t("common.location")}
              </Link>
              <Link
                href={review_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <ThumbsUp className="size-8 md:size-12 " />
                {t("common.review")}
              </Link>
              <Link
                href={"#op-hrs"}
                className="flex flex-col items-center gap-1 text-nowrap"
              >
                <ClockFading className="size-8 md:size-12 " />
                {t("common.openOn")}
              </Link>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
