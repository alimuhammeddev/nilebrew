"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser, SignInButton } from "@clerk/nextjs";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  } = useCart();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { isSignedIn, user } = useUser();

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    if (!isSignedIn) {
    toast.error("Please sign in to proceed to checkout");
    return;
  }

    if (!email || !phone || !address) {
      toast.error("Please fill in all delivery details before checkout");
      return;
    }

    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total * 100,
          email: "customer@example.com", // replace with form email if needed
        }),
      });

      const data = await res.json();
      console.log("Paystack initialize response:", data);

      if (data.status) {
        window.location.href = data.data.authorization_url;
      } else {
        toast.error(`Payment failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("Payment initialization error");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-36 mt-28">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-900 mb-10">
        Your <span className="text-[#763919]">Nile Brew</span> Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.length === 0 && (
            <div className="bg-white rounded-xl p-10 text-center text-gray-500">
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">
                Add products from the menu to see them here.
              </p>
            </div>
          )}

          {cart.length > 0 &&
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-white rounded-xl shadow-sm p-6"
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-[#763919]">{item.name}</h3>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="h-7 w-7 bg-[#763919] text-white rounded-full cursor-pointer"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="h-7 w-7 bg-[#763919] text-white rounded-full cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-semibold text-[#763919]">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-[#763919] cursor-pointer font-medium mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Delivery Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold text-[#763919] mb-6">
            Delivery Information
          </h2>

          {/* Form */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="text-sm font-medium text-[#763919]">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#763919]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#763919]">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234 800 000 0000"
                required
                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#763919]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#763919]">
                Delivery Address
              </label>
              <textarea
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street, city, state"
                required
                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#763919]"
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-medium">₦{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Delivery Fee</span>
              <span className="font-medium">
                ₦{deliveryFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-base font-medium text-[#763919]">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className={`mt-8 w-full py-3 rounded-sm font-medium text-sm transition ${
              cart.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#763919] text-white hover:bg-[#5c2b12] cursor-pointer"
            }`}
          >
            Proceed to Checkout
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Secure checkout · Fast delivery
          </p>
        </div>
      </div>
    </section>
  );
}
