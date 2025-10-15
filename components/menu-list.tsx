import React from "react";
export interface MenuItem {
  name: string;
  price: number;
  desc: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const MenuList = ({ category }: { category: MenuCategory }) => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground p-2 bg-foreground/40 backdrop-blur-md mb-4">
          {category.name}
        </h3>
        <div className="space-y-4">
          {category.items.map((item, index) => (
            <div key={index} className="flex justify-between items-start group">
              <div className="pr-4">
                <p className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 max-w-lg">{item.desc}</p>
              </div>
              <span className="text-lg font-bold text-red-600 flex-shrink-0">
                ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuList;
