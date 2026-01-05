import Footer from "@/components/footer";
import MenuProduct from "@/components/menuproduct";
import { Navbar } from "@/components/navbar";

export default function Menu() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <MenuProduct />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
