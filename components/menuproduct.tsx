"use client";

import Image from "next/image";
import products from "@/data/products";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const titleVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1 },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function MenuProduct() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [search]);

  // Filter products
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-24 mt-14">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start pt-12 mb-6"
      >
        <h1 className="lg:text-xl font-medium">All Products</h1>
        <div className="w-16 h-0.5 bg-[#763919] rounded-full mt-1" />
      </motion.div>

      {/* Search Input */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:flex justify-center mx-auto sm:w-80 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#763919]"
          />
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {visibleProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -6,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
            className="bg-gray-50 rounded-md p-4 min-h-[300px]"
          >
            <div className="overflow-hidden rounded-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="transition-transform duration-300 hover:scale-110"
                loading="eager"
                priority
              />
            </div>

            <div className="mt-4 bg-white p-2">
              <h2 className="lg:text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="lg:text-lg font-bold text-[#763919]">
                  ₦{product.price.toLocaleString()}
                </span>
                <button className="bg-[#763919] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#5c2b12] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      {visibleCount < filteredProducts.length && (
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="mt-10 bg-[#763919] text-white px-6 py-3 text-sm font-medium hover:bg-[#5c2b12] transition mx-auto flex rounded-sm"
          >
            See More
          </button>
        </motion.div>
      )}
    </section>
  );
}