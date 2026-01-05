"use client"; // required for Next.js 13+ with client-side features

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery8.jpg",
  "/gallery2.jpg",
  "/gallery9.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery15.jpg",
  "/gallery12.jpg",
  "/gallery10.jpg",
  "/gallery14.jpg",
  "/gallery13.jpg",
  "/gallery11.jpg",
];

export default function GallerySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-36 mt-28">
      <h1 className="lg:text-xl font-medium">Gallery</h1>
      <div className="w-16 h-0.5 bg-[#763919] rounded-full mt-1" />

      <div className="mt-10 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg relative bg-gray-300 dark:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Image
              src={src}
              alt={`gallery-${index + 1}`}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}