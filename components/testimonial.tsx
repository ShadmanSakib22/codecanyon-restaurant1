// summary
"use client";
import * as React from "react";
import Image from "next/image";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";

const testimonials = [
  {
    id: 1,
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Anaam Farooq",
    feedback: "Kashmir's Hidden Winter Wonderland",
    mainImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=1200&q=80",
  },
  {
    id: 2,
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "neophyte_clicker",
    feedback: "Celebrating Diwali Through The Lens",
    mainImage:
      "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGl3YWxpfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Badshah1341",
    feedback: "A Sunset Symphony in Gold",
    mainImage:
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=800&h=1000&q=80",
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
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Venky_smile",
    feedback: "Highlights from realme",
    mainImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "LoserAnant",
    feedback: "14 Pro Series Launch Event Recap",
    mainImage:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
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
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
    <div className="absolute top-0 left-0 p-4 text-white">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-8 h-8 rounded-full border-2 border-white/80 overflow-hidden">
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
    <section className="mt-10 md:mt-24 lg:mt-32 container">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-2 text-center">
          What People Are Saying
        </h2>
        <p className="mb-8 text-foreground/70 text-center">
          Add your own Review to our{" "}
          <a href="" className="underline underline-offset-4">
            Social
          </a>{" "}
          page or google!
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
