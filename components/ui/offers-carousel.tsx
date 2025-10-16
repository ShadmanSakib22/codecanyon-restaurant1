"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardItemProps, ItemCard } from "@/components/ui/item-card";

export interface OffersCarouselProps {
  items: CardItemProps[];
}

export const OffersCarousel = ({ items }: OffersCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const scrollDistance = 300; // in px

  // scroll handler functions
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount =
        direction === "left" ? -scrollDistance : scrollDistance;

      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className={`overflow-x-auto h-fit py-4 scrollbar-hide`}
      >
        <div className="flex gap-6 p-1">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-background/80 p-2 shadow-lg transition-opacity duration-300 hover:bg-background disabled:opacity-0"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-background/80 p-2 shadow-lg transition-opacity duration-300 hover:bg-background disabled:opacity-0"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>
    </div>
  );
};
