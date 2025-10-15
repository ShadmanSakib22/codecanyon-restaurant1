import * as React from "react";
import Image from "next/image";
import { Star, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  <div className="group w-64 flex-shrink-0">
    <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-3">
      {/* Image Section */}
      <div className="relative flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={256}
          height={144}
          className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.rating && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-foreground/60 px-2 py-0.5 text-xs font-bold text-white shadow-md">
            <Star className="h-3 w-3 fill-white" />
            <span>{item.rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div className="space-y-1">
          <h3 className="text-base font-semibold leading-tight text-foreground line-clamp-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.subtitle}
          </p>
        </div>
        <p className="mt-3 border-t pt-2 text-lg font-medium text-primary">
          {item.price}
        </p>
      </div>
    </div>
  </div>
);

export const OffersCarousel = ({ items }: OffersCarouselProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-12 items-start">
        {/* Left: Offer Section (CTA and Description) */}
        <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left p-4 lg:p-0">
          <div className="flex items-center gap-2 mb-2 rounded-2xl py-1 px-2.5 border bg-black/5 backdrop-blur-xs">
            <UtensilsCrossed className="h-5 w-5" />
            <p className="text-xs font-medium uppercase tracking-wider">
              Limited Time Offer
            </p>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Today&apos;s Specials
          </h2>
          <p className="mt-3 mb-6 text-base text-muted-foreground max-w-sm lg:max-w-none">
            Our master sushi chefs have prepared a selection of rare and
            seasonal dishes. Experience the freshest cuts, signature rolls, and
            savory ramen, available only for a limited time.
          </p>

          <Button variant="secondary" className="border">
            Reserve Now
          </Button>
        </div>

        {/* Right: Carousel Section */}
        <div className="relative lg:col-span-9">
          <div className={`overflow-x-auto h-fit py-4  scrollbar-hide`}>
            <div className="flex gap-6 p-1">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
