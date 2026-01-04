"use client";

import { Menu, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            <Link href="/cart" className="text-gray-600 hover:text-[#763919]">
              <ShoppingCart size={20} />
            </Link>
            <Link
              href="/profile"
              className="text-gray-600 hover:text-[#763919]"
            >
              <User size={20} />
            </Link>

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
