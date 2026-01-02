import { Navbar } from "../components/navbar";
import Hero from "../components/hero";
import HomeProduct from "../components/homeproduct";
import FeaturedProduct from "@/components/featuredproduct";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <HomeProduct />
      </div>
      <div>
        <FeaturedProduct />
      </div>
      <div>
        <CTA />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
