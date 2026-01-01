"use client";

import Image from "next/image";
import products from "@/data/products";
import { motion } from "framer-motion";

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

export default function HomeProduct() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

      {/* Section */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start pt-12 mb-8"
      >
        <h1 className="lg:text-xl font-medium">Popular Coffee</h1>
        <div className="w-16 h-0.5 bg-[#763919] rounded-full mt-1"></div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-5"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -6,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
            className="w-full sm:w-72 bg-gray-50 rounded-md p-4 transition min-h-[300px]"
          >
            <div className="overflow-hidden rounded-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="transition-transform duration-300 hover:scale-110"
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
                <button className="bg-[#763919] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#5c2b12] transition cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

        <button className="mt-10 bg-[#763919] text-white px-6 py-3 text-sm font-medium hover:bg-[#5c2b12] transition justify-center mx-auto flex rounded-sm cursor-pointer">
          View All Products
        </button>
    </section>
  );
}