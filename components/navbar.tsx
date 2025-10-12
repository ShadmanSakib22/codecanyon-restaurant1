"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageDropdown from "@/components/ui/lang-dropdown";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    setIsTop(window.scrollY === 0);
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        "fixed top-0 w-full py-4 z-50 transition-colors duration-300 ease-in-out " +
        (isTop
          ? "bg-transparent text-secondary"
          : "bg-secondary/95 backdrop-blur-sm text-primary shadow-md")
      }
    >
      <div className="container flex justify-between items-center">
        {/* Brand/Logo Name or Image */}
        <Link href="/" className="text-xl font-bold tracking-wider">
          Logo
        </Link>

        {/* Navigation Links and Actions */}
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/about" className="hover:underline underline-offset-4">
              About
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:underline underline-offset-4">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:underline underline-offset-4">
              Specials
            </Link>
          </li>

          {/* Language Selector */}
          <li>
            <LanguageDropdown isTop={isTop} />
          </li>

          {/* Contact Button */}
          <li>
            <Link href="/contact" passHref>
              <Button
                className="font-semibold min-w-auto"
                variant={isTop ? "secondary" : "default"}
              >
                <PhoneCall /> Contact Us
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
