import Image from "next/image";

export default function Footer() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <footer>
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 lg:py-14 py-5 border-b border-[#763919] text-gray-500">
          <div className="lg:w-4/5">
            <Image src="/logo.png" alt="logo" width={120} height={40} priority
                style={{ width: "auto", height: "auto" }}/>
            <p className="mt-6 text-sm text-[#763919]">
              <span className="text-[#763919] font-semibold">Nile Brew</span> is a cozy coffee destination crafted for true coffee
              lovers. We source quality beans, brew with passion, and serve
              every cup with care. Whether you're stopping by for your morning
              boost, a relaxed meeting, or a quiet moment, Nile Brew is where
              great coffee and good vibes meet.
            </p>
          </div>

          <div className="w-1/2 flex items-center justify-start md:justify-center">
            <div>
              <h2 className="font-semibold text-[#763919] mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a className="hover:underline transition text-[#763919]" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:underline transition text-[#763919]" href="/about">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:underline transition text-[#763919]" href="/contact">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:underline transition text-[#763919]" href="/about">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 flex items-start justify-start md:justify-center">
            <div>
              <h2 className="font-semibold text-[#763919] mb-5">Get in touch</h2>
              <div className="text-sm space-y-2 text-[#763919]">
                <p>+1-234-567-890</p>
                <p>contact@nilebrew.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-[#763919]">
          Copyright 2026 © Nile Brew All Right Reserved.
        </p>
      </footer>
    </section>
  );
}