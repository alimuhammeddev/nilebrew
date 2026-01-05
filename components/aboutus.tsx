"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What makes Nile Brew different?",
    answer:
      "Nile Brew blends premium coffee beans, artisan brewing techniques, and a warm atmosphere inspired by culture, creativity, and community.",
  },
  {
    question: "Do you offer food alongside coffee?",
    answer:
      "Yes! We serve a carefully curated menu of breakfast, brunch, and light meals that pair perfectly with our handcrafted drinks.",
  },
  {
    question: "Is Nile Brew a good place to work or meet?",
    answer:
      "Absolutely. Our space is designed for comfort—whether you're working remotely, hosting meetings, or catching up with friends.",
  },
  {
    question: "Do you offer takeaway and dine-in?",
    answer:
      "Yes, we offer both takeaway and dine-in services so you can enjoy Nile Brew wherever you are.",
  },
];

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-32 mt-28">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="flex flex-col items-center">
          <p className="lg:text-xl font-medium">About Nile Brew</p>
          <div className="w-28 h-0.5 bg-[#763919] mt-2"></div>
        </div>
        <p className="mt-6 lg:text-lg text-gray-600">
          Nile Brew is more than a coffee shop it's a place where flavor,
          comfort, and culture meet. Every cup is crafted with intention, and
          every visit feels like home.
        </p>
      </motion.div>

      {/* Values */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Our Coffee",
            text: "We source high quality beans and brew them to perfection, ensuring rich flavor in every sip.",
          },
          {
            title: "Our Space",
            text: "Warm, inviting, and thoughtfully designed Nile Brew is your go-to spot to relax, work, or connect.",
          },
          {
            title: "Our People",
            text: "From baristas to guests, community is at the heart of everything we do.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-md p-8 shadow-sm hover:bg-yellow-50 transition ease-out duration-700 cursor-pointer hover:scale-105"
          >
            <h3 className="lg:text-xl font-semibold text-[#763919]">
              {item.title}
            </h3>
            <p className="mt-4 text-gray-600 lg:text-base text-sm">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center lg:mt-0 mt-16"
      >
        <div>
          <h1 className="lg:text-xl font-medium">Our Story</h1>
          <div className="w-16 h-0.5 bg-[#763919] rounded-full mt-1" />
          <p className="mt-6 lg:text-lg text-gray-600">
            Nile Brew was born from a passion for exceptional coffee and
            meaningful moments. Inspired by timeless café culture, we created a
            space where people slow down, connect, and enjoy quality one cup at
            a time.
          </p>
        </div>
        <div className="relative w-full aspect-square rounded-md overflow-hidden">
          <Image
            src="/story.jpg"
            alt="our-story"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col items-center">
          <p className="lg:text-xl font-medium">Frequently Asked Questions</p>
          <div className="w-28 h-0.5 bg-[#763919] mt-2"></div>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="lg:text-lg text-sm font-medium text-[#763919]">
                  {faq.question}
                </span>
                <span className="text-2xl text-[#763919]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 lg:text-base text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
