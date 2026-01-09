"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

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

          <button className="mt-8 w-full bg-[#763919] text-white py-3 rounded-sm font-medium text-sm cursor-pointer hover:bg-[#5c2b12] transition">
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
