import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export interface CardItemProps {
  id: string | number;
  name: string;
  desc: string;
  image?: { url: string };
  rating?: number;
  price: string;
}

export const ItemCard = ({ item }: { item: CardItemProps }) => (
  <div className="group w-64 flex-shrink-0">
    <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-3">
      {/* Image Section */}
      <div className="relative flex-shrink-0">
        <Image
          src={item.image?.url || "https://placehold.co/800x600?text=Image"}
          alt={item.name}
          width={256}
          height={144}
          className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        {item.rating && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-foreground/60 px-2 py-0.5 text-xs font-bold text-background shadow-md">
            <Star className="h-3 w-3 fill-background" />
            <span>{item.rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div className="space-y-1">
          <h3 className="text-base font-semibold leading-tight text-foreground line-clamp-1">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.desc}
          </p>
        </div>
        <p className="mt-3 border-t pt-2 text-lg font-medium text-primary">
          {item.price}
        </p>
      </div>
    </div>
  </div>
);

export default ItemCard;
