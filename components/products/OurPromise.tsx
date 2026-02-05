import Image from "next/image";

export default function OurPromise() {
  return (
    <section className="w-full bg-white">
      <div className="px-[100px] py-[100px]">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="text-[17px] text-[#EA8E39] mb-4 inter-font font-[600]">
            Our Promise
          </p>

          <h2 className="text-[50px] inter-font font-[600] text-[#EA8E39] leading-snug mb-6">
            We Serve Quality and <br /> Premium
          </h2>

          <p className="text-[20px] inter-font font-[400] text-gray-400 leading-relaxed">
            Businesses on FXAcoustic Solution that make over $50,000 per month
            qualify for account management services.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-4 gap-16">

          {/* Item 1 */}
          <div>
            <div className="w-12 h-12 mb-6 relative">
              <Image
                src="/assets/product/SVG (1).svg"   // apna SVG path
                alt="Growth"
                width={81}
                height={81}
              />
            </div>
            <h4 className="text-[15px] inter-font font-semibold mb-3">Growth</h4>
            <p className="text-[15px] inter-font text-gray-400 leading-relaxed">
              At FX Acoustic, Account Managers focus on boosting your growth.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="w-12 h-12 mb-6 relative">
              <Image
                src="/assets/product/SVG.svg"   // apna SVG path
                alt="Growth"
                width={81}
                height={81}
              />
            </div>
            <h4 className="text-[15px] inter-font font-semibold mb-3">
              Dedicated support contact
            </h4>
            <p className="text-[15px] inter-font text-gray-400 leading-relaxed">
              Account Managers are available 24/7 via call, email, or text.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="w-12 h-12 mb-6 relative">
              <Image
                src="/assets/product/SVG (2).svg"   // apna SVG path
                alt="Growth"
                width={81}
                height={81}
              />
            </div>
            <h4 className="text-[15px] inter-font font-semibold mb-3">
              Exposure
            </h4>
            <p className="text-[15px] inter-font text-gray-400 leading-relaxed">
              Our Account Managers enhance your exposure on social platforms.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="w-12 h-12 mb-6 relative">
              <Image
                src="/assets/product/SVG (3).svg"   // apna SVG path
                alt="Growth"
                width={81}
                height={81}
              />
            </div>
            <h4 className="text-[15px] inter-font font-semibold mb-3">
              Services & reporting
            </h4>
            <p className="text-[15px] inter-font text-gray-400 leading-relaxed">
              Regular reports to track insights and progress.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
