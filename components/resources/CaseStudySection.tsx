import Image from "next/image";
import Link from "next/link";

type CaseStudyProps = {
  reverse?: boolean;
  image: string;
  bgColor?: "white" | "light-blue";
};

export default function CaseStudySection({ 
  reverse = false, 
  image,
  bgColor = "white"
}: CaseStudyProps) {
  const bgClass = bgColor === "light-blue" ? "bg-[#F4F6FF]" : "bg-white";
  
  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER CONTENT */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] axiforma font-bold mb-4 text-gray-900">
            Case Study Header to be placed here
          </h2>

          <p className="text-[18px] sm:text-[19px] lg:text-[20px] inter-font font-[400] text-gray-600 mb-4 leading-relaxed">
            Revolutionizing technology by exceeding industry benchmarks.
          </p>

          <p className="text-[15px] sm:text-[16px] inter-font font-[400] text-gray-500 mb-6 leading-relaxed">
            Harness the power of AI to automate and enhance business processes.
            We utilize cutting-edge AI technologies to develop intelligent systems
            that improve efficiency and drive innovation.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 text-sm rounded-full hover:bg-gray-100 transition"
          >
            Get the Full Rundown →
          </Link>
        </div>

        {/* CARD */}
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-10 items-center bg-[#F4F6FF] rounded-2xl p-6 sm:p-8`}
        >
          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden">
              <Image
                src={image}
                alt="Case Study"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] axiforma font-bold mb-3 text-gray-900">
              Website Design for SCFC Canada
            </h3>

            <p className="text-[16px] sm:text-[17px] lg:text-[18px] inter-font font-[400] text-gray-600 mb-6 leading-relaxed">
              Born out of vision, a single-minded objective that puts service before
              everything else, SMH Clearance and Forwarding Corp, using fortis to deliver
              cost-effective shipping and logistics solutions.
            </p>

            <Link
              href="#"
              className="text-blue-600 font-medium text-sm hover:underline"
            >
              Explore Case Study →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
