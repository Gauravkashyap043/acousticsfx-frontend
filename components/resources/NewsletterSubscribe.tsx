import Image from "next/image";

export default function NewsletterSubscribe() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-16 gap-10">

          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-[12px] tracking-widest text-gray-500 uppercase mb-4">
              Subscribe our newsletter
            </p>

            <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] leading-snug font-semibold text-gray-900 mb-8">
              Get stories in your <br /> inbox twice a month.
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-[260px] h-[44px] px-4 text-sm border border-gray-300 rounded-md outline-none focus:border-gray-500"
              />

              <button className="h-[44px] px-6 bg-[#1E6F73] text-white text-sm rounded-md hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:block">
            <Image
              src="/assets/product/newsletter-img.png (1).svg"
              alt="Newsletter Illustration"
              width={320}
              height={260}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
