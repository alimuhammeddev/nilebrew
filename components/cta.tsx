"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="relative overflow-hidden rounded-xl bg-[#763919] px-8 py-14 text-center shadow-xl">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>

        <motion.h2
          className="lg:text-3xl text-xl font-bold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Join Us Today
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl mx-auto lg:text-lg text-white/90"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          Sign up now and be the first to receive exclusive offers, new blends,
          and special updates crafted just for coffee lovers.
        </motion.p>

        {/* Get Started Button with Clerk Auth */}
        <SignedOut>
          <SignInButton mode="modal">
            <motion.button
              className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-8 py-3 lg:text-lg font-semibold text-[#763919] shadow-md hover:bg-[#f0e6dc] transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
            >
              Get Started
            </motion.button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <motion.button
            className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-8 py-3 lg:text-lg font-semibold text-[#763919] shadow-md cursor-default"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            Get Started
          </motion.button>
        </SignedIn>
      </div>
    </section>
  );
}
