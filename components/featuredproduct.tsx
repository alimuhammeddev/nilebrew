"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    image: "/featured1.png",
    title: "Midnight Roast Blend",
    description:
      "A bold, deep roast crafted for late-night thinkers and coffee lovers.",
  },
  {
    id: 2,
    image: "/featured2.jpg",
    title: "Golden Sunrise Brew",
    description:
      "A smooth and uplifting blend perfect for starting your morning right.",
  },
  {
    id: 3,
    image: "/featured3.jpg",
    title: "Velvet Arabica Reserve",
    description: "Experience our new coffee",
  },
];

export default function FeaturedProduct() {
  const router = useRouter();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      <div className="flex flex-col items-center">
        <p className="lg:text-xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-[#763919] mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12">
        {products.map(({ id, image, title, description }, index) => (
          <motion.div
            key={id}
            className="relative group"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />

            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 lg:left-8 left-5 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button
                onClick={() => router.push("/menu")}
                className="flex items-center gap-1.5 bg-[#763919] px-4 py-2 rounded cursor-pointer"
              >
                Order now <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
