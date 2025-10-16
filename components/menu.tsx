import { MenuList, MenuCategory } from "@/components/ui/menu-list";
import { OffersCarousel, CarouselItem } from "@/components/ui/offers-carousel";
import { HandCoins, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/motions/fadeup";

// mock data - featured/specials
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
          <OffersCarousel items={specialDishes} />
        </div>
      </div>

      <hr className="mt-10 mb-8" />

      {/* Menu */}
      <FadeUp>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-5 text-center md:text-left">
          Menu Card <HandCoins className="inline-flex" />
        </h2>
        {menuCategories.map((category) => (
          <MenuList key={category.name} category={category} />
        ))}
      </FadeUp>
    </section>
  );
};

export default Menu;
