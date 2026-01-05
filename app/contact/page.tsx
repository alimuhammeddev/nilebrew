import ContactUS from "@/components/contactus";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div>
        <ContactUS />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
