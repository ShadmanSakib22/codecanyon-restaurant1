"use client";

import * as React from "react";
import Image from "next/image";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";
import { useTranslations, useMessages } from "next-intl";

interface Testimonial {
  id: string;
  user: string;
  feedback: string;
  mainImg?: { url: string };
  userImg?: { url: string };
}

const TestimonialCard = ({ userImg, user, feedback, mainImg }: Testimonial) => (
  <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105">
    <Image
      src={mainImg?.url || "https://placehold.co/800x600?text=Image"}
      alt={feedback}
      width={800}
      height={1200}
      className="w-full h-auto object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/20 to-transparent" />
    <div className="absolute top-0 left-0 p-4 text-background">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-8 h-8 rounded-full border-2 border-background/80 overflow-hidden">
          <Image
            src={userImg?.url || "https://placehold.co/40x40?text=A"}
            alt={user}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
        <span className="font-semibold text-sm drop-shadow-md">{user}</span>
      </div>
      <p className="text-sm font-medium leading-tight drop-shadow-md">
        {feedback}
      </p>
    </div>
  </div>
);

export default function MasonryGridDemo() {
  const t = useTranslations();
  const messages = useMessages();

  const testimonials = (messages.testimonials || []) as Testimonial[];

  const [columns, setColumns] = React.useState(4);

  const getColumns = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  React.useEffect(() => {
    const handleResize = () => setColumns(getColumns(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="reviews" className="mt-10 md:mt-24 lg:mt-32 container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-2 text-center">
          {t("common.testimonial-title")}
        </h2>
        <p className="mb-8 text-foreground/70 text-center">
          {t("common.testimonial-subtitle")}
        </p>

        <MasonryGrid columns={columns} gap={4}>
          {testimonials.map((card, idx) => (
            <TestimonialCard key={idx} {...card} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}
