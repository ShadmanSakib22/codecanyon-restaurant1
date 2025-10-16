import { MenuList, MenuCategory } from "./menu-list";
import { OffersCarousel, CarouselItem } from "./ui/offers-carousel";

// mock data
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

// mock data - menu list
const menuCategories: MenuCategory[] = [
  {
    name: "Classic Nigiri & Sashimi",
    items: [
      { name: "Maguro (Tuna)", price: 6.0, desc: "Finest quality red tuna." },
      {
        name: "Sake (Salmon)",
        price: 5.5,
        desc: "Fresh Atlantic salmon slice.",
      },
      {
        name: "Unagi (Eel)",
        price: 7.5,
        desc: "Grilled eel with house-made sweet sauce.",
      },
      {
        name: "Hamachi (Yellowtail)",
        price: 6.5,
        desc: "Light, buttery yellowtail, a house favorite.",
      },
      { name: "Ebi (Shrimp)", price: 4.5, desc: "Cooked shrimp." },
    ],
  },
  {
    name: "Specialty Rolls",
    items: [
      {
        name: "Crispy Crunch Roll",
        price: 15.0,
        desc: "Shrimp tempura, avocado, topped with spicy mayo and flakes.",
      },
      {
        name: "Kyoto Dragon Roll",
        price: 17.5,
        desc: "Eel and cucumber inside, avocado and eel sauce on top.",
      },
      {
        name: "Spicy Tuna Volcano",
        price: 14.5,
        desc: "Spicy tuna, cucumber, topped with wasabi tobiko.",
      },
    ],
  },
  {
    name: "Hot Kitchen & Soups",
    items: [
      {
        name: "Tonkotsu Ramen",
        price: 16.0,
        desc: "Rich 18hr pork broth, chashu pork, egg, and nori.",
      },
      {
        name: "Assorted Tempura",
        price: 12.0,
        desc: "Shrimp and seasonal vegetables, light batter.",
      },
      {
        name: "Gyoza (Pork/Veg)",
        price: 8.0,
        desc: "Six pan-fried dumplings with ponzu dipping sauce.",
      },
      {
        name: "Miso Soup",
        price: 3.5,
        desc: "Traditional soybean paste broth.",
      },
    ],
  },
];

const Menu = () => {
  return (
    <section className="mt-10 md:mt-24 lg:mt-32 container">
      {/* Specials */}
      <OffersCarousel items={specialDishes} />

      <div className="w-full h-px bg-gray-200 my-8 md:my-12" id="main-menu" />

      {/* Menu */}
      {menuCategories.map((category) => (
        <MenuList key={category.name} category={category} />
      ))}
    </section>
  );
};

export default Menu;
