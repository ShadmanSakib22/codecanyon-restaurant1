import React from "react";
import Image from "next/image";
import {
  OffersCarousel,
  OffersCarouselProps,
  CarouselItem,
} from "./ui/offers-carousel";

//mock data
const specialDishes: CarouselItem[] = [
  {
    id: "1",
    title: "The Dragon's Breath Roll",
    subtitle:
      "Our premium special! Inside: spicy tuna and tempura flakes. Topped with seared salmon, a sweet eel sauce reduction, and thin slices of jalapeño.",
    price: "$18.50",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1563612116625-3012372fccce",
  },
  {
    id: "2",
    title: "Seasonal Sashimi Platter",
    subtitle: "A hand-selected assortment of five different seasonal fish.",
    price: "$24.00",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
];

const Menu = () => {
  return (
    <section className="mt-10 md:mt-16 lg:mt-24 container">
      {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-7">
          Today&apos;s Specials Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2> */}
      {/*Specials */}
      <div className="">
        <OffersCarousel items={specialDishes} />
      </div>
      {/*menu tabs */}
      <div>tabs</div>
    </section>
  );
};

export default Menu;
