"use client";

import { Menu, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Brand Logo"
                width={120}
                height={40}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8 justify-center flex-1">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#763919] font-medium"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-gray-600 hover:text-[#763919] font-medium"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#763919] font-medium"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-[#763919] font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#763919] font-medium"
            >
              Contact
            </Link>
          </div>

          {/* icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart size={20}  className="text-gray-600 hover:text-[#763919] cursor-pointer"/>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#763919] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="flex items-center">
              <ClerkLoading>
                {/* Placeholder while Clerk hydrates */}
                <User size={20} className="text-gray-400" />
              </ClerkLoading>

              <ClerkLoaded>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="text-gray-600 hover:text-[#763919] cursor-pointer">
                      <User size={20} />
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-6 h-6",
                      },
                    }}
                  />
                </SignedIn>
              </ClerkLoaded>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-[#763919] cursor-pointer"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#763919] px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/menu" className="block text-white hover:text-gray-400">
            Menu
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-400">
            About
          </Link>
          <Link
            href="/gallery"
            className="block text-white hover:text-gray-400"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
