export default function ContactUS() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-32 mt-28">
      <div className="flex flex-col items-center">
        <p className="lg:text-xl font-medium">Contact Us</p>
        <div className="w-28 h-0.5 bg-[#763919] mt-2"></div>
      </div>
      <div className="flex lg:flex-row flex-col items-center mx-auto justify-between lg:gap-28 gap-5 mt-10">
        <div className="space-y-4">
          <h1 className="text-lg lg:text-2xl font-medium">
            Let's Brew Something Exceptional
          </h1>
          <p className="text-gray-600 lg:text-base text-sm">
            Have a question, collaboration idea, or feedback? Connect with{" "}
            <span className="font-medium text-[#763919]">Nile Brew</span> where
            every conversation starts with great coffee.
          </p>
        </div>
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#763919]"
            />
          </div>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#763919]"
            />
          </div>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#763919]"
            />
          </div>
          <div className="mb-8">
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#763919]"
            />
          </div>
          <button className="bg-[#763919] text-white px-6 py-3 text-sm font-medium hover:bg-[#5c2b12] transition rounded-sm cursor-pointer w-full">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
