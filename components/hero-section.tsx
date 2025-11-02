// components/hero-section
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
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations();

  const bg_url = t("hero.backgroundImage.url");
  const map_url = t("hero.mapUrl");
  const review_url = t("hero.reviewUrl");
  const social_url = t("hero.socialUrl");

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col justify-center pt-20">
      {/* Background Image */}
      <Image
        src={bg_url || "/example-herobg.jpg"}
        alt="Sushi Background"
        fill
        priority
        className="object-cover object-center absolute z-[-2]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/50 to-foreground/80 z-[-1]" />

      {/* Glass Panel */}
      <MotionReveal>
        <div className="bg-foreground/70 shadow-xl w-full">
          <div className="container py-8 flex flex-col sm:flex-row gap-5">
            <div className="max-w-3xl ">
              <div className="px-4 py-1.5 rounded-full min-w-[160px] border inline-flex text-secondary text-sm backdrop-blur-md">
                {t("hero.badge")}
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
              <Link
                href={social_url}
                className="flex flex-col items-center gap-1"
              >
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
