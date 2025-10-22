// components/testimonial
"use client";
import * as React from "react";
import Image from "next/image";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    id: 1,
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Anaam Farooq",
    feedback: "Kashmir's Hidden Winter Wonderland",
    mainImage:
      "https://images.unsplash.com/photo-1611518040286-9af8ba97ab46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 2,
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "neophyte_clicker",
    feedback: "Celebrating Diwali Through The Lens",
    mainImage:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025",
  },
  {
    id: 3,
    profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Badshah1341",
    feedback: "A Sunset Symphony in Gold",
    mainImage:
      "https://images.unsplash.com/photo-1602273660127-a0000560a4c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
  },
  {
    id: 4,
    profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "mohsinsyasin_",
    feedback: "realme Insider Event Kashmir",
    mainImage:
      "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Naaz khan",
    feedback: "Illuminate the Night with the P3 Pro",
    mainImage:
      "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073",
  },
  {
    id: 6,
    profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Venky_smile",
    feedback: "Highlights from realme",
    mainImage:
      "https://images.unsplash.com/photo-1629684782790-385ed5adb497?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 7,
    profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "LoserAnant",
    feedback: "14 Pro Series Launch Event Recap",
    mainImage:
      "https://images.unsplash.com/photo-1625980319455-985e5442c5ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
  },
];

const TestimonialCard = ({
  profileImage,
  name,
  feedback,
  mainImage,
}: (typeof testimonials)[0]) => (
  <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105">
    <Image
      src={mainImage}
      alt={feedback}
      width={800}
      height={1200}
      className="w-full h-auto object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority={false}
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src =
          "https://placehold.co/800x600/1a1a1a/ffffff?text=Image";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-fofrom-foreground/20 to-transparent" />
    <div className="absolute top-0 left-0 p-4 text-background">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-8 h-8 rounded-full border-2 border-background/80 overflow-hidden">
          <Image
            src={profileImage}
            alt={name}
            fill
            sizes="32px"
            className="object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src =
                "https://placehold.co/40x40/EFEFEF/333333?text=A";
            }}
          />
        </div>
        <span className="font-semibold text-sm drop-shadow-md">{name}</span>
      </div>
      <p className="text-sm font-medium leading-tight drop-shadow-md">
        {feedback}
      </p>
    </div>
  </div>
);

const MasonryGridDemo = () => {
  const t = useTranslations();
  const [columns, setColumns] = React.useState(4);

  const getColumns = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  React.useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="reviews" className="mt-10 md:mt-24 lg:mt-32 container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-2 text-center">
          {t("testimonial.sharedMomentsAndReviews")}
        </h2>
        <p className="mb-8 text-foreground/70 text-center">
          {t("testimonial.testimonialDescription")}
        </p>
        <MasonryGrid columns={columns} gap={4}>
          {testimonials.map((card) => (
            <TestimonialCard key={card.id} {...card} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
};

export default MasonryGridDemo;
