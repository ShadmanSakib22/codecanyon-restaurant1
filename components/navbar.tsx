"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageDropdown from "@/components/ui/lang-dropdown";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Handle clicking outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scroll when menu is open
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={
          "fixed top-0 z-10 w-full py-4 transition-colors duration-300 ease-in-out " +
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

          {/* Desktop Navigation Links and Actions */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="#specials"
                className="hover:underline underline-offset-4"
              >
                Specials
              </Link>
            </li>
            <li>
              <Link href="#menu" className="hover:underline underline-offset-4">
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                className="hover:underline underline-offset-4"
              >
                Reviews
              </Link>
            </li>

            {/* Language Selector */}
            <li>
              <LanguageDropdown isTop={isTop} />
            </li>

            {/* Contact Button */}
            <li>
              <Link href="#contact" passHref>
                <Button
                  className="font-semibold min-w-auto"
                  variant={isTop ? "secondary" : "default"}
                >
                  <PhoneCall /> Contact Us
                </Button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md transition-colors duration-200 hover:bg-secondary/10"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {!isMobileMenuOpen && (
              <Menu
                className={`w-6 h-6 ${
                  isTop ? "text-secondary" : "text-primary"
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 left-0 w-80 bg-secondary/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-2 px-6">
          <div className="flex gap-5 mb-7">
            {/* Brand/Logo Name or Image */}
            <Link href="/" className="text-2xl font-bold tracking-wider">
              Logo
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="ml-auto md:hidden p-2 rounded-md transition-colors duration-200 hover:bg-secondary/10"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen && <X className={`w-6 h-6 text-foreground`} />}
            </button>
          </div>
          {/* Mobile Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-6">
              <li>
                <Link
                  href="#specials"
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-foreground py-2 border-b border-foreground/40 hover:opacity-60"
                >
                  Specials
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-foreground py-2 border-b border-foreground/40 hover:opacity-60"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-foreground py-2 border-b border-foreground/40 hover:opacity-60"
                >
                  Reviews
                </Link>
              </li>
            </ul>

            {/* Mobile Language Selector and Contact Button */}
            <div className="mt-14 space-y-4 pb-6">
              <div className="w-full border border-foreground/20 rounded-md bg-secondary">
                <LanguageDropdown isTop={false} />
              </div>

              <Link href="#contact" onClick={closeMobileMenu} className="block">
                <Button className="w-full font-semibold" variant="default">
                  <PhoneCall className="w-4 h-4 mr-2" /> Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;
