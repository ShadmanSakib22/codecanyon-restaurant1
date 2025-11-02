import { MenuList, MenuCategory } from "@/components/ui/menu-list";
import { OffersCarousel } from "@/components/ui/offers-carousel";
import { CardItemProps } from "@/components/ui/item-card";
import { HandCoins, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionReveal from "@/components/ui/motion-reveal";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations();

  // Specials
  const rawSpecials = t.raw("specials");
  const specials: CardItemProps[] = Array.isArray(rawSpecials)
    ? rawSpecials
    : [];

  // Menu items (group by category)
  const rawItems = t.raw("items");
  const allItems: unknown[] = Array.isArray(rawItems) ? rawItems : [];
  const menuCategories: MenuCategory[] = Object.values(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allItems.reduce((acc: Record<string, MenuCategory>, item: any) => {
      const category = item.category || "Items";
      if (!acc[category]) acc[category] = { name: category, items: [] };
      acc[category].items.push({
        name: item.name,
        price: item.price,
        shortdesc: item.shortdesc,
      });
      return acc;
    }, {})
  );

  return (
    <section className="mt-10 md:mt-24 lg:mt-32 container">
      {/* Specials Section */}
      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-12 items-start">
        {/* Left: CTA */}
        <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left p-4 lg:p-0">
          <div className="flex items-center gap-2 mb-2 rounded-2xl py-1 px-2.5 border bg-foreground/5 backdrop-blur-xs">
            <UtensilsCrossed className="h-5 w-5" />
            <p className="text-xs font-medium uppercase tracking-wider">
              {t("specialsUi.badge")}
            </p>
          </div>
          <h2
            id="specials"
            className="text-3xl font-extrabold tracking-tight text-foreground"
          >
            {t("specialsUi.title")}
          </h2>
          <p className="mt-3 mb-6 text-base text-muted-foreground max-w-sm lg:max-w-none">
            {t("specialsUi.subtitle")}
          </p>
          <Link href="#reserve">
            <Button variant="secondary" className="border">
              {t("common.reserveNow")}
            </Button>
          </Link>
        </div>

        {/* Right: Carousel */}
        <div className="relative lg:col-span-9">
          <OffersCarousel items={specials} />
        </div>
      </div>

      <hr className="mt-10 mb-8" />

      {/* Menu Section */}
      <MotionReveal>
        <h2
          id="menu"
          className="text-3xl font-extrabold tracking-tight text-foreground mb-5 text-center md:text-left"
        >
          {t("specialsUi.menuCard")} <HandCoins className="inline-flex" />
        </h2>
        {menuCategories.map((category) => (
          <MenuList key={category.name} category={category} />
        ))}
      </MotionReveal>
    </section>
  );
};

export default Menu;
