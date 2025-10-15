import { OffersCarousel, CarouselItem } from "./ui/offers-carousel";

//mock data
const specialDishes: CarouselItem[] = [
  {
    id: "1",
    title: "The Dragon's Breath Roll",
    subtitle: "Our premium special! Inside: spicy tuna and tempura flakes.",
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
  {
    id: "3",
    title: "The Dragon's Breath Roll",
    subtitle: "Our premium special! Inside: spicy tuna and tempura flakes.",
    price: "$18.50",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1563612116625-3012372fccce",
  },
  {
    id: "4",
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
      {/*Specials */}
      <OffersCarousel items={specialDishes} />
    </section>
  );
};

export default Menu;
