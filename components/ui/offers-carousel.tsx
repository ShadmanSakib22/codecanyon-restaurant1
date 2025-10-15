"use client";
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface CarouselItem {
  id: number | string;
  imageUrl: string;
  title: string;
  subtitle: string;
  rating?: number;
  price: string;
}

export interface OffersCarouselProps {
  items: CarouselItem[];
}

const ItemCard = ({ item }: { item: CarouselItem }) => (
  <motion.div
    className="group w-64 flex-shrink-0"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground">
      <div className="relative">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={256}
          height={160}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold leading-tight">
            {item.title}
          </h3>
          {item.rating && (
            <div className="ml-2 flex flex-shrink-0 items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-600">
              <Star className="h-3 w-3" />
              <span>{item.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
        <div className="mt-3 flex items-end gap-2">
          <p className="text-lg font-bold">{item.price}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Main OffersCarousel component
export const OffersCarousel = React.forwardRef<
  HTMLDivElement,
  OffersCarouselProps
>(({ items }, ref) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  // Function to scroll the carousel
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      const newScrollLeft =
        carouselRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      controls.start({
        x: -newScrollLeft,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position to enable/disable navigation buttons
  const checkScrollPosition = React.useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft < 10);
      setIsAtEnd(scrollWidth - scrollLeft - clientWidth < 10);
    }
  }, []);

  React.useEffect(() => {
    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [checkScrollPosition, items]);

  return (
    <div ref={ref}>
      <div className="flex items-start gap-6">
        {/* Left: Offer Section */}
        <div className="w-64">
          <div className="flex items-center gap-2 mt-1">
            <Gift className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">
              Discount coupons available
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-primary">
            Today&apos;s Specials
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            veritatis dicta cupiditate animi ratione.
          </p>
          <a href="#reserve-form">
            <Button
              variant="outline"
              className="mt-6 w-full max-w-xs lg:w-auto"
            >
              Reserve Now
            </Button>
          </a>
        </div>

        {/* Right: Carousel Section */}
        <div className="relative flex-1">
          <div ref={carouselRef} className="overflow-x-auto scrollbar-hide">
            <motion.div className="flex gap-4 px-1 py-2" animate={controls}>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {!isAtStart && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-9 w-9 shadow-md z-10 hidden md:flex"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          {!isAtEnd && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full h-9 w-9 shadow-md z-10 hidden md:flex"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

OffersCarousel.displayName = "OffersCarousel";
