import { Navbar } from "../components/navbar";
import Hero from "../components/hero";
import HomeProduct from "../components/homeproduct";

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
    </section>
  );
}
