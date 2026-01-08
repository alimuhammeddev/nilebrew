import CartPage from "@/components/cartpage";
import { Navbar } from "@/components/navbar";

export default function Cart() {
    return (
        <section>
            <div>
                <Navbar />
            </div>

            <div>
                <CartPage />
            </div>
        </section>
    )
}