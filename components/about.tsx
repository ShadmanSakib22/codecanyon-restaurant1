import React from "react";
import Image from "next/image";

interface DishInfoProps {
  title: string;
  desc: string;
  price: string;
  imgurl: string;
  imgalt: string;
}

//mock data
const dishInfo: DishInfoProps[] = [
  {
    title: "The Dragon's Breath Roll",
    desc: "Our premium special! Inside: spicy tuna and tempura flakes. Topped with seared salmon, a sweet eel sauce reduction, and thin slices of jalapeño.",
    price: "$18.50",
    imgurl: "https://images.unsplash.com/photo-1563612116625-3012372fccce",
    imgalt: "Spicy sushi roll topped with seared salmon and eel sauce",
  },
  {
    title: "Seasonal Sashimi Platter",
    desc: "A hand-selected assortment of five different seasonal fish.",
    price: "$24.00",
    imgurl: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    imgalt: "Assortment of fresh sashimi on an ice bed with garnish",
  },
];

const about = () => {
  return (
    <section className="mt-10 md:mt-16 lg:mt-24 container grid md:grid-cols-2 gap-y-5 gap-x-20">
      {/* <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-7">
          Today&apos;s Specials
        </h2>

        {dishInfo.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-md bg-foreground/5 backdrop-blur-sm flex gap-5 p-5 items-start mb-5"
          >
            <div className="aspect-square relative size-36">
              <Image
                src={item.imgurl}
                alt={item.imgalt}
                fill
                className="rounded-sm object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between gap-5 overflow-hidden">
              <div className="space-y-1.5">
                <h3 className="font-medium text-xl md:text-2xl capitalize truncate">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg line-clamp-2">{item.desc}</p>
              </div>
              <p className="text-right text-xl">{item.price}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair">
          About
        </h2>
        <p className="mt-6 text-base md:text-lg max-w-2xl line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          necessitatibus, sunt tenetur harum, consequatur maxime ea laboriosam
          explicabo expedita minus fugit aliquid sapiente accusantium officiis
          placeat odio nisi tempora nulla.
        </p>
        <div className="w-full h-[260px] relative rounded-md overflow-hidden mt-6">
          <Image
            src={"/example-aboutimg.jpg"}
            alt="chef"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default about;
