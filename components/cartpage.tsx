import Image from "next/image";

export default function CartPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-36 mt-28">
      <h1 className="lg:text-2xl text-lg font-semibold text-gray-900 mb-10">
        Your <span className="text-[#763919]">Nile Brew</span> Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-sm p-6">
            <div className="w-28 h-28 bg-gray-100 rounded-xl relative overflow-hidden">
              <Image
                src="/coffee1.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="flex-1 w-full">
              <h3 className="text-lg font-semibold text-[#763919]">
                Classic Arabica
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Rich aroma & smooth taste
              </p>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-[#763919] hover:bg-[#5c2b12] text-lg text-[#ffffff]">
                      −
                    </button>
                    <span className="font-medium">1</span>
                    <button className="w-8 h-8 rounded-full bg-[#763919] hover:bg-[#5c2b12] text-lg text-[#ffffff]">
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text-[#763919] font-medium text-sm mt-2 cursor-pointer">Remove</p>
                  </div>
                </div>

                <p className="font-semibold text-[#763919]">₦4,500</p>
              </div>
            </div>
          </div>
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
                className="mt-1 w-full rounded-sm border border-gray-300 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#763919]"
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-medium">₦4,500</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Delivery Fee</span>
              <span className="font-medium">₦400</span>
            </div>

            <div className="flex justify-between text-base font-medium text-[#763919]">
              <span>Total</span>
              <span>₦4,900</span>
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
