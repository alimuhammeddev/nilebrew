import Footer from "@/components/footer";
import GallerySection from "@/components/gallerysection";
import { Navbar } from "@/components/navbar";

export default function Gallery() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div>
        <GallerySection />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
