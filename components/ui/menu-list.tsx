import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface MenuItem {
  name: string;
  price: string;
  shortdesc: string;
}

export interface MenuCategory {
  name?: string;
  items: MenuItem[];
}

export const MenuList = ({ category }: { category?: MenuCategory }) => {
  const items = category?.items || [];

  // Split items roughly in half for two columns on large screens
  const midIndex = Math.ceil(items.length / 2);
  const firstCol = items.slice(0, midIndex);
  const secondCol = items.slice(midIndex);

  return (
    <Accordion type="single" collapsible defaultValue="item-0">
      <AccordionItem value="item-0" className="border-none">
        <AccordionTrigger className="p-2 bg-foreground/10 backdrop-blur-md mb-4 rounded-md text-lg md:text-xl text-center font-medium text-foreground hover:no-underline">
          {category?.name}
        </AccordionTrigger>
        <AccordionContent>
          {/* Responsive grid for menu items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[firstCol, secondCol].map((colItems, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {colItems.length > 0 ? (
                  colItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start group"
                    >
                      <div className="pr-4">
                        <p className="text-sm md:text-base text-foreground/70 group-hover:text-foreground transition-colors">
                          {item.name}
                        </p>
                        <p className="text-sm text-foreground/70 max-w-lg line-clamp-2">
                          {item.shortdesc}
                        </p>
                      </div>
                      <span className="text-base md:text-lg font-medium flex-shrink-0 text-foreground/70 group-hover:text-foreground">
                        {item.price}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-foreground/60">...</p>
                )}
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuList;
