"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-36 mt-28">
      <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-10 gap-6">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-3 lg:max-w-lg"
        >
          <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-900">
            Welcome to <span className="text-[#763919]">Nile Brew</span>
          </h1>

          <p className="lg:text-lg text-gray-700 lg:text-start md:text-center">
            Experience the perfect cup of coffee brewed with love and tradition.
            From rich espresso shots to creamy lattes, your coffee journey
            starts here.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 lg:justify-start md: justify-center md:mx-auto"
          >
            <a
              href="/menu"
              className="inline-block px-6 lg:py-3 py-2 bg-[#763919] text-white font-semibold rounded-sm shadow-lg hover:bg-[#5c2b12] transition-transform"
            >
              Explore Menu
            </a>

            <a
              href="#order"
              className="inline-block px-6 lg:py-3 py-2 border-2 border-[#763919] text-[#763919] font-semibold rounded-sm hover:bg-yellow-50 transition-transform"
            >
              Order Now
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/hero.png"
            alt="Hero Image of Coffee"
            width={500}
            height={400}
            className="w-full max-w-md h-auto rounded-2xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}