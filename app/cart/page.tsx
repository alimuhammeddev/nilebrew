import CartPage from "@/components/cartpage";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Cart() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <Suspense fallback={<div>Loading cart...</div>}>
        <CartPage />
      </Suspense>
    </section>
  );
}
