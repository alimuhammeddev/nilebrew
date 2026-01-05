import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function About() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div>
        <AboutUs />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
