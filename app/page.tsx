import { Navbar } from "../components/navbar";
import Hero from "../components/hero";
import HomeProduct from "../components/homeproduct";
import FeaturedProduct from "@/components/featuredproduct";

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
    </section>
  );
}
